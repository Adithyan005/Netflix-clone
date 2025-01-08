import React, { useEffect, useState } from 'react'

const Hmpage = () => {
    const [home,setHome]=useState([])
    useEffect(()=>{
        async function homedata() {
            try {
                const response = await axios.get('http://localhost:4000/homemovie')
                setHome(response.data)
            } catch (error) {
                console.log('error fetching data')
            }
        }
        homedata();
    })

  return (
    <div>
      {home.map((data,index)=>{
        return(
            <div key={index}>
                <img src={data.bgimage} alt="" />
            </div>
        )
      }

      )}
    </div>
  )
}

export default Hmpage
