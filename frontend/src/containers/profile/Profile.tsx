import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook"
import { useDispatch } from "react-redux";
import { fetchUserProfil } from "../../redux/slices/userSlice";
import UserNameModifier from "../../components/ui/UserNameModifier";

function Profile() {
  const dispatchEvent = useDispatch();
  const { isConnected, userProfile } = useAppSelector(state => state.user);

  const [displayUserNameModifier, setDisplayUserNameModifier] = useState(false);

  useEffect(() => {
    if (isConnected) {
      dispatchEvent(fetchUserProfil() as any);
    }
  }, [])

  if (isConnected) {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userProfile?.firstName} {userProfile?.lastName}!</h1>
          {displayUserNameModifier
            ?
            <UserNameModifier setStateOfForm={setDisplayUserNameModifier} />
            :
            <button className="edit-button" onClick={() => setDisplayUserNameModifier(true)}>Edit Name</button>
          }
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    )
  } else {
    return (
      <div>
        <h1>Vous n'êtes pas autorisé.</h1>
      </div>
    )
  }
}

export default Profile