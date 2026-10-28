import { useNavigate } from 'react-router-dom'

function Admin (){
    const navigate = useNavigate()
    return(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white text-center">
            Admin
        </div>
    )
}

export default Admin