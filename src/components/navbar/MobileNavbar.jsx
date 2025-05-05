import React, { useState, useEffect } from 'react'
import { navLinks } from '../../assets/links'
import { Link } from 'react-router-dom'
import { CircleX } from 'lucide-react'
import 'animate.css'

export default function MobileNavbar({ onClose }) {
    const [closing, setClosing] = useState(false)

    // When X is clicked, start the closing animations
    const handleCloseClick = () => {
        setClosing(true)
    }

    // After all fadeOutUp animations finish, actually unmount
    useEffect(() => {
        if (!closing) return
        const timer = setTimeout(onClose, 700)
        return () => clearTimeout(timer)
    }, [closing, onClose])

    return (
        <div
            className="fixed inset-0 z-10 lg:hidden flex flex-col bg-black text-white font-bold py-5"
        >
            <div className="flex justify-between px-4">
                <Link
                    to="/"
                    className={`text-[30px] transition-colors duration-300 ease-in-out hover:text-topButton
            animate__animated
            ${closing ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
          `}

                >
                    Goru
                </Link>

                <CircleX
                    onClick={handleCloseClick}
                    size={40}
                    strokeWidth={1}
                    className={`
            transition-colors duration-300 ease-in-out hover:text-topButton cursor-pointer
            animate__animated
            ${closing ? 'animate__fadeOutUp' : 'animate__fadeInDown'}
          `}
                />
            </div>

            <ul className="flex flex-col items-center uppercase flex-grow justify-center space-y-6">
                {navLinks.map(({ name, to }, i) => {
                    { console.log(i); }
                    //delay for thedisplay  of the links 
                    const Delay = `${(i + 1) * 0.1}s`
                    { console.log(Delay); }



                    return (
                        <li
                            key={to}
                            className={`animate__animated ${closing ? 'animate__fadeOutUpBig' : 'animate__fadeInUpBig'}`}
                            style={{

                                animationDelay: Delay,
                                animationDuration: closing ? '1.5s' : '1s'
                            }}
                        >
                            <Link
                                to={to}
                                className="transition-colors duration-300 ease-in-out hover:text-topButton"
                            >
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
