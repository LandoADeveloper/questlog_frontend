import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION
    const navigate = useNavigate()
    async function logout() {
        const response = await fetch(url+'/logout',{
            credentials: "include"
        })
        if(response.ok) return navigate('/')
    }
    return ( 
    <>
        <h2>Dashboard</h2>
        <button onClick={logout}>logout</button>
    </> 
    );
}
 
export default Dashboard;