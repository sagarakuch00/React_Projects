import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/sagarakuch00')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-3xl p-4 m-4 text-white text-center'>Github followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/sagarakuch00')
    return res.json()
}