import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Option from '../Option/Option';
const Quiz = ({ques, index}) => {
    const {question, options, correctAnswer} = ques;
    const [isVisible, setVisible] = useState(false)

    const handleSelectBtn = option =>{
        if(option === correctAnswer){
            toast.info("Answer is Correct!!!")
            console.log(option);
        }
        else{
            toast.error("Answer is Wrong!!!")
        }
    }
    return (
        <div className='max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl border border-indigo-500 rounded shadow-md mx-auto py-8 px-5 text-center mb-12 text-2xl text-indigo-500 relative'>
            <div className='absolute top-0 right-2 cursor-pointer' onClick={() => setVisible(!isVisible)}>
                {
                    isVisible ?  <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                }
            </div>
            <div className='font-semibold mb-5'>
                <span>Quiz<span className='pl-2'>{index+1}</span>:</span>
                <span className='pl-2'>{question}</span>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                options.map((option, index_2) => <Option
                    key={index_2}
                    option={option}
                    handleSelectBtn={handleSelectBtn}
                ></Option>)
            }
            </div>
        </div>
    );
};

export default Quiz;