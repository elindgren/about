import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ScienceIcon from '@mui/icons-material/Science'
import { Tooltip } from '@mui/material'

interface ContactProps {
    size: 'small' | 'medium' | 'large'
    showName?: boolean
}

const Contact: React.FC<ContactProps> = ({ size, showName }) => {
    const contactDetails = [
        {
            link: 'https://materialsmodeling.org/people/eric-lindgren/',
            object: <ScienceIcon fontSize={size} />,
            label: 'Computational Materials Group @ Chalmers',
        },
        {
            link: 'https://www.linkedin.com/in/eric-lindgren-3a873b196',
            object: <LinkedInIcon fontSize={size} />,
            label: 'LinkedIn',
        },
        {
            link: 'https://github.com/elindgren',
            object: <GitHubIcon fontSize={size} />,
            label: 'GitHub',
        },
    ]

    return showName ? (
        <>
            {contactDetails.map((contact, i) => {
                return (
                    <a className="underline" href={contact.link}>
                        <div key={`contact-${i}`} className="flex flex-row space-x-2 items-center">
                            {contact.object}
                            <span>{contact.label}</span>
                        </div>
                    </a>
                )
            })}
        </>
    ) : (
        <>
            {contactDetails.map((contact) => {
                return (
                    <Tooltip title={contact.label}>
                        <a href={contact.link}>{contact.object}</a>
                    </Tooltip>
                )
            })}
        </>
    )
}

interface MainProps {
    children?: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-bg-base-100 to-bg-primary flex flex-col justify-start items-center overflow-x-hidden overflox-y-auto ">
            <div className="w-full h-16 sticky top-0 z-10 backdrop-blur supports-bg-backdrop-blur:bg-white/90">
                <div className="h-full flex flex-row justify-between items-center px-4 py-2">
                    <div className="flex flex-row items-center space-x-4">
                        <img alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} width="50" />
                        <span className="text-lg md:text-2xl">Eric Lindgren</span>
                    </div>
                    <div className="flex flex-row space-x-2 md:space-x-6 items-center">
                        <Contact size={'medium'} />
                    </div>
                </div>
                <hr className="border-base-100" />
            </div>
            {children}
            <footer className="w-full bg-section-background flex flex-col md:flex-row justify-between mt-12 py-2 px-4 md:px-16 pb-8 text-light-text-secondary">
                <div className="h-36 flex flex-col space-y-2 justify-end items-start ">
                    <span className="font-bold">Contact</span>
                    <Contact size="medium" showName={true} />
                </div>
                <div>
                    <span className="h-24 md:h-36 flex justify-start md:justify-end items-end">
                        Built using React.js and Tailwind CSS
                        <br />
                        Developed by Eric Lindgren, 2023
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Main
