import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState()
    const [error,setError] = useState()
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    },[url])
    return{loading,data,error}
}

export default useFetch