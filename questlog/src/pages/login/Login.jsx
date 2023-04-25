import { useRef } from "react";
import { useNavigate, Link} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION

    async function handleLogin(e){
        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try{
            const response = await fetch(url + '/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if(response.ok){
                navigate("/dashboard")
            }
        }catch(err){
            console.log(err);
        }
    }
    return ( 
        <main>
            <h1>Quest Log</h1>
            <div className="loginDiv">
                <input name="emailInput" type="email"  placeholder="email" ref={emailRef}/>

                <input type="password" name="passwordInput" placeholder="password" ref={passwordRef}/>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                <h2>To register click </h2>
                <Link to="/register" >here</Link>
            </div>
        </main>
     );
}
 
export default Login;