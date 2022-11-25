import CustomLink from '../../../../components/CustomLink'
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

export default CustomLinkDropdown
