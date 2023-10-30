import React from 'react'
import InnerCardInfo from '../components/InnerCardInfo'
import Card from '../components/Card'
import Android_Img from '../images/android_img.jpg'
import Web_Img from '../images/web_img.jpg'
import GameDev_Img from '../images/game_dev.png'
import Devil_Hacker from '../images/devil_hacker.jpg'
import Image from 'next/image'
import Button from '../components/Button'

const Services = () => {
    const cardInfo = [
        { title: "Android Development", 
            imagePic: Android_Img,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "Java, " },
                { prog: "Kotlin" },
            ],
            cardBodyTitle2: 'Back End:', 
            database: [ 
                { db: "SQL, " },
                { db: "Firebase" },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available'
        },
        { title: "Website Development", 
            imagePic: Web_Img,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "ReactJS, " },
                { prog: "NextJS 13, " },
                { prog: "HTML5, " },
                { prog: "CSS, " },
                { prog: "Tailwind CSS, " },
                { prog: "JavaScript" },
                
            ],
            cardBodyTitle2: 'Back End:', 
            database: [ 
                { db: "SQL, " },
                { db: "Firebase, " },
                { db: "MySQL" },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available'
        },
            { title: "Game Development", 
            imagePic: GameDev_Img,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "Java, " },
                { prog: "JavaScript, " },
                { prog: "Tailwind CSS, " },
                { prog: "HTML5, " },
                { prog: "CSS, " },
                { prog: "JavaScript" },
                
            ],
            cardBodyTitle2: 'Back End:', 
            database: [ 
                { db: "SQL, " },
                { db: "Firebase, " },
                { db: "MySQL" },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available'
        },
        ]

    return (
        <>
            <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='services'>
                <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
                    <div className="text-center font-bold">SERVICES</div>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                        {
                            cardInfo.map((data, index) => (
                                <Card key={index} classes='flex flex-col overflow-hidden rounded-lg border'>
                                    <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                        <Image src={ data.imagePic || '' } loading="lazy" alt={data.title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    </a>
                                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                                        <h2 className="mb-2 text-lg font-semibold">
                                            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{data.title}</a>
                                        </h2>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle1}</p>
                                            <div className="text-gray-500">
                                                {
                                                    Array.isArray(data.progLanguage) && data.progLanguage.map((prog, index) => (
                                                        <span className='font-bold' key={index}>{prog.prog}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle2}</p>
                                            <div className="text-gray-500">
                                                {
                                                    Array.isArray(data.database) && data.database.map((db, index) => (
                                                        <span className='font-bold' key={index}>{db.db}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-end justify-between p-4 sm:p-6">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <Image src={ data.picture || '' } loading="lazy" alt="Devil Hacker" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span className="block text-indigo-500">{data.name}</span>
                                                <span className="block text-sm text-gray-400">{data.work}</span>
                                            </div>
                                        </div>
                                        <span className="rounded border px-2 py-1 text-sm text-gray-500 hover:bg-cyan-400 hover:text-black">{data.avail}</span>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <div className='min-h-screen relative dark:bg-black dark:text-white px-16' id='services'>
                <div className="text-center font-bold mb-5">SERVICES</div>
                <div className="grid gap-4 sm:grid-cols-1 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                    {
                        cardInfo.map((data, index) => (
                            <Card classes='flex flex-col overflow-hidden rounded-lg border bg-white' key={index}>
                                <div className="relative h-full flex flex-col gap-5">
                                    <div className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                        <Image loading="lazy" className='absolute inset-0 h-full w-full object-cover object-center transition-all transform duration-200 group-hover:scale-110' src={data.imagePic || ''} alt='android' />
                                    </div>

                                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                                        <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{data.title}</a>
                                        </h2>
                                    </div>
                                    
                                    <div className="mt-auto flex items-end justify-between">
                                        <div className="flex flex-row text-start ">
                                            <div className='w-24'>{data.cardBodyTitle1}</div>
                                            <div className='flex flex-wrap gap-2'>
                                                {
                                                    Array.isArray(data.progLanguage) && data.progLanguage.map((prog, index) => (
                                                        <span className='font-semibold' key={index}>{prog.prog}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            {data.cardBodyTitle2}
                                            <div className='text-start flex gap-3'>
                                                {
                                                    Array.isArray(data.database) && data.database.map((db, index) => (
                                                        <span className='font-bold' key={index}>{db.db},</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <span>{data.descTitle}</span>
                                            <span className='text-justify'>{data.desc}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Button title={'View'} classes='absolute w-full bottom-0 p-5 bg-green-500 rounded-bl-lg rounded-br-lg hover:bg-green-600 hover:text-white'/>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div> */}
        </>
        
    )
}

export default Services