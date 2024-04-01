import reactLogo from '../../assets/react.svg'

export default function BannerView() {
  return(
  <>
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Tetris</h1>

    <button> Start </button>
  </>
  )
}
