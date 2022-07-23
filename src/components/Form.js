import React from 'react';
import axios from 'axios';

const Form = ({setfiles, dir}) => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState();

  const send = event => {
    const data = new FormData();
    data.append("file", selectedFile);

    axios.post(`http://localhost:3002/upload${dir}`,{params: {dir: dir}}, data)
        .then(res => 
    console.log(res))
        .then( setfiles())
        .catch(err => 
    console.log(err));
  }


  return (
    <div>
        <label htmlFor='file'>upload file</label>
      <input type="file" id='file' onChange={event => 
        {
           const file = event.target.files[0];
           setSelectedFile(file) 
        }}/>
        <button onClick={send}>send</button>
        </div>
  )
};

export default Form;