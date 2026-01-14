import { useCallback, useEffect, useRef } from "react"
import transitionManagement from "../../Zustand/transitionManagement"
import { useNavigate } from "react-router-dom"

export default function TransitionContainer(){

    const { targetPath } = transitionManagement()
    const tile = useRef(null)
    const navigate = useNavigate()

    const handleNavigate = useCallback(() =>{
        navigate(targetPath)
    }, [])

    useEffect(() =>{
        tile.current.addEventListener("animationend", handleNavigate)

        return tile.current.addEventListener("animationend", handleNavigate)
    }, [targetPath, handleNavigate])

    return <div className="loading-container">
        <div className="tile" ref={tile}></div>
        <span className="loading-message">Loading...</span>
    </div>
}