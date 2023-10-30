import React from 'react'
import { Card } from '../types/types'

const Card = ({ children, classes }: Card) => {
    return (
        <>
            <div className={classes}>
                {children}
            </div>
        </>
    )
}

export default Card