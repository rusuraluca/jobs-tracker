import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page" >
            <div className="info">
                <h1> <span>Jobs Application</span> Tracker</h1>
                <p>
                    Cu cati barbati te-ai culcat? sarpele Funar ai noroc ca nu esti langa mine ca ti-as carpi doua palme clanul Camparu, clanul Camataru 
                    scoateti mizeria aia de pe ecran el era maimuta dresata acolo parca te ocupai de supozitoare si de lotiuni de par ma spurca pe mine 
                    si copii mei ce dialog sa am cu un gunoi Da cine esti tu fetito scoateti mizeria aia de pe ecran Curva dracului! l-am dat afara de 
                    golan ce e, deschide-l somaldoaca escroaca Curva dracului! pleaca din emisiune daca nu vrei sa afle poporul roman nu ti-e rusine 
                    se drogheaza cu cocaina vene ingrosate la gat momaia asta impaiata iti mut dintii pe gat vii cu gorilele. Maimuta dracului
                </p>
                <button className="btn btn-hero">
                    Login/Register
                </button>
            </div>
            <div className="image">
                <img src={main} alt="job hunt" className="img main-img"></img>
            </div>
        </div>
    </Wrapper>
    )
}


export default Landing
