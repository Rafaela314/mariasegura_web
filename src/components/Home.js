import Hug from "././../images/hug.jpg";
const Home = () => {
    return(
        <>
        <div className="text-center">
            <h2>
            Sinta-se em casa. Esse é um espaço seguro. Todo seu. Onde você vai encontrar apoio e materiais que vão te ajudar 
            a aprender como identificar, prevenir e combater as mais diversas formas de violência contra mulheres.
            </h2>
            <hr /> 
            <img src={Hug} alt="women hug"></img>
        </div>
        </>
    )
}

export default Home;