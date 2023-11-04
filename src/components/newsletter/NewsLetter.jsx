import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Recevoir les dernieres offres par mail</h1>
      <p>Souscrire a notre newsletter</p>
      <div>
        <input type='email' placeholder='Email' />
        <button>Envoyer</button>
      </div>
    </div>
  )
}

export default NewsLetter