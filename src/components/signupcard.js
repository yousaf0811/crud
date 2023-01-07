import { useNavigate } from "react-router-dom"
const SignupCard = ()=>{
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
              <h2 class="fw-bold mb-2 text-uppercase">Sign UP</h2>
              <p class="text-white-50 mb-5">Please Enter your Information</p>
              <div class="form-outline form-white mb-3">
                <input placeholder="Username" type="name" id="typeEmailX" class="form-control form-control-lg" />
              </div>
              <div class="form-outline form-white mb-3">
                <input placeholder="Email" type="email" id="typeEmailX" class="form-control form-control-lg" />
              </div>
              <div class="form-outline form-white mb-3">
                <input placeholder="Password" type="password" id="typePasswordX" class="form-control form-control-lg" />
              </div>
              {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
              <button class="btn btn-outline-light btn-lg px-5" type="submit">Sign UP</button>
              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>
            </div>
            <div>
              <p class="mb-0">Already Have Account <a href="#!" onClick={() => { navigate('/login') }} class="text-white-50 fw-bold">Log In</a>
              </p>
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
export default SignupCard