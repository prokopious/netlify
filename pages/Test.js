import netlifyIdentity from 'netlify-identity-widget';

const login = () => netlifyIdentity.open('login');
const signup = () => netlifyIdentity.open('signup');
    
export default function Test() {  
    return (
        <div><h1>Sign Up for Premium Corgi Content</h1>

        <div class="user-info">
          <button onClick={login} id="left">Log In</button>
          <button onClick={signup} id="right">Sign Up</button>
        </div>
        <div class="corgi-content">
          <div class="content">
            <h2>Free Content</h2>
            <div class="free"></div>
          </div>
          <div class="content">
            <h2>Pro Content</h2>
            <div class="pro"></div>
          </div>
          <div class="content">
            <h2>Premium Content</h2>
            <div class="premium"></div>
          </div>
        </div>   
        </div>
    )
}