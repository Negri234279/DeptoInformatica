import CustomLink from '../../../../components/CustomLink'
import style from './CourseMenu.module.css'
import CustomLinkDropdown from './CustomLinkDropdown'

const CourseMenu = ({ courses }) => {
    return (
        <div className={style.wrapper}>
            {courses.map(({ url, title, asignaturas }, index) =>
                !asignaturas ? (
                    <CustomLink key={index} url={url} title={title} />
                ) : (
                    <CustomLinkDropdown
                        key={index}
                        url={url}
                        title={title}
                        subjects={asignaturas}
                    />
                )
            )}
        </div>
    )
}

export default CourseMenu
