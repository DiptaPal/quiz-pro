import React, { useState } from 'react';

const Option = ({option, handleSelectBtn}) => {
    const [isSelected, setSelected] = useState(false);
    return (
        <div>
            <div className='text-lg text-start'>
                <label  onClick={()=>handleSelectBtn(option)} className='border border-indigo-500 py-2 px-3 rounded-md shadow-md mb-3 flex justify-center items-center cursor-pointer'>
                    <input type="radio" name="option"/><p className='pl-3'>{option}</p>
                </label> 
            </div>
        </div>
    );
};

export default Option;