import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blockbuster = () => {

const [block,setBlock]=useState([]);

useEffect(()=>{
    async function fetchmovie() {
        try {
            const response=await axios.get("https://netflix-clone-backend-vas2.onrender.com/api/buster/bbmovies")
            setBlock(response.data.blkbstrmovies);
            console.log(response.data.blkbstrmovies);
        } catch (error) {
            console.log(error)
        }
    }
    fetchmovie();
},[])

  return (
    <div className='text-white'>
        <div>
            {block.map((data,index)=>(
                    <div key={index}>
                        <div>
                            <img src={data.image} alt="" />
                        </div>
                        <h1>{data.name}</h1>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Blockbuster
