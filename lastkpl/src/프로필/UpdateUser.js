import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { GetRefreshToken } from '../RefreshToken';
import { getUpdateUserAPI } from '../API';
import Modal from './UpModal';

export default function UpdateIntro({profile}) {
    // 창 열기
    const [open, setOpen] = useState(false);
    // 회원정보 data
    const [data, setData] = useState("")
    console.log(data)
    const history = useHistory();

    // 회원정보 수정
    const UpdateUserAPI = async () => {
        try {
          const response = await getUpdateUserAPI(data);
          console.log(response)
          // handleClose();
        } catch (e) {
          console.error(e);
        }
    };
    // 창 열기
    const handleClickOpen = () => {
        if(localStorage.getItem("State") === null) {
        alert("로그인 후 이용해주세요.");
        } else {
            GetRefreshToken();
            setOpen(localStorage.getItem("openmodal"));
        }
    };
    const handleClose = () => { 
        setOpen(localStorage.setItem("openmodal", false));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        e.persist();
        UpdateUserAPI();
        console.log(data)
        // handleClose();
    }

  return (
    <div>
      <Link variant="contained" onClick={handleClickOpen} style={{fontSize: "14px"}}>
        회원정보 변경
      </Link>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogContent dividers>
          <DialogContentText >
            <Modal setData={setData} profile={profile}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">취소</Button>
          <Button onClick={(e) => {onSubmit(e)}} variant="contained">저장</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}