import { Route, Routes } from "react-router";
import Home from "./containers/home/Home";
import SignIn from "./containers/sign-in/SignIn";
import Profile from "./containers/profile/Profile";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
