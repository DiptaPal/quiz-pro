import React from 'react';

const Blog = () => {
    return (
        <div className="space-y-4 px-10 md:px-0 max-w-screen-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-16 mb-20">
            <h1 className='text-3xl font-bold text-center border-b-4 border-indigo-500 pb-2 text-indigo-500 mb-10'>Frequently Asked Questions</h1>
            <details className="group border-l-4 border-green-500 bg-gray-50 p-6" open>
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                    What is the purpose of react-router?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-indigo-500 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-900 md:text-xl">
                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /><br />

                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
            </details>

            <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                    How does context api works?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-indigo-500 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-900 md:text-xl">
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /><br />
                React.createContext() returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
                </p>
            </details>

            <details className="group border-l-4 border-green-500 bg-gray-50 p-6">
                <summary className="flex cursor-pointer items-center justify-between">
                <h5 className="text-lg md:text-2xl font-medium text-gray-900">
                    What is useRef( )?
                </h5>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-indigo-500 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-900 md:text-xl">
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. <br /><br />
                <span className='leading-relaxed'>
                The useRef returns a mutable ref object. This object has a property called <span className='bg-gray-500 text-white px-2 rounded-sm'>.current</span>. The value is persisted in the <span className='bg-gray-500 text-white px-2 rounded-sm'>refContainer.current</span> property. These values are accessed from the current property of the returned object. The <span className='bg-gray-500 text-white px-2 rounded-sm'>.current</span> property could be initialized to the passed argument <span className='bg-gray-500 text-white px-2 rounded-sm'>initialValue</span> <span className='text-black'>e.g.</span> <span className='bg-gray-500 text-white px-2 rounded-sm'>useRef(initialValue)</span>. The object can persist a value for a full lifetime of the component.    
                </span> 
                </p>
            </details>
        </div>

    );
};

export default Blog;