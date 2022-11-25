import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Curso from './cursos/Curso'
import { courses } from './cursos/cursos'
import Home from './home/Home'
import Profesores from './profesores/Profesores'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div id='main'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {courses?.map(
                            ({ url, title, file, asignaturas }, index) => (
                                <Route
                                    key={index}
                                    path={url}
                                    element={
                                        <Curso
                                            courses={courses}
                                            asignaturas={asignaturas}
                                            name={title}
                                            file={file}
                                        />
                                    }
                                />
                            )
                        )}

                        {courses.map(({ asignaturas }) =>
                            asignaturas?.map(({ url, title, file }, index) => (
                                <Route
                                    key={index}
                                    path={url}
                                    element={
                                        <Curso
                                            courses={courses}
                                            asignaturas={asignaturas}
                                            name={title}
                                            file={file}
                                        />
                                    }
                                />
                            ))
                        )}
                        <Route path='/profesores' element={<Profesores />} />
                        <Route path='*' element={<h1> 404 </h1>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Router
