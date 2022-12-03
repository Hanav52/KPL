import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from './Modal';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { getSaveCommentAPI } from '../API';
import { GetRefreshToken } from '../RefreshToken';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
    },
    secondary: {
      main: '#ff7473',
    },
    three: {
      main: '#ffa000'
    },
    four: {
      main: '#ff9800'
    }
  },
});

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddComment() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("AccessToken"),
    'Content-Type': 'multipart/form-data'
    }};

  const handleClickOpen = () => {
    if(visible === null) {
      alert("로그인 후 이용해주세요.");
    } else {
      alert("글 작성하기");
      GetRefreshToken();
      setOpen(localStorage.getItem("openmodal"));
    }
  };
  const handleClose = () => { 
    setOpen(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();
    formData.append("b_num", localStorage.getItem("b_num"));
    formData.append("u_num", localStorage.getItem("idIndex"));
    formData.append("id", localStorage.getItem("Id"));
    formData.append("comment", content);
    let files = e.target.profile_files.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("c_img", files[i]);
    }
    let entries = formData.entries();
    for (const pair of entries) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
    const response = await getSaveCommentAPI(formData, config);
    console.log(response)

  };
// localstorage에서 데이터 받아오기
  const [visible, setVisible] = useState();
  useEffect(() => {
    setVisible(localStorage.getItem("State"));
},[]);
  
  return (
    <div>
      <ThemeProvider theme={theme1}>
      <Button variant="contained" onClick={handleClickOpen} style={{color: '#fff'}}>
        글 쓰기
      </Button>
      </ThemeProvider>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='lg'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          작성
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Modal setContent={setContent}/>
          <p></p>
          
        </DialogContent>
        <DialogActions>
        <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="file"
              name="profile_files"
              multiple="multiple"
              accept='image/jpg,impge/png,image/jpeg'
            />
            <ThemeProvider theme={theme1}>
            <Button type="submit" onClick={handleClose} variant="contained">업로드</Button>
            </ThemeProvider>
        </form>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}