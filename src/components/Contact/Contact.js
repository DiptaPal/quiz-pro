import Lottie from 'lottie-react'
import React from 'react';
import { Link } from 'react-router-dom';
import contact from '../../assets/contact.json'

const Contact = () => {
    return (
        <div>
             <div className="grid grid-cols-1 gap-8 py-16 mx-auto rounded-lg lg:grid-cols-2 px-10 sm:px-40 justify-around">
                <div className="flex flex-col justify-between items-center text-center text-indigo-500">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-2">
                        <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Dhaka, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>contact@business.com</span>
                        </p>
                    </div>
                    <div className='max-w-md max-h-md mx-auto'>
                        <Lottie animationData={contact} loop={true} />
                    </div>
                </div>
                <form className="space-y-6 ng-untouched ng-pristine ng-valid bg-indigo-500 px-12 py-12 rounded-md text-white my-auto flex flex-col gap-2">
                    <div>
                        <label htmlFor="name" className="text-2xl">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded text-indigo-500 text-xl outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-2xl">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded text-indigo-500 text-xl outline-none"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-2xl">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded text-indigo-500 text-xl outline-none" spellCheck="false"></textarea>
                    </div>
                    <Link className="w-full p-3 text-sm text-center font-bold tracking-wide uppercase rounded bg-white text-indigo-500 hover:bg-blue-700 hover:text-white">Send Message</Link>
                </form>
            </div>
        </div>
    );
};

export default Contact;