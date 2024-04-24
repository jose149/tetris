import reactLogo from '../../assets/react.svg'
import './bannerView.css'

export default function BannerView() {
  function handleClick() {
    alert('You clicked me!');
  }
  
  return(
  <div className='banner'>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    
    <h1>Tetris</h1>

    <button onClick={handleClick}> Start </button>
  </div>
  )
}
