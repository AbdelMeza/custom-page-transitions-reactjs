import { useEffect } from "react"
import transitionManagement from "../Zustand/transitionManagement"

export default function HomePage(){
  // Get the function used to end the page transition
    const { endTransition } = transitionManagement()
    
    useEffect(() =>{
        // End the transition when the page is mounted
        endTransition()
    }, [])

    return <div className="page-message">this is home page</div>
}