import { NavLink } from "react-router-dom"

function Brand() {
  return (
    <NavLink className="main-nav-logo" to="/home">
      <img src={'/argentBankLogo.png'} alt="Logo Argent Bank" className="main-nav-logo-image" />
    </NavLink>
  )
}
export default Brand