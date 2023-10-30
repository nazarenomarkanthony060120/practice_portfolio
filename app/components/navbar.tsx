"use client"

import {Link} from 'react-scroll'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { BiSun } from 'react-icons/bi'
import { FiMoon } from 'react-icons/fi'
import Logo from '../images/logo.png'
import Image from 'next/image'

interface NavItems {
    name: string,
    to: string
}

const Navbar = () => {

    const navItems: NavItems[] = [
        { name: "home", to: "home" },
        { name: "services", to: "services" },
        { name: "projects", to: "projects" },
        { name: "about us", to: "about_us" },
        { name: "career", to: "career" },
        { name: "contact", to: "contact" },
        { name: "blog", to: "blog" },
    ]

    const [ isClicked, setIsClicked ]: [ boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
    const [ isDarkMode, setIsDarkMode ]: [ boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
    const [ theme, setTheme ]: [ string, React.Dispatch<React.SetStateAction<string>>] = useState('dark')

    const handleIsClickedOpen = () => {
        setIsClicked(true)
    }

    const handleIsClickedClose = () => {
        setIsClicked(false)
    }

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return (
        <>
            <div className="bg-white  dark:bg-black dark:text-white sticky inset-0 z-10">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header className="flex items-center justify-between py-4 md:py-8">
                        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                            <Image src={Logo} className='w-10 h-10' alt="black bull" />
                            <span className='font-bold text-lg dark:text-white'>BlackBulls v4.0.0</span> 
                        </a>
                        <nav className="hidden gap-12 xl:flex items-center">
                            {
                                navItems.map((item, index) => (
                                    <Link className="text-lg font-semibold transition duration-100 hover:text-indigo-500 active:text-indigo-700" to={item.to} spy duration={500} smooth offset={-100} key={index}>
                                        <span className='font-bold hover:underline text-sm'>{item.name.toUpperCase()}</span>
                                    </Link>
                                ))
                            }
                            <div className="flex items-center gap-5">
                                <Button title={ "login".toUpperCase() } classes="text-sm font-bold hover:bg-blue-500 hover-text-white px-3 py-2 rounded-lg"/>
                                <div onClick={ handleThemeSwitch }>{theme === "dark" ? <BiSun size={20}/> : <FiMoon size={20}/>}</div>
                            </div>
                        </nav> 
                        <div className={`inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base xl:hidden ${ isClicked ? 'hidden' : ''}`}>
                            <Button title={ <RxHamburgerMenu />} classes='' handleClick={handleIsClickedOpen}/>
                        </div>
                        <div className={`inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base xl:hidden ${ isClicked ? '' : 'hidden'}`}>
                            <Button title={ <AiOutlineClose />} classes='' handleClick={handleIsClickedClose}/>
                        </div>
                    </header>
                    {
                        isClicked ? 
                        <ul className='xl:hidden h-fit dark:bg-black dark:text-white bg-white'>
                            {
                                navItems.map((item, index) => (
                                    <Link key={index} to={item.to} spy={true} smooth={true} duration={500} className='box-border relative '>
                                        <li className='list-none py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold' >{item.name.toUpperCase()}</li>
                                    </Link>
                                ))
                            }
                            <Button title={ "login".toUpperCase() } classes='w-full text-start py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold'/>
                            <div className='w-full text-start py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold' onClick={ handleThemeSwitch }>
                                {
                                    theme === "dark" 
                                    ? <div className='flex gap-3'>
                                        <BiSun size={20}/>
                                        <span>Light Mode</span>
                                    </div>
                                    : <div className='flex gap-3'>
                                        <FiMoon size={20}/>
                                        <span>Dark Mode</span>
                                    </div>
                                }
                            </div>
                        </ul>
                        : ''
                    }
                </div>
            </div>
            {/* <div className='dark:bg-black dark:text-white duration-300 transition-all bg-black bg-opacity-10 sticky h-fit inset-0 z-20 w-auto items-center justify-between '>
                <div className="flex justify-between px-12 py-6">
                    <div className="flex items-center gap-3">
                        <Image src={Logo} className='w-10 h-10' alt="black bull" />
                        <span className='font-bold text-lg '>BlackBulls v4.0.0</span> 
                    </div>
                    <div className="">
                        <div className="hidden xl:block">
                            <div classNam e="flex items-center gap-10 ">
                                {
                                    navItems.map((item, index) => (
                                        <Link to={item.to} spy duration={500} smooth offset={-100} key={index}>
                                            <span className='font-bold hover:underline text-sm'>{item.name.toUpperCase()}</span>
                                        </Link>
                                    ))
                                }
                                <Button title={ "login".toUpperCase() } classes='font-bold hover:text-slate-900 hover:bg-gray-200 text-sm rounded-lg p-2'/>
                                <div onClick={ handleThemeSwitch }>{theme === "dark" ? <BiSun size={20}/> : <FiMoon size={20}/>}</div>
                            </div>
                        </div>
                        <div className={`block xl:hidden ${ isClicked ? 'hidden' : ''}`}>
                            <Button title={ <RxHamburgerMenu />} classes='' handleClick={handleIsClickedOpen}/>
                        </div>
                        <div className={`block xl:hidden ${ isClicked ? '' : 'hidden'}`}>
                            <Button title={ <AiOutlineClose />} classes='' handleClick={handleIsClickedClose}/>
                        </div>
                    </div>
                </div>
                
                {
                    isClicked ? 
                    <ul className='xl:hidden h-fit dark:bg-black dark:text-white bg-white'>
                        {
                            navItems.map((item, index) => (
                                <Link key={index} to={item.to} spy={true} smooth={true} duration={500} className='box-border relative '>
                                    <li className='list-none py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold' >{item.name.toUpperCase()}</li>
                                </Link>
                            ))
                        }
                        <Button title={ "login".toUpperCase() } classes='w-full text-start py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold'/>
                        <div className='w-full text-start py-5 hover:bg-gray-200 hover:text-black pl-12 border-b text-sm font-bold' onClick={ handleThemeSwitch }>
                            {
                                theme === "dark" 
                                ? <div className='flex gap-3'>
                                    <BiSun size={20}/>
                                    <span>Light Mode</span>
                                </div>
                                : <div className='flex gap-3'>
                                    <FiMoon size={20}/>
                                    <span>Dark Mode</span>
                                </div>
                            }
                        </div>
                    </ul>
                    : ''
                }
            </div> */}
            
        </>
    )
}

export default Navbar