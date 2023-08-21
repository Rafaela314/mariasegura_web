import Hug from "././../images/hug.jpg";
const Home = () => {
    return(
        <>
        <div className="text-center">
            <h2>Bem-vinda ao Projeto Maria Segura. 
            Aqui você vai encontrar apoio e materiais que vão te ajudar a aprender como identificar, prevenir e combater 
            as mais diversas formas de violência contra mulheres.
            </h2>
            <hr /> 
            <img src={Hug} alt="women hug"></img>
        </div>
        </>
    )
}

export default Home;