import { routeName } from "../Constants/RouteName";
import HomeScreen from "../Screens/HomeScreen";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
const isLoggedIn = localStorage.getItem("isLoggedIn");
export const RoutingList = [
  {
    route: "*",
    element: <HomeScreen />,
    is_protected: false,
    // allowedRoles: [
    //   "super_admin",
    //   "workspace_admin",
    //   "advisor",
    //   "workspace_member",
    // ],
  },
  {
    route: routeName.home,
    element: <HomeScreen />,
    is_protected: false,
  },
  {
    route: routeName.signUp,
    element: <SignUp />,
    is_protected: false,
  },
  {
    route: routeName.signIn,
    element: <SignIn />,
    is_protected: false,
  },
];
