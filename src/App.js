import React, { useState } from 'react';
import './App.css';


function App() {

  const [files, setFile] = useState([]);

  const handleSubmit = (e) => {
    const { name, size, type, lastModifiedDate } = document.getElementById("file").files['0'];
    setFile([...files, { name, size, type, lastModifiedDate }])
    // console.log('name', name);

  }



  return <div>
    <div>
      <input type="file" id="file"></input><br /><br />
      <button onClick={handleSubmit}>Upload</button>
    </div>
    <h1>Your File Will Upload Here</h1>

    {
      files.length > 0 && files.map((value) => {
        return (
          <ul>
            <p>file: {value.name}</p>
            <p>size: {value.size}</p>
            <p>type: {value.type}</p>
            {/* <p>lastModifiedDate:{value.lastModifiedDate}</p> */}

            
          </ul>)
      })
    }
  </div>;
}

export default App;

