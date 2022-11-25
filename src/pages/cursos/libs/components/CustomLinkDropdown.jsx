import { NavLink } from 'react-router-dom'
import style from './CustomLinkDropdown.module.css'

const CustomLinkDropdown = ({ url, title, subjects }) => {
    return (
        <div className={style.dropdown}>
            <button className={style.dropbtn}>
                <CustomLink url={url} title={title} />
                <i className='fa fa-caret-down'></i>
            </button>
            <div className={style.dropdownContent}>
                {subjects.map(({ url, title }, index) => (
                    <CustomLink key={index} url={url} title={title} />
                ))}
            </div>
        </div>
    )
}

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

export default CustomLinkDropdown
