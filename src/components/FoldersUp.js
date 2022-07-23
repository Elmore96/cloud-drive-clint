import axios from "axios"
import { useState } from "react"

export default function  Folders({allFolders , dir}) {

    const [folderName, setFolderName] = useState('')

const send = ()=> { 
    const data = new FormData();
    data.append("folder", folderName)
    data.append('dir', dir );
    axios.post(`http://localhost:3002/creatfolder${dir}`, data)
        .then(res => {console.log(res); alert(res.data)})
        .then( allFolders())
        .catch(err => 
    console.error(err));
  }
    
    return(
        <div>
        <label htmlFor='folder'>creat folder</label>
      <input type="text" id='folder' onChange={event => 
        {
           const folder = event.target.value;
           setFolderName(folder) 
        }}/>
        <button onClick={send}>send</button>
        </div>
    )
}