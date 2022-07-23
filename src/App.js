import './App.css';
import {useEffect, useState} from 'react'
import axios from "axios"
import Form from './components/Form';
import FoldersUp from './components/FoldersUp';

function App() {
  const [files, setfiles] = useState([])
  const [Folders, setFolders] = useState([])
  const [dir , setdir] = useState('')
  const [back, setback] = useState([])

  async function allFiles(){
    await axios.get(`http://localhost:3002/read${dir}`,{params: {dir: dir}})
    .then( res => setfiles(res.data))
    .then( console.log(files))
  }
  
  async function allFolders() {

    await axios.get(`http://localhost:3002/allfolders${dir}`,{params: {dir: dir}})
    .then( res => setFolders(res.data))
    .then( console.log(Folders))
  }

  async function enterfolder() {
    let arr = back;
    arr.push(dir)
    setback(arr);
    console.log(back);
    allFolders();
    allFiles();
  }
  useEffect(()=> {
    allFiles();
    allFolders();
    }, [])
    
  return (
    <div className='page-continer'>
    <div><h2><u>{dir}</u></h2></div>
    <div className='folders-row'>
    <label>folders:</label>
    <div className='content-box'> 
      {Folders.map(v => {if(v !==null){
        return (<div className='folder-continer'
        onDoubleClickCapture={()=> setdir(`${dir}/${v}`)} 
        onDoubleClick={()=>{enterfolder()}} >
                <div className='folder-icon'></div>
                <div value={v} className='folder-name'>{v}</div>
              </div>) } }  )}
    </div>
    <FoldersUp allFolders ={allFolders} dir = {dir}/>
    </div>
    <div className='files-row'>
    <label>files:</label>
    <div className='content-box'>
    {files.map(v => {if(v !== null){
      let name = v.slice((v.indexOf('-') +1))
      return (
      <div className='file-continer'>
    <div className='file-icon'></div>
    <div className='file'>{name}</div>
    </div>
    )} })}
    </div>
    <Form setfiles={allFiles} dir ={dir}/>
    </div>
    </div>
  );
}

export default App;
