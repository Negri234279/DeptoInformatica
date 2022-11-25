import style from './Curso.module.css'
import CourseMenu from './libs/components/CourseMenu'

const Curso = ({ courses, name, file }) => {
    return (
        <>
            <div className={style.wrapperMenu}>
                <CourseMenu courses={courses} />
            </div>
            <div className={style.wrapper}>
                <h1>{name}</h1>
                {file && (
                    <iframe
                        src={file}
                        width='100%'
                        height='480'
                        allow='autoplay'
                        className={style.iframe}
                    ></iframe>
                )}
            </div>
        </>
    )
}

export default Curso
