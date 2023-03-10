import { useNavigate } from "react-router-dom"
import { useState } from "react"
const SignupCard = ()=>{
  
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  };
  const handleSubmit = async () => {
    // event.preventDefault();
  // console.log(name);
  if(!userName ) { alert('Fill the empty input fields');  return }; 
  const user = {
      userName,
      email,
      password
  }
  const response = await fetch("http://localhost:8080/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(user),
  })
  const result = await response.json()
  console.log(result)
  if(response.ok){
      navigate('/login')
  }else{
      navigate('/')
  }
};
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
                <input onChange={(e) => handleInputChange(e)} placeholder="Username" type="name" id="userName" class="form-control form-control-lg" />
              </div>
              <div class="form-outline form-white mb-3">
                <input onChange={(e) => handleInputChange(e)} placeholder="Email" type="email" id="email" class="form-control form-control-lg" />
              </div>
              <div class="form-outline form-white mb-3">
                <input onChange={(e) => handleInputChange(e)} placeholder="Password" type="password" id="password" class="form-control form-control-lg" />
              </div>
              <button onClick={() => handleSubmit()} class="btn btn-outline-light btn-lg px-5" type="submit">Sign UP</button>
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