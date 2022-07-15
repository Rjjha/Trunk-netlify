import React from 'react'

const navbar = () => {
    return (
        (
            <>
                <header className='h-20 sm:min-h-20  text-slate-100 w-auto '>
                    <nav className='h-20 sm:min-h-20 flex flex-row md:justify-between items-center'>
                        <div className='ml-20 text-3xl text-white font-semibold  flex items-center'>
                            <h1>trunk</h1>
                        </div>
                        <div className=''>
                            <ul className='flex flex-row  font-semibold text-lg '>
                                <li className='ml-10'><a href='#' className='no-underline hover:underline'>Product</a></li>
                                <li className='ml-10'><a href='#' className='no-underline hover:underline'>Pricing</a></li>
                                <li className='ml-10'><a href='#' className='no-underline hover:underline'>Company</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-row items-center  '>
                            <div className='mx-5'>
                                <h4><a href='#' className='no-underline hover:underline text-lg'>Log in</a></h4>
                            </div>
                            <div>
                                <button className='border-0 rounded-full px-4 py-1 bg-green-300 text-lg mr-3 text-black'>Get Started</button>
                            </div>
                        </div>
                    </nav>

                </header>
                <div className='w-full h-px bg-gray-700'></div>
            </>
        )
    )
}

export default navbar