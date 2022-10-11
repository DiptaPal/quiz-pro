import React, { useId, useState } from 'react';

const Option = ({option, handleSelectBtn,correctAnswer}) => {
    const [isSelected, setSelected] = useState(false);
    const [isCorrect, setCorrect] = useState();
    const handleCorrect = option => {
        if(option === correctAnswer){
            setCorrect(true);
        }
        else{
            setCorrect(false);
        }  
    }
    const id = useId();
    return (
        <div>
            <div className='text-lg text-start'>
                <label 
                htmlFor={id}
                className= {`border border-indigo-500 py-2 px-3 rounded-md shadow-md mb-3 flex justify-center items-center cursor-pointer h-[100px] ${isSelected ? `${isCorrect ? 'bg-green-500' : 'bg-red-600 text-white'}` : 'bg-none'}`}
                >
                    <input type="radio" id={id} onClick={()=>{handleSelectBtn(option);handleCorrect(option); setSelected(true)}}/>
                    <p className='pl-3'>{option}</p>
                </label> 
            </div>
        </div>
    );
};

export default Option;