import { Route, Routes } from "react-router";
import Home from "./containers/home/Home";
import SignIn from "./containers/sign-in/SignIn";
import User from "./containers/user/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
