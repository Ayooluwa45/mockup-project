import spinner from './assets/spinner.gif'

function Spinner() {
  return (
  <div className='loading'>
        <img src={spinner} alt="Loading.."  className='img'/>
    </div>
  )
  }

export default Spinner;