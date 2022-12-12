import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from "moment";
import { getDeleteUserAPI, instance } from '../API';
import { GetRefreshToken } from '../RefreshToken';

export default function DeleteUser() {

  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 사용자를 삭제한다.
  const DeUser = async () => {
    try {
      const response = await getDeleteUserAPI(localStorage.getItem("Id"));
      localStorage.clear();
    } catch (e) {
      console.error(e);
    }
  }
  const DeleteUs = () => {
    try {
        // 400000이하로 떨어지면
        GetRefreshToken();
        setOpen(false);
        DeUser();
        alert("탈퇴 완료")
        history.push("/");
        history.go(0);
      } catch(e) {
    console.log(e)
  }
  }
  return (
    <div>
      <Link variant="contained" onClick={handleClickOpen} style={{fontSize: "14px"}}>
        회원탈퇴
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            회원 탈퇴를 하시면 작성하신 글과 댓글이 모두 사라지게 됩니다.
            <br></br>정말 회원 탈퇴 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={DeleteUs} autoFocus>
            탈퇴
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}