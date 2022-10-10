import React, { useState } from 'react';
import Option from '../Option/Option';
const Quiz = ({ques, index}) => {
    const {question, options, correctAnswer} = ques;
    return (
        <div className='max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl border border-indigo-500 rounded shadow-md mx-auto py-8 px-5 text-center mb-12 text-2xl text-indigo-500'>
            <div className='font-semibold mb-5'>
                <span>Quiz<span className='pl-2'>{index+1}</span>:</span>
                <span className='pl-2'>{question}</span>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    options.map(option => <Option
                        key={ques.id}
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;