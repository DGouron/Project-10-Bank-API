import { useDispatch } from "react-redux";
import { fetchModifyUserName } from "../../redux/slices/userSlice";
import { useAppSelector } from "../../redux/hook";
import { useRef } from "react";

function UserNameModifier(setStateOfForm: any) {
  const dispatchEvent = useDispatch();
  const { isModifyProfile } = useAppSelector(state => state.user);
  const formRef = useRef<HTMLFormElement>(null);

  const handleUserNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const firstName = e.currentTarget.firstname.value
    const lastName = e.currentTarget.lastname.value
    dispatchEvent(fetchModifyUserName({ firstName, lastName }) as any)
    formRef.current?.reset();
    setStateOfForm(false);
  }
  return (
    <div className="userNameModifier--container">
      <form onSubmit={(e) => handleUserNameSubmit(e)} className="userNameModifier--form" ref={formRef}>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label><input type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label><input type="text" id="lastname" />
        </div>
        <button type="submit" className="sign-in-button">Sauvegarder</button>
        {isModifyProfile && <p className="error-message">Modification en cours...</p>}
      </form>
    </div>
  )
}

export default UserNameModifier