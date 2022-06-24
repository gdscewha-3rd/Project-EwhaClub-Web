import { getAllClub } from "apis/all.api";
import { getCategoryClub } from "apis/category.api";
async function getClubs(category) {
  console.log("getClubs", category);
  const { data } =
    category === "clubs" ? await getAllClub() : await getCategoryClub(category);

  console.log("getClubs", data);
  return data;
}

export default getClubs;
