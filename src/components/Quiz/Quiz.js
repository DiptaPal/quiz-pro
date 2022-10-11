import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import Option from '../Option/Option';
import { DecreaseContext, IncreaseContext } from '../Quizzes/Quizzes';
const Quiz = ({ques, index}) => {
    const {question, options, correctAnswer} = ques;
    const [isVisible, setVisible] = useState(false)

    const [increase, setIncrease] = useContext(IncreaseContext);
    const [decrease, setDecrease] = useContext(DecreaseContext);
    const handleSelectBtn = option =>{
        if(option === correctAnswer){
            toast.info("Answer is Correct!!!")
            setIncrease(increase + 1)

        }
        else{
            toast.error("Answer is Wrong!!!")
            setDecrease(decrease + 1)
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
                <span className='pl-2'>{question.slice(3,-4)}</span>
            </div>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
            {
                options.map((option, index_2) => <Option
                    key={index_2}
                    option={option}
                    handleSelectBtn={handleSelectBtn}
                    correctAnswer={correctAnswer}
                ></Option>)
            }
            </div>
           {
            isVisible &&  
            <div className='mt-3'>
                <p className='py-2 bg-green-500 rounded-md text-indigo-700'><span className='pr-3 text-black'>Answer is:</span> <span className='font-bold'>{correctAnswer}</span></p>
            </div>
           }
        </div>
    );
};

export default Quiz;