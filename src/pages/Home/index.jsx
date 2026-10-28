import { useNavigate } from 'react-router-dom'

function Home (){
    const navigate = useNavigate()
    return(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white text-center">
            <img
                src="/img/LOGOV2.png"
                alt="/inmobiliaria Manuela Logo"
                className="img-fluid mx-auto d-block mb-4"
                style={{ maxHeight: '150px'}}
            />
            <h1 className="display-3 font-weight-bold mb-4">
                Bienvenido a Inmobiliaria Manuela Bermúdez Reaktor
            </h1>
        </div>
    )
}

export default Home