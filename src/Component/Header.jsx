import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div>
                <div className='flex flex-row bg-slate-900 text-white justify-around p-6'>
                    <div>
                        <h1 className='text-3xl font-bold uppercase'>FitGuru</h1>
                    </div>
                    <nav>
                        <ul type="none" className='flex flex-row mt-1  text-white'>
                            <li className='text-xl mr-8'> <Link to="./Body">Home</Link> </li>
                            <li className='text-xl'> <Link to="./Exercise">Exercise</Link> </li>
                        </ul>
                    </nav>
                </div>

            </div>
          
        </>
    )
}

export default Header
