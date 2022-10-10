import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Quizzes = () => {
    const quizzes = useLoaderData();
    const questions = quizzes.data.questions;
    return (
        <div className='mt-16 mb-32'>
            <h1 className='text-4xl font-bold text-center mb-10'>Quiz of <span className='text-indigo-500'>{quizzes.data.name}</span></h1>
            {
                questions.map((ques, index)=> <Quiz
                    key={ques.id}
                    ques={ques}
                    index = {index}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizzes;