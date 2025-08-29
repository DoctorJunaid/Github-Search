import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Userscard from '../Components/Userscard';




const Result = ({username}) => {
  
  const [data, setdata] = useState(null);
  
  useEffect(() => {
    if (!username) return;
  axios.get(`https://api.github.com/users/${username}`).then(res=>{
    setdata(res.data)


  }).catch(err=>{
    console.log(err)
  })
  },[username])
  return (
    <div className='text-white'>
      <div>
        {data ? (
          <Userscard name={data.name}
          cardusername = {data.login}
          Bio = {data.bio}
          location = {data.location}
          image = {data.avatar_url}
          Followers = {data.followers}
          Following = {data.following}
          join = {data.created_at}
          visit = {data.html_url}
          />
        ): (
        <h1 className='text-center pt-9'>No User Found</h1>
        )}
  

      </div>
    </div>
  )
}

export default Result