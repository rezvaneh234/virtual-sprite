import axios from "axios";

export const getTopCourses = async () => {

  const res = await axios.get(
    "https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=5"
  );
  return res.data;
};
