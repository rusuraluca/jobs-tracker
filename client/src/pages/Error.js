import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"

function Error() {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Opsies... page not found!</h3>
        <p>We can't find the page your looking for.</p>
        <Link to='/'>Return</Link>
      </div>
    </Wrapper>
  )
}

export default Error