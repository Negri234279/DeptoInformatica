import { NavLink } from 'react-router-dom'
import style from './CustomLink.module.css'

const CustomLink = ({ url, title }) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) => (isActive ? style.active : '')}
        >
            {title}
        </NavLink>
    )
}

export default CustomLink
