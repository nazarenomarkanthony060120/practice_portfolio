"use client"
import React from 'react'
import { Button } from '../types/types'
import Link from 'next/link'



const Button = ({ title, classes, handleClick }: Button) => {

    return (
        <>
        {
            title === "LOGIN"
            ? <Link href={'/login'}>
                <button className={classes} onClick={handleClick}>
                    {title}
                </button>
            </Link>
            : <button className={classes} onClick={handleClick}>
                {title}
            </button>
        }
            
        </>
    )
}

export default Button