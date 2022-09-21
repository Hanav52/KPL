import axios from "axios";
// 서버 url
const apiUrl = "http://35.89.73.172:3000/";
// instance 생성
const instance = axios.create({
  baseURL: apiUrl,
});
// 회원가입하는 API
export const getRegister = async (data, header) => {
    const response = await instance.post('/auth/newuser', data, header)
    return response;
}
// 아이디 중복확인 API
export const getIdCheck = async (data, userId) => {
    const response = await instance.get(`/auth/newidcheck/${userId}`, {data})
    return response;
}