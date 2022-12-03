import { getRefreshToken } from './API';
import moment from 'moment';


export const GetRefreshToken = async (e) => {

    const data = {
          refreshToken: localStorage.getItem("RefreshToken")
      }
    const t2 = new Date();
    const t1 = Number(localStorage.getItem("AccessTokenExpiresIn"));
    const diff2 = moment.duration(t1-t2).asMilliseconds()  // 400000이하로 떨어지면
                
        try {
            if(diff2 < 400000) {
                console.log("곧 만료")
                const response = await getRefreshToken(data);
                console.log(response)
                localStorage.removeItem("AccessToken");
                localStorage.removeItem("AccessTokenExpiresIn");
                localStorage.removeItem("RefreshToken");
                localStorage.removeItem("RefreshTokenExpiresIn");
                localStorage.setItem("AccessToken", response.data.accessToken);
                localStorage.setItem("AccessTokenExpiresIn", response.data.accessTokenexpiresIn);
                localStorage.setItem("RefreshToken1", response.data.refreshToken);
                localStorage.setItem("RefreshTokenExpiresIn", response.data.refreshTokenexpiresIn);
                localStorage.setItem("openmodal", true);
              } else {
              // 글 작성하는 곳으로 이동
              console.log("아직 유효함")
              localStorage.setItem("openmodal", true);
              }
            } catch (e) {
                console.error(e);
             }
}