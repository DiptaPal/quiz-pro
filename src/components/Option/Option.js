import React, { useId, useState } from 'react';

const Option = ({option, handleSelectBtn, correctAnswer}) => {
    const [isSelected, setSelected] = useState(false);
    const [isCorrect, setCorrect] = useState();
    const [disable, setDisable] = useState(false)

    const handleCorrect = option => {
        if(option === correctAnswer){
            setCorrect(true);
        }
        else{
            setCorrect(false);
        }  
    }
    
    return (
        <div>
            <div className='text-lg text-start'>
                <button 
                className= {`border border-indigo-500 py-2 px-3 rounded-md shadow-md mb-3 flex justify-center items-center cursor-pointer h-[100px] w-full ${isSelected ? `${isCorrect ? 'bg-green-500' : 'bg-red-600 text-white'} ` : 'bg-none'}`}
                
                onClick={()=>{handleSelectBtn(option);handleCorrect(option); setSelected(true); setDisable(true)}}
                disabled={disable}
                >
                    <p>{option}</p>
                </button> 
            </div>
        </div>
    );
};

export default Option;