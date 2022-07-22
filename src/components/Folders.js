import axios from "axios"
import { useState } from "react"

export default function  Folders() {

    const [allFolders, setallFolders] = useState([])

    axios.get("http://localhost:3002/read")
    
    return(
    <div>

    </div> 
    )
}