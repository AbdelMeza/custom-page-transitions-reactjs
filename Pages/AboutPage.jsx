import { useEffect } from "react"
import transitionManagement from "../Zustand/transitionManagement"

export default function AboutPage(){
  // Get the function used to end the page transition
    const { endTransition } = transitionManagement()
    
    useEffect(() =>{
        // End the transition when the page is mounted
        endTransition()
    }, [])

    return <div className="page-message">this is about page</div>
}