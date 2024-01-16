import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumDesc from "./AlbumDesc";

export default function SearchBar() {
  const [songInput, setSongInput] = useState("Never gonna give you up");
  const [inputText, setInputText] = useState();
  const [lyrics, setLyrics] = useState();
  const [name, setName] = useState("Never gonna give you up");
  const [singer, setSinger] = useState("Rick Astley");
  const [songImage, setSongImage] = useState("");

  const searchSong = () => {
    setSongInput(inputText);
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const options_songLyrics = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
      params: { id: "2851948" },
      headers: {
        "X-RapidAPI-Key": "a78cb6a584msh9ad45bb68eaecf3p180f49jsn289fa2db8ab6",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    const options_songID = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
      params: {
        q: "Not afraid",
        per_page: "10",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "a78cb6a584msh9ad45bb68eaecf3p180f49jsn289fa2db8ab6",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    const findLyrics = (song__id) => {
      options_songLyrics.params.id = song__id;
      axios
        .request(options_songLyrics)
        .then(function (response) {
          console.log(response.data.lyrics.lyrics.body.html);
          setLyrics(response.data.lyrics.lyrics.body.html);
        })
        .catch(function (error) {
          console.error(error + " ");
        });
    };
    const findSong = () => {
      options_songID.params.q = songInput;
      axios
        .request(options_songID)
        .then(function (response) {
          console.log(response.data);
          findLyrics(response.data.hits[0].result.id);
          setName(response.data.hits[0].result.title);
          setSinger(response.data.hits[0].result.artist_names);
          setSongImage(response.data.hits[0].result.header_image_url);
        })
        .catch(function (error) {
          console.error(error + " ");
        });
    };

    findSong();
  }, [songInput]);
  return (
    <div>
      <div className="flex flex-col mt-[2rem] justify-center items-center sm:flex-row">
        <input
          className="w-[80%] rounded-[20px] p-4 bg-[#CAF0F8] md:w-[55%] text-black shadow-md ]"
          placeholder="Search your song here..." 
          required
          onChange={handleChange}
        />
        <button
          onClick={searchSong}
          className=" py-3 bg-[#0097D8]  rounded-[20px] w-1/2 text-center mt-4  text-white shadow-md shadow-[#0097D8]  text-xl cursor-pointer md:w-[16%] md:mt-0 md:mx-2 md:hover:bg-[#0a4c68]"
        >
          Search
        </button>
      </div>
      <div>
        <div className="my-20 flex justify-center items-center flex-col md:flex-row">
          <AlbumDesc sName={name} sSinger={singer} sSongImage={songImage} />
          <div className="lyrics w-[80%] h-1/4 font-bold rounded-[20px] p-4 text-center md:w-[45%] md:h-[50vh] md:overflow-y-scroll scrollbar-thin scrollbar-thumb-[#0097D8] scrollbar-track-transparent md:bg-[#CAF0F8]">
            <div dangerouslySetInnerHTML={{ __html: lyrics }} />
          </div>
        </div>
      </div>
    </div>
  );
}
