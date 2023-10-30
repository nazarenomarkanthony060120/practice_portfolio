import React from 'react'
import { InnerCardInfo } from '../types/types'

const InnerCardInfo = ({ title, cardBodyTitle, progLanguage, cardTitleClass, cardBodyClass, cardBodyContentClass, handleClick }: InnerCardInfo) => {
    return (
        <>
            <div className={cardTitleClass}>
                <span>{title}</span>
            </div>
            <div className={cardBodyClass}>
                {cardBodyTitle}
                <div className={cardBodyContentClass}>
                    {progLanguage}
                </div>
            </div>
        </>
    )
}

export default InnerCardInfo