import { NavLink } from "react-router-dom"

function SignInLink() {
  return (
    <div>
      <div>
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </div>
  )
}

export default SignInLink