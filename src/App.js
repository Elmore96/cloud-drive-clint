import './App.css';
import {useRef, useState} from 'react'
import axios, { Axios } from "axios"
import Form from './components/fileuploud';
import Folders from './components/Folders';

function App() {
  const [files, setfiles] = useState([])
  const [Folders, setFolders] = useState([])

  async function allFiles(){
    axios.get("http://localhost:3002/read")
    .then( res => setfiles(res.data))
    .then( console.log(files))
  }
  
  async function allFolders() {
    axios.get("http://localhost:3002/allfolders")
    .then( res => setFolders(res.data))
    .then( console.log(Folders))
  }
  allFolders()
  return (
    <div>
      <label>folders:</label>
    <div>
      {Folders.map(v => {if(v !==null){return <div>{v}</div> } }  )}
    </div>
    <label>files:</label>
    <div>
    {files.map(v => {if(v !== null){return <div>{v}</div>} })}
    </div>
    <Form setfiles={allFiles}/>
    </div>
  );
}

export default App;
