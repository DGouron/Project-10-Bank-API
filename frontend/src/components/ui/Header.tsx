import Brand from "./Brand";
import SignInLink from "./SignInLink";

function Header() {
  return (
    <nav className="main-nav">
      <Brand />
      <SignInLink />
    </nav>
  );
}

export default Header;
