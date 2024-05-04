import { useState,useEffect } from 'react'
 const useStorage=(inp)=> {

    const[value,setValue]=useState(inp)

    useEffect(()=>{
        localStorage.setItem("InputValue",value)
        sessionStorage.setItem("InputValue",value)
    },[value])

    return [value,setValue]
}

export default useStorage