import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
export const IncreaseContext = createContext([])
export const DecreaseContext = createContext([])
const Quizzes = () => {
    const quizzes = useLoaderData();
    const questions = quizzes.data.questions;
    const [increase, setIncrease] = useState(0)
    const [decrease, setDecrease] = useState(0)
    return (
        <IncreaseContext.Provider value={[increase, setIncrease]}>
            <DecreaseContext.Provider value={[decrease, setDecrease]}>
                <div className='mt-16 mb-32'>
                    <h1 className='text-4xl font-bold text-center mb-6'>Quiz of <span className='text-indigo-500'>{quizzes.data.name}</span></h1>

                    <h2 className='text-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto pb-10 sm:text-lg'>You have only one chance to select the answer from each question. <br />After selecting the answer you can see the answer by eye icon.</h2>
                    <div className='max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto text-center flex justify-between items-center mb-3 text-2xl px-4'>
                        <p>Correct: <span className='text-green-500 font-semibold'>{increase}</span></p>
                        <p>Wrong: <span className='text-red-500 font-semibold'>{decrease}</span></p>
                    </div>
                    {
                        questions.map((ques, index)=> <Quiz
                            key={ques.id}
                            ques={ques}
                            index = {index}
                        ></Quiz>)
                    }
                </div>
            </DecreaseContext.Provider>
        </IncreaseContext.Provider>
    );
};

export default Quizzes;