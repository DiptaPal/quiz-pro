import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, name, logo, total} = course;
    return (
        <div>
            <div className=" rounded-md shadow-md hover:border-2 hover:border-indigo-500 border-2 border-white transition-colors duration-700">
                <img src={logo} alt="" className="w-full rounded-t-md h-full bg-indigo-500" />
                <div className="flex flex-col justify-between p-6 space-y-3">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    </div>
                    <p className='text-xl'>Total Quizzes: {total}</p>
                    <Link to={`/quiz/${id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-500 hover:bg-blue-700 text-white transition-property: color duration-700">
                            <span className='pr-2'>Start Quiz</span>
                            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;