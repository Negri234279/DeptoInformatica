import { NavLink } from 'react-router-dom'
import CustomLink from './CustomLink'
import style from './Header.module.css'

const pages = [
    { title: 'Cursos', url: '/curso/4eso' },
    { title: 'Profesores', url: '/profesores' },
]

const Header = () => {
    return (
        <header>
            <div className={style.header}>
                <div className={style.logo}>
                    <NavLink to={'/'}>
                        <span>Depto</span>
                        <span>Informatica</span>
                    </NavLink>
                </div>

                <div className={style.links}>
                    {pages.map(({ url, title }, index) => (
                        <CustomLink key={index} url={url} title={title} />
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
