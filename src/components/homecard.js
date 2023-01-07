import { useNavigate } from "react-router-dom"
const HomeCrad = ()=>{
  const navigate = useNavigate();
    return(
        <div>
            <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Home Page</h2>
              <button onClick={() => { navigate('/login') }} class="btn btn-outline-light btn-lg px-5 m-3" type="submit">Login</button><br></br>
              <button onClick={() => { navigate('/signup') }} class="btn btn-outline-light btn-lg px-5" type="submit">Sing Up</button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default HomeCrad