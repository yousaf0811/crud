import { useNavigate } from "react-router-dom"
const Home = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>--Home--</h1>
            <button onClick={() => { navigate('/login') }} type="button" class="btn btn-primary btn-lg m-3">Login</button><br></br>
            <button onClick={() => { navigate('/signup') }} type="button" class="btn btn-primary btn-lg">Sign UP</button>
        </div>
    )
}
export default Home