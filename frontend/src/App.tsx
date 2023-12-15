import { Route, Routes } from "react-router";
import Home from "./containers/home/Home";
import SignIn from "./containers/sign-in/SignIn";
import User from "./containers/user/User";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Provider>
  );
}

export default App;
