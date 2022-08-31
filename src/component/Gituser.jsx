import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Gituser = () => {
    const [user, setUser] = useState('')
    const [data, setData] = useState('')
    console.log(data.length)
    const handleClick = async () => {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        // console.log(data)
        setData(response.data)
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
            {data ?
            <div>
                <div className="card p-2">
                    <div className='d-flex align-items-center'>
                        <div className='image'><img src={data.avatar_url} className='rounded' width="155" alt='_profPic' /></div>
                        <div className='ml-3 w-100'>
                            <h4 className='mb-0 mt-0 textLeft'>{data.login}</h4><span className='textLeft'>Web Devloper</span>
                            <div className='p-2 m-2 bg-danger d-flex justift-content-between rounded text-white stats'>
                                <div className='d-flex flex-column'><span className='articles'>Name:</span><span className='number1'>{data.name}</span></div>
                                <div className='d-flex flex-column'><span className='followers mx-2'>Public Repos:</span><span className='number2'>{data.public_repos}</span></div>
                                <div className='d-flex flex-column'><span className='rating mx-2'>Public Gits:</span><span className='number3'>{data.public_gists}</span></div>
                                <div className='d-flex flex-column'><span className='rating mx-2'>Profile Create at:</span><span className='number3'>{data.created_at}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null}
        </>
    )
}

export default Gituser