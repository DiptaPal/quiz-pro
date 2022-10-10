import React, { useState } from 'react';

const Quiz = ({ques}) => {
    const {question, options, correctAnswer} = ques;
    // const [count, setCount] = useState(0)
    // setCount(count+1);
    return (
        <div className='max-w-4xl border border-indigo-500 rounded shadow-sm mx-auto py-8 px-5 text-center mb-12 text-2xl text-indigo-500'>
            <div className='font-semibold'>
                <span>Quiz<span className='pl-2'></span>:</span>
                <span className='pl-2'>{question}</span>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Quiz;