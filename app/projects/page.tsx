import React from 'react'
import Card from '../components/Card'
import Android_Img from '../images/android_img.jpg'
import Web_Img from '../images/web_img.jpg'
import GameDev_Img from '../images/game_dev.png'
import Devil_Hacker from '../images/devil_hacker.jpg'
import Image from 'next/image'
import Minimart_Inventroy_System from '../images/Minimart_Inventory_System.png'
import Attendance_App from '../images/Attendance_App.jpg'
import Admin_Website from '../images/Admin_Website.png'
import Teacher_Website from '../images/Teacher_Website.png'
import Parent_Website from '../images/Parent_Website.png'

const Projects = () => {
    const cardInfo = [
        { title: "Minimart Inventory System", 
            imagePic: Minimart_Inventroy_System,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "ReactJS, " },
                { prog: "Tailwind Css" },
            ],
            cardBodyTitle2: 'Back End:', 
            backEnd: [ 
                { be: "NodeJS, " },
                { be: "ExpressJS" },
            ], 
            cardBodyTitle3: 'Database:', 
            database: [ 
                { db: "MySQL, " },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available',
            visit: 'Visit'
        },
        { title: "Attendance App System", 
            imagePic: Attendance_App,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "Java, " },
            ],
            cardBodyTitle2: 'Back End:', 
            backEnd: [ 
                { be: "Java, " },
            ], 
            cardBodyTitle3: 'Database:', 
            database: [ 
                { db: "Firebase" },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available',
            visit: 'Visit'
        },
        { title: "Admin Website", 
            imagePic: Admin_Website,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "HTML5, " },
                { prog: "CSS, " },
                { prog: "BOOTSTRAP 5, " },
                { prog: "JAVASCRIPT, " },
            ],
            cardBodyTitle2: 'Back End:', 
            backEnd: [ 
                { be: "JAVASCRIPT, " },
            ], 
            cardBodyTitle3: 'Database:', 
            database: [ 
                { db: "Firebase" },
            ], 
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available',
            visit: 'Visit'
        },
        { title: "Teacher Website", 
            imagePic: Teacher_Website,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "HTML5, " },
                { prog: "CSS, " },
                { prog: "BOOTSTRAP 5, " },
                { prog: "JAVASCRIPT, " },
            ],
            cardBodyTitle2: 'Back End:', 
            backEnd: [ 
                { be: "JAVASCRIPT, " },
            ], 
            cardBodyTitle3: 'Database:', 
            database: [ 
                { db: "Firebase" },
            ],
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available',
            visit: 'Visit'
        },
        { title: "Parent Website", 
            imagePic: Parent_Website,
            cardBodyTitle1: 'Front End:', 
            progLanguage: [
                { prog: "HTML5, " },
                { prog: "CSS, " },
                { prog: "BOOTSTRAP 5, " },
                { prog: "JAVASCRIPT, " },
            ],
            cardBodyTitle2: 'Back End:', 
            backEnd: [ 
                { be: "JAVASCRIPT, " },
            ], 
            cardBodyTitle3: 'Database:', 
            database: [ 
                { db: "Firebase" },
            ],
            descTitle: 'Description:',
            picture: Devil_Hacker,
            name: 'Mark Anthony',
            work: 'Dev - Present',
            avail: 'Available',
            visit: 'Visit'
        },
    ]

    return (
        <>
            <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='projects'>
                <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
                    <div className="text-center font-bold">PROJECTS</div>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {
                            cardInfo.map((data, index) => (
                                <Card key={index} classes='flex flex-col overflow-hidden rounded-lg border'>
                                    <a href="#" className="group relative block h-40 overflow-hidden bg-gray-100 md:h-56">
                                        <Image src={ data.imagePic || '' } loading="lazy" alt={data.title} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    </a>
                                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                                        <h2 className="mb-2 text-lg font-semibold">
                                            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{data.title}</a>
                                        </h2>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle1}</p>
                                            <div className=" text-gray-500">
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
                                                    Array.isArray(data.backEnd) && data.backEnd.map((backEnd, index) => (
                                                        <span className='font-bold' key={index}>{backEnd.be}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle3}</p>
                                            <div className="text-gray-500">
                                                {
                                                    Array.isArray(data.database) && data.database.map((database, index) => (
                                                        <span className='font-bold' key={index}>{database.db}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between p-4 sm:p-6">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <Image src={ data.picture || '' } loading="lazy" alt="Devil Hacker" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span className="block text-indigo-500">{data.name}</span>
                                                <span className="block text-sm text-gray-400">{data.work}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="rounded border px-2 py-1 text-sm text-center text-gray-500 hover:bg-cyan-400 hover:text-black">{data.avail}</span>
                                            <span className="rounded border px-2 py-1 text-sm text-center text-gray-500 hover:bg-cyan-400 hover:text-black">{data.visit}</span>
                                        </div>
                                        
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects