

const SignIn = ({onRouteChange}) => {
  return(
    <div className="mw6 br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 center">
      <div className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <p  className="f5 link dim black db" onClick={() => onRouteChange('register')}>Register</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn