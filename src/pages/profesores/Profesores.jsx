import style from './Profesores.module.css'

const Profesores = () => {
    return (
        <div className={style.wrapper}>
            <h1>Profesores</h1>

            <ul>
                <li>José Luis Ávila </li>
                <li>Jaime Botonero (Jefe dpto.)</li>
                <li>Antonio Jesús Calvo Morales (Jefe dpto. DACE)</li>
                <li>Rafael Cejudo</li>
                <li>Anabel Cívico</li>
                <li>Miriam Fimia</li>
                <li>Antonio Jiménez Crespo (Tutor 2º y 3ºDAMS)</li>
                <li>Francisco Javier Jiménez Crespo</li>
                <li>Pedro Jiménez Latorre (coordinador Erasmus+)</li>
                <li>Manuel Ignacio López Quintero (Tutor 1º DAMS)</li>
                <li>Herminio Ludeña Serna (Jefe dpto. adjunto)</li>
                <li>David Martín Perales (Tutor 1º DAWS)</li>
                <li>Javier Muñoz Carmona (Tutor 1º DAW)</li>
                <li>Salvador Pérez Jorge (Jefe de Estudios adjunto)</li>
                <li>Mª Luz Sánchez Rubio</li>
            </ul>
        </div>
    )
}

export default Profesores
