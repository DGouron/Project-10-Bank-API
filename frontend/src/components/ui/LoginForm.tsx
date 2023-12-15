import { useDispatch } from "react-redux"
import { useAppSelector } from "../../redux/hook";
import { fetchUser } from "../../redux/slices/userSlice";

function LoginForm() {

  const dispatchEvent = useDispatch();
  const { isConnecting } = useAppSelector(state => state.user);

  const handleLoginSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
    const rememberMe = event.currentTarget.rememberme.checked
    console.log(username, password, rememberMe)
    dispatchEvent(fetchUser({ username, password, rememberMe }) as any)
  }
  return (
    <form onSubmit={handleLoginSubmition}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label><input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="rememberme" /><label htmlFor="rememberme">
          Remember Me
        </label>
      </div>
      <button type="submit" className="sign-in-button" disabled={isConnecting}>Sign In</button>
    </form>
  )
}

export default LoginForm