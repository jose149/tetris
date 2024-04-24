import './tetrisStyles.scss'
import TetrisBox from '../../components/tetrisBox/tetrisBox'

export default function TetrisView(){
  return(
    <>
      <div className='tetris'>
        <TetrisBox(pieces)/>
      </div>
    </>
  )
}