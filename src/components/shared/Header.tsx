import { NavLink } from "react-router-dom"



export const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                        <NavLink to={'/'} >main</NavLink>
                        <NavLink to={'contact'} >contact</NavLink>
                        <NavLink to={'register'} >register</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}