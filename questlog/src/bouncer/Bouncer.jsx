import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Bouncer = () => {

    const [verified, setVerified] = useState(false)
    const navigate = useNavigate()

    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION

    useEffect(() => {
        const verify = async () => {
            const response = await fetch(url+"/verify",{
                credentials: 'include',
            })
            setVerified(true)
            if(!response.ok) {
                navigate('/')
            } 
        }
        verify()
    },[])


    if(!verified) return (<h2>loading</h2>)
    else {
        return ( <Outlet/>)
    }
}
 
export default Bouncer;