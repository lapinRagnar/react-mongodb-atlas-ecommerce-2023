import '../pages/css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Enregistrement</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="nom"/>
          <input type="email" placeholder="email"  />
          <input type="password" placeholder="mot de passe" />
          <button>Continuer</button>
          <p className="loginsignup-login">Vous avez deja un compte ? <span>se connecter</span> </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>En continuant, j accepte les <span>conditions d utilisation</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup