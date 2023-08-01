import { useState } from "react";

const RegisterForm = ({onRouteChange, loadUser}) =>{

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ name, setName ] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onRegistrationSubmit = () => {
    fetch('https://face-detect-api-2gko.onrender.com/register', {
      method: "post",
      headers:{'Content-Type' : 'application/json'},
      body:JSON.stringify({
        email:email,
        password:password,
        name:name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        loadUser(user);
        onRouteChange('home');
      }
    })
  }

  return(
    <div className="mw6 br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 center">
      <div className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name"
                required
                onChange={onNameChange} />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                placeholder="johndow@gmail.com"
                required
                onChange={onEmailChange}
                />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                required
                onChange={onPasswordChange} />
            </div>
          </fieldset>
          <div className="">
            <input onClick={onRegistrationSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="button" value="Register"/>
          </div>
        </form>
      </div>
    </div>
  
  )
}


export default RegisterForm;