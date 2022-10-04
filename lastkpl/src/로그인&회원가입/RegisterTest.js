import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Popup from './Popup';
import { Avatar, Typography } from '@mui/material';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import '../stylemain.css'
import { ConstructionOutlined } from '@mui/icons-material';
import { getIdCheck, getRegister } from '../API'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://hanav52.atlassian.net/jira/software/projects/KPL/boards/1/backlog" style={{cursor: 'pointer'}} underline="hover">
        KPL
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function RegisterTest() {
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    // id, password, confirmuserid, confirmpassword 확인하는 구간
    const [sex, setSex] = useState("");
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [confirmUserId, setConfirmUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [register, setRegister] = useState(false);
    // id, password, confirmuserid, confirmpassword error부분 확인
    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [sexError, setSexError] = useState(false);
    const [nameError, setNameError] = useState(false);
    // userid form에 change가 있을 때마다 validation check를 하고 결과를 useriderror state에 저장한다.
    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{4,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) {
            setUserIdError(false);
            setRegister(false);
        }
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onSex = (e) => {
        if (sex === e.target.value) setSexError(false);
        else setSexError(false);
        setSex(e.target.value);
    }
    const onChangeName = (e) => {
        const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
        if ((!e.target.value || (nameRegex.test(e.target.value)))) {
            setNameError(false);
        }
        else setNameError(true);
        setName(e.target.value);
    }
    const history = useHistory();
    const validation = () => {
        if(!name) setNameError(false);
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!confirmUserId) setConfirmUserId(true);
        if(!sex) setSexError(false);
        if(userId && password && confirmUserId && confirmPassword && sex && name) return true;
        else return false;
    }

 

    const data = { name: name, id: userId, pw: password, sex: sex };
    const data1 = { data: userId }

    const onSubmit = async (e) => {
        if(validation()) {
            try {
                const response = await getRegister(data, {headers: {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                  }});
                console.log(response);
                if(response.data.count === 1) {
                    setPopup({
                        open: true,
                        title: "가입 축하드립니다.",
                        mesaage: "가입 완료!",
                        callback: function(){
                            history.push("/login");
                        }
                    })
                }
            } catch (e) {
               console.error(e);
            }  
        }  return;
    };

    const onIdSubmit = async (e) => {
        try {
            const response = await getIdCheck(userId)
            .then(function (response) {
                alert(response.data);
                setRegister(true);
            })
            .then(function (error) {
                alert("아이디를 다시 입력하세요.")
                console.log(error)
            })
        } catch (e) {
           console.error(e);
        }
    }
    
    return (
        <BrowserRouter>
        <Route path="/register">
        <div className='register-main'>
            <div className='register-sub'>
            <Typography component="h1" variant="h5" style={{
                    margin: '50px 270px', 
                    fontFamily: 'CookieRun-Regular'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'warning.main' }} style={{marginLeft: '25px'}}>
                <DriveFileRenameOutlineRoundedIcon/>
          </Avatar>
            회원가입
          </Typography>
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="별명" value={name} onChange={onChangeName} style={{width: '627px'}}/>
                            {nameError && <div className="invalid-input">별명을 입력해주세요.</div>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} placeholder="아이디" value={userId} onChange={onChangeUserId}/>
                            {userIdError && <div className="invalid-input">아이디는 4글자 이상 영어와 숫자를 사용해야 합니다. 예시 : KPL5252</div>}
                        </Col>
                        <Button variant="warning" onClick={onIdSubmit} style={{width: '90px', height: '38px'}}>
                            중복확인
                        </Button>
                    </Form.Group>
                    <div className="password-main">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} style={{width: '308px'}}/>
                            {passwordError && <div className="invalid-input">비밀번호는 특수문자 포함 8글자 이상입니다.</div>}
                        </Col>
                    </Form.Group>
                    <div>&nbsp;&nbsp;</div>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control maxLength={20} type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onChangeConfirmPassword} style={{width: '310px'}}/>
                            {confirmPasswordError && <div className="invalid-input">비밀번호가 맞지 않습니다.</div>}
                        </Col>
                    </Form.Group>
                    </div>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                        {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check 
                            inline
                            label="남자"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={onSex}
                            value="남자"
                        />{sexError && <div className="invalid-input">성별을 골라주세요.</div>}
                        <Form.Check
                            inline
                            label="여자"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={onSex}
                            value="여자"
                        />{sexError && <div className="invalid-input">성별을 골라주세요.</div>}
                        </div>
                    ))}
                        </Col>
                    </Form.Group>
                    
                    <div className="d-grid gap-1">
                    <Button variant="warning" onClick={onSubmit} disabled={!register} style={{width: '626px'}}>
                            회원가입
                        </Button>
                    </div>
                </Form>
                <br />
                <span className="text">계정을 가지고 계십니까?<Link to="/login" className="link" underline="hover" onClick={()=> {history.push("/login"); history.go(0)}} style={{cursor: 'pointer'}}>&nbsp;로그인</Link></span>
            </Container>
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            </div>
        </Route>
        </BrowserRouter>
    );
}

export default RegisterTest