import React from 'react'

interface SectionProps {
    title: string
    children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    const sectionStyles = 'mt-12 mx-4 md:w-3/4 lg:w-196 flex flex-col'
    return (
        <div className={sectionStyles}>
            <div className="w-full flex flex-col justify-between space-y-4">
                <div className="w-full flex flex-row items-center space-x-2">
                    <span className="text-inherit text-lg">{title}</span>
                    <hr className="flex flex-grow border-primary"></hr>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Section
