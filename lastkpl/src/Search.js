import axios from "axios";
import { useState } from "react";

export default function Search() {
    const [posts, setPosts] = useState();

  const url = "http://bestinwoo.hopto.org:8080/post";
  const [item, setItem] = useState("");

  const searchItem = (event) => {
    setItem(event.target.value);
  };

  const fetchMovie = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          boardId: localStorage.getItem("category"),
          keyword: item,
          size: 0,
          sort: 0,
        },
      });
      const newMovieList = response.data.data.content;
      setPosts(newMovieList);
      console.log(posts);
      localStorage.setItem("totalElements", response.data.data.totalElements);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <>
    <div className="inputHalf">
    <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="제목 입력"
        />
        <button type="button" id="search_btn">
          {/* <BiSearchAlt2 className="search_icon"></BiSearchAlt2> */}
        </button>
      </div>
    </div>
      
    </>
  );
}
