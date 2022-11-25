import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const pages = [
    { title: 'Cursos', url: '/curso/4eso' },
    { title: 'Profesores', url: '/profesores' },
]

const Header = () => {
    return (
        <header>
            <div id={style.header}>
                <div className={style.logo}>
                    <NavLink to={'/'}>
                        <span>Depto</span>
                        <span>Informatica</span>
                    </NavLink>
                </div>

                <div className={style.links}>
                    {pages.map(({ url, title }, index) => (
                        <NavLink
                            key={index}
                            to={url}
                            className={({ isActive }) =>
                                isActive ? style.active : ''
                            }
                        >
                            {title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
