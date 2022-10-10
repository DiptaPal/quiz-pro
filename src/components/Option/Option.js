import React from 'react';

const Option = ({option}) => {
    return (
        <div>
            <div className='text-lg flex'>
                <div className='border border-indigo-500 py-2 px-3 rounded-md shadow-md mb-3 flex-1'>{option}</div>
            </div>
        </div>
    );
};

export default Option;