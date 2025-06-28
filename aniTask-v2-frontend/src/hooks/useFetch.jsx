import {useState,useEffect,useCallback} from "react"

import React from 'react'

export const useFetch = ({url,fetchOps}) => {

    const [result,setResult] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading]= useState(false)


    const fetchOperation=  useCallback( async ()=>
    {
        try 
        {
            setLoading(true)
            const response = await fetch(url,fetchOps)
            if(response.ok)
            {
                setLoading(false)
                const jsonResponse =await response.json()
                setResult(jsonResponse)
            }
            else
            {
                setLoading(false)
                throw new Error
            }
        } 
        catch (error) 
        {
            setError(error.message)
        }

    })


    useEffect(()=>
    {
        fetchOperation()
    },[url,fetchOps])


    return {setResult,result,setError,error,loading,setLoading}
}

