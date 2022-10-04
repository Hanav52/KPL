import {  BiSearchAlt2 } from "react-icons/bi";
//제목 검색 부분
export default function Serarch({onClick, onChange}) {
  
  return (
    <>
    <div className="inputHalf">
    <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="제목 입력"
          onChange={onChange}
        />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </div>
      
    </>
  );
}
