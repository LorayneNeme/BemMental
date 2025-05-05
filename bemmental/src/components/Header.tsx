import "./Home.css";

export default function Header() {
  return (
    <div className="main-container">
      <div className="bem-mental" />
      <div className="header-auth">
        <div className="button">
          <span className="button-enter">Entrar</span>
        </div>
        <div className="button-1">
          <span className="button-register">Registrar</span>
        </div>
      </div>
      <div className="exclude" />
    </div>
  );
}
