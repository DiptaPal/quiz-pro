import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import Course from '../Course/Course';
import Header from '../Header/Header';

const Home = () => {
    const courses = useContext(QuizContext)
    return (
        <div>
           <div>
                <Header></Header>
           </div>

            <div className='px-24 mb-32 mt-10 md:mt-44 lg:mt-10'>
                <h1 className='text-5xl underline underline-offset-1 font-bold pb-16 text-center text-indigo-500'>All Quizzes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        courses.map(course => <Course 
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;