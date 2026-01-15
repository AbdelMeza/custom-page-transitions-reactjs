import './Navbar.css'
import transitionManagement from '../../Zustand/transitionManagement'

export default function Navbar(){
    const { startTransition } = transitionManagement()

    const navbarItems = [
        {
            title: "home",
            navigateTo: "/",
        },{
            title: "about",
            navigateTo: "/about",
        },{
            title: "work",
            navigateTo: "/work"
        },{
            title: "contact",
            navigateTo: "/contact"
        }
    ]

    return <div className="navigation-bar">
        {navbarItems && navbarItems.map((item, index) => (
            <div 
                className="item" 
                key={index}
                onClick={() => startTransition(`/${item.navigateTo}`)}
            >
                {item.title}
            </div>
        ))}
    </div>
}