import home from "./home.json";
import about from "./about.json";
import works from "./works.json";
import studycases from "./studycases.json";
import error from "./error.json";

const en = {
  ...error,
  ...home,
  ...about,
  ...works,
  ...studycases,
};

export default en;
