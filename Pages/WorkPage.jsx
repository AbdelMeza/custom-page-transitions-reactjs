import { useEffect } from "react"
import transitionManagement from "../Zustand/transitionManagement"

export default function WorkPage(){
  // Get the function used to end the page transition
    const { endTransition } = transitionManagement()

    useEffect(() =>{
        // End the transition when the page is mounted
        endTransition()
    }, [])

    return <div className="page-message">this is work page</div>
}