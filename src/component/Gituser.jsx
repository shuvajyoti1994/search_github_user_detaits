import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Gituser = () => {
    const [user, setUser] = useState('')
    const [data, setData] = useState([])
    console.log(data.length)
    const handleClick = async () => {
        const {data} = await axios.get(`https://api.github.com/search/users?q=${user}+in:user`)
        // console.log(data)
        setData(data.items)
    }
    useEffect(() => {
        handleClick()
    }, [])


    return (
        <>
            <h2>GitHub User Details</h2>
        <div className='user'>
            <input type="text" placeholder='Enter GitHub Username ' value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleClick}>Get Details</button>
            </div>
            {data.map((elm)=>{
                return (
                    <div>
                        <div className="card p-2 mt-3 mb-3">
                            <div className='d-flex align-items-center'>
                               <a href={elm.html_url} target='_blank'><div className='image'><img src={elm.avatar_url} className='rounded' width="155" alt='_profPic' /></div></a> 
                                <div className='ml-3 w-100'>
                                    <h4 className='mb-0 mt-0 textLeft'>{elm.login}</h4><span className='textLeft'>Web Devloper</span>
                                    <div className='p-2 m-2 bg-danger d-flex justift-content-between rounded text-white stats'>
                                        <div className='d-flex flex-column'><span className='articles'>Name:</span><span className='number1'>{elm.name}</span></div>
                                        <div className='d-flex flex-column'><span className='followers mx-2'>Node ID:</span><span className='number2'>{elm.node_id}</span></div>
                                        <div className='d-flex flex-column'><span className='rating mx-2'>Public Gits:</span><span className='number3'>{elm.gists_url}</span></div>
                                        <div className='d-flex flex-column'><span className='rating mx-2'>Profile Create at:</span><span className='number3'>{elm.id}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </>
    )
}

export default Gituser