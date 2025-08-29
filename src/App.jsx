import React, { useState } from 'react'
import Home from './Home'
import Result from './Result'
import Navbar from '../Components/Navbar'

const App = () => {
  const [searchvalue, setSearchvalue] = useState('')
  const [username , setUsername] = useState('')
  return (
    <div className='w-screen h-screen'>
      <Navbar />
        <Home value ={searchvalue} 
        onChange={setSearchvalue}
        onSubmit={()=>{
            setUsername(searchvalue)
        }}  />
        <Result username={username} />
    </div>
  )
}

export default App