import { useAuth } from "./auth";
//http://daplus.net/javascript-%EA%B0%9D%EC%B2%B4-%EA%B0%92%EC%9D%B4-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%82%B4%EC%97%90-%EC%A1%B4%EC%9E%AC%ED%95%98/
export function Islikes(club) {
  const { likesArr } = useAuth();
  //console.log("좋아요 리스트", likesArr);
  console.log(likesArr.inclues(club));
  //return likesArr.inclues(club);
}
