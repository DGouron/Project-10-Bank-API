import { useDispatch } from "react-redux"
import { useAppSelector } from "../../redux/hook";
import { fetchUserLogin } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function LoginForm() {

  const dispatchEvent = useDispatch();
  const navigate = useNavigate();
  const { isConnecting, isConnected } = useAppSelector(state => state.user);

  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
    }
  }, [isConnected])

  const handleLoginSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.email.value
    const password = event.currentTarget.password.value
    const rememberMe = event.currentTarget.rememberme.checked
    dispatchEvent(fetchUserLogin({ email, password, rememberMe }) as any)
  }
  return (
    <form onSubmit={handleLoginSubmition}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label><input type="text" id="email" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="rememberme" /><label htmlFor="rememberme">
          Remember Me
        </label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
      {isConnecting && <p>Connexion en cours...</p>}
    </form>
  )
}

export default LoginForm