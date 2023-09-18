import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const [myQuests, setMyQuests] = useState([])

    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION
    const navigate = useNavigate()

    useEffect(()=>{
        const loadMyQuests = async () =>{
            try{
                const response = await fetch(url+'/myQuests',{
                    credentials: "include"
                })
                if(response.ok) {
                    console.log(response)
                    const data = await response.json()
                    console.log(typeof(data))
                    console.log(data)

                    setMyQuests(data)
                }
            }catch(err){
                console.log(err)
            }
        }
        loadMyQuests()
    },[])


    async function logout() {
        const response = await fetch(url+'/logout',{
            credentials: "include"
        })
        if(response.ok) return navigate('/')
    }
    return ( 
    <>
        <h2>My Quests</h2>
        <section>
            {
             myQuests?.map((quest)=>{
                return(
                    <div key={quest._id}>
                        <h3>
                            {quest.title}
                        </h3>
                    </div>
                )
             })
            }
        </section>
        
        <button onClick={logout}>logout</button>
    </> 
    );
}
 
export default Dashboard;