import { deleteTokenLocaly } from "../../helpers/token";
import { useAppSelector } from "../../redux/hook"

function SignOutLink() {
  const { userProfile } = useAppSelector(state => state.user);
  const handleSignOut = () => {
    deleteTokenLocaly();
    window.location.href = "/";
  }
  return (
    <div className="signout--container">
      <a className="main-nav-item" href="/profile">
        <i className="fa fa-user-circle"></i>
        {userProfile?.firstName}
      </a>
      <div className="main-nav-item" onClick={() => handleSignOut()}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </div>
    </div>
  )
}

export default SignOutLink