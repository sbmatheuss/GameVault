import { Link } from "react-router"
import "../styles/Account.css"
export function Account() {
  return(
    <div className="account-container-area">
       <section className="area-profile-hero">
        <div className="hero-profile-area">
          <div><img src="" alt="user" /></div>
          <div className="info-user-name-suname">
            <div>Marteus silva</div>
            <div>Gabi_gol</div>
          </div>
        </div>
       </section>
       <section className="area-profile-controllers">
        <nav>
          <button >Editar Profile</button>
          <button >Dados da conta</button>
          <button >Suporte</button>
        </nav>
       </section>
    </div>
  )
}
