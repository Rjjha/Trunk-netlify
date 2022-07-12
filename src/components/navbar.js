import React from 'react'

const navbar = () => {
  return (
    (
        <>
           <header className='h-20 bg-gray-800 text-slate-100 flex items-center w-full'>
            <nav className='flex flex-row items-center'>
                <div className='ml-20 text-3xl text-white font-semibold'>
                    <h1>trunk</h1>
                </div>
                <ul className='flex flex-row ml-96 mr-80 font-semibold text-lg'>
                    <li ><a href='#' className='no-underline hover:underline'>Product</a></li>
                    <li className='ml-10'><a href='#' className='no-underline hover:underline'>Pricing</a></li>
                    <li className='ml-10'><a href='#' className='no-underline hover:underline'>Company</a></li>
                </ul>
                <div className='flex flex-row items-center '>
                    <div className='mx-5'>
                        <h4><a href='#' className='no-underline hover:underline text-lg'>Log in</a></h4>
                    </div>
                    <div>
                        <button className='border-0 rounded-full px-4 py-1 bg-green-400/50 text-lg'>Get Started</button>
                    </div>
                </div>
            </nav>
            
            </header>
            <hr className='h-0 text-white'></hr>
        </>
    )
  )
}

export default navbar