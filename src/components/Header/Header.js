import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../assets/checklist.json'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            {/* Header section start */}
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen lg:px-24 md:px-24 lg:py-24'>
                <div className='flex flex-col items-center justify-between lg:flex-row'>
                    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                        Train your brain<br className='hidden md:block' /> and{' '}
                        <span className='inline-block text-indigo-500'>improve your IQ</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                        QuizPro is an application to make and conduct quizzes and exams among students. It allows you to easily create and share quizzes, attempt quizzes and view live results as well. QuizPro can be used by teachers, trainers, event organizers, businesses and others to conduct professional examinations online.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link
                        to='/home'
                        className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white duration-700 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none transition-property: color'
                        >
                        <span className='mr-3'>Get Start</span>
                        <FontAwesomeIcon icon={faComputerMouse}></FontAwesomeIcon>
                        </Link>
                        <Link
                        to='/contact'
                        aria-label=''
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                        >
                        Learn More
                        </Link>
                    </div>
                    </div>
                    <div className='relative lg:w-1/2 '>
                    <div className='w-full h-full flex justify-center'>
                        <Lottie animationData={reader} loop={true} />
                    </div>
                    </div>
                </div>
            </div>
            {/* Header section end */}
        </div>
    );
};

export default Header;