import { useState } from "react";

const QuestCreator = () => {
    const [formDescription, setFormDescription] = useState("")
    const [formTitle, setFormTitle] = useState("")
    const [formRank, setFormRank] = useState(1)
    const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION

    
    async function handleSubmit (e) {
        e.preventDefault()
        console.log("testSubmit")
        const body = {
            questTitle: formTitle,
            questDescripion: formDescription,
            questRank: formRank
        }
        try{
            const response = await fetch(
                url + "/addQuest",
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(body)
                }
            )
            if(response.ok){
                //clearEverithying
                setFormDescription("")
                setFormRank(1)
                setFormTitle("")
            }
        }
        catch(err){
            console.log(err)
        }
    }
    function handleTitleChange(e) {
        setFormTitle(e.target.value)
    }
    function handleDescriptionChange(e) {
        setFormDescription(e.target.value)
    }
    function handleRankChange(e){
        setFormRank(e.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Quest Titel:</label>
            <input type="text" value={formTitle} onChange={handleTitleChange} />
            </div>
            <div>
            <label>Quest Beschreibung:</label>
            <textarea value={formDescription} onChange={handleDescriptionChange} />
            </div>
            <div>
                <label>Quest Rang:</label>
                <input type="number" value={formRank} 
                 onChange={handleRankChange}
                 min={1}
                 max={4}
                 />

            </div>
            <button type="submit">Absenden</button>
        </form>
        </>
    )
}
export default QuestCreator;