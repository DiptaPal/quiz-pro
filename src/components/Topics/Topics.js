import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import Course from '../Course/Course';

const Topics = () => {
    const courses = useContext(QuizContext)
    return (
        <div>
            <div className='px-10 sm:px-24 mb-32'>
                <h1 className='text-3xl font-bold mb-16 text-center text-indigo-500 border-b-4 w-40 pb-2 border-indigo-500  mx-auto'>All Quizzes</h1>
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

export default Topics;