import { Link } from 'react-router-dom';
import Hug from "././../images/hug.jpg";
const Home = () => {
    return(
        <>
        <div className="text-center">
            <h2>
            Esse é um espaço seguro. Aqui você encontra apoio e recursos que vão te ajudar 
            a aprender como identificar, prevenir e combater as mais diversas formas de violência contra mulheres.
            </h2>
            <hr /> 
            <Link to="/resources"> <img src={Hug} alt="women hug"></img>conheça nossos recursos </Link>
            
        </div>
        </>
    )
}

export default Home;