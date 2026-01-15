import { useCallback, useEffect, useRef } from "react"
import transitionManagement from "../../Zustand/transitionManagement"
import { useNavigate } from "react-router-dom"
import './TransitionContainer.css'

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

    return <div className="transition-container">
        <div className="tile" ref={tile}></div>
        <div className="transition-content">
            <span className="loading-message">Loading...</span>
        </div>
    </div>
}