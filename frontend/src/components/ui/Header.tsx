import { useAppSelector } from "../../redux/hook";
import Brand from "./Brand";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";

function Header() {
  const { isConnected } = useAppSelector(state => state.user);
  return (
    <nav className="main-nav">
      <Brand />
      {isConnected ? <SignOutLink /> : <SignInLink />}
    </nav>
  );
}

export default Header;
