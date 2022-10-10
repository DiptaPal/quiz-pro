import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';


export const QuizContext = createContext([]);

const Main = () => {
    const courses = useLoaderData();
    return (
        <QuizContext.Provider value={courses.data}>
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </QuizContext.Provider>
    );
};

export default Main;