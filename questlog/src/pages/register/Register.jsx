import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION

    async function handleRegister(e){
        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value
        }
        try{
            const response = await fetch(url + '/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if(response.ok){
                navigate("/")
            }
        }catch(err){
            console.log(err);
        }
    }
    return ( 
        <main>
            <h1>Quest Log Register</h1>
            <div className="registerDiv">
            <input name="nameInput" type="text"  placeholder="name" ref={nameRef}/>

                <input name="emailInput" type="email"  placeholder="email" ref={emailRef}/>

                <input type="password" name="passwordInput" placeholder="password" ref={passwordRef}/>
                <button onClick={handleRegister}>register</button>
            </div>
            <div>
                <h2>To login click </h2>
                <Link to="/" >here</Link>
            </div>
        </main>
     );
}
 
export default Register;