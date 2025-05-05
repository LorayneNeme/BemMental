import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="main-container">
      <Header />

      <div className="rectangle" />
      <div className="title" />
      <span className="mind-reflection">
        Sua mente reflete o seu eu atual,
        <br />
        Cuide dela.
      </span>
      <span className="online-therapy">
        Cadastre-se gratuitamente e faça sua terapia sem sair de casa!
      </span>
      <span className="ideal-psychologist">Encontre o psicológo ideal!</span>
      <div className="untitled" />
      <span className="understanding-psychologist">
        Buscando um profissional que te entenda e deixe a conversa leve? Aqui
        você alinha o seu perfil ao do psicólogo!
      </span>

      <Footer />
    </div>
  );
}
