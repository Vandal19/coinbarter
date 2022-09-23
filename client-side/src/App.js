import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [home, setHome] =useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/home")
    .then(res => {setHome(res.data)})
  },[])

  async function postName(e) {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8000/post_name", {
        name
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <form onSubmit={postName}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Send Name</button>
      </form>
      {home}
    </div>
  );
}

export default App;
