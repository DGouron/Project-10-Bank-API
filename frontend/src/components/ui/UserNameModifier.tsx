import { useDispatch } from "react-redux";
import { fetchModifyUserName } from "../../redux/slices/userSlice";

function UserNameModifier(setStateOfForm: any) {
  const dispatchEvent = useDispatch();

  const handleUserNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const firstName = e.currentTarget.firstname.value
    const lastName = e.currentTarget.lastname.value
    dispatchEvent(fetchModifyUserName({ firstName, lastName }) as any)
    setStateOfForm(false)
  }
  return (
    <div className="userNameModifier--container">
      <form onSubmit={(e) => handleUserNameSubmit(e)} className="userNameModifier--form">
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label><input type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label><input type="text" id="lastname" />
        </div>
        <button type="submit" className="sign-in-button">Sauvegarder</button>
      </form>
    </div>
  )
}

export default UserNameModifier