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
export const getIdCheck = async (userId) => {
    const response = await instance.get(`/auth/newidcheck/${userId}`, userId)
    return response;
}
// 대분류 카테고리 API
export const getMainCategory = async () => {
  const response = await instance.get(`/category`)
  return response;
}
// 최신 게시글 API
export const getRecent = async () => {
  const response = await instance.get(`/recent`)
  return response.data;
}
// 카테고리별 페이지 API
export const getEachCategory = async (categoryid) => {
  const response = await instance.get(`/categoryrecent/0`)
  return response;
} 