import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";
import axios from "axios";


const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  width: 50%;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Modal({setData, profile}) {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  console.log(name)
  
  const data = {
        name: name,
        id: localStorage.getItem("Id"),
        sex: sex,
        height: height,
        weight: weight 
    }
  
  useEffect(() => {
    setData(data);
  },[name, id, sex, height, weight])

  return (
    <>
      <Div>
        <TitleInput placeholder="아이디" class="changeUser" name='id' onChange={(event) => setId(event.target.value)} value={profile.id} readOnly></TitleInput>
        <TitleInput placeholder={profile.name} class="changeUser" name='name' onChange={(event) => setName(event.target.value)}></TitleInput>
        <input type="text" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" placeholder={profile.height} class="changeUser" name='height' onChange={(event) => setHeight(event.target.value)}></input>
        <TitleInput type="number" placeholder={profile.weight} class="changeUser" name='weight' onChange={(event) => setWeight(event.target.value)}></TitleInput>
        <select onChange={(event) => setSex(event.target.value)} value="선택">
          <option key="men" value="남자">남자</option>
          <option key="girl" value="여자">여자</option>
        </select>
      </Div>
      
    </>
  );
}