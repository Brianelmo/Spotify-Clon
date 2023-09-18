import FooterLinks from "../components/FooterLinks.tsx";

function Login() {
  const CLIENTE_ID: string = "5f710d05dd4a45bf8e20341ec76a9f87";
  const REDIRECT_URI: string = "http://localhost:5173/home";
  const AUTH_ENDPOINT: string = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE: string = "token";

  return (
    <div className="h-screen flex justify-center items-center bg-login">
      <div className="h-screen flex justify-between flex-col items-center py-5">
        <div>
          <h1 className={"text-white text-4xl font-semibold"}>Spotify Clone</h1>
        </div>
        <a
          className={
            "text-white py-7 px-20 bg-black rounded-3xl font-semibold text-xl"
          }
          href={`${AUTH_ENDPOINT}?client_id=${CLIENTE_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          //Boton del login de la api de spotify
        >
          Iniciar Sesion
        </a>
        <footer className={"flex gap-10 items-center justify-between"}>
          <p className={"text-white text-xl font-bold"}>
            Desarrollado por Brian Nicolas Elmo
          </p>
          <div className={"flex gap-10"}>
            <FooterLinks name={"Linkedin"} link={"#"} />
            <FooterLinks name={"Twitter"} link={"#"} />
            <FooterLinks name={"Github"} link={"#"} />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
