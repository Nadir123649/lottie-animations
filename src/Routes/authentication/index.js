

import Home from "../../pages/Home";
import TermConditions from "../../pages/Home/TermConditions";
import {
    home,
    termsandconditions, 
} from "../pathName";

const authRoutes = [
  {
    title: "Home",
    component: Home ,
    path: home,
  },
  {
    title: "TermConditions",
    component: TermConditions,
    path: termsandconditions,
  },

];

export default authRoutes;
