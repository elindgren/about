import React from 'react'

interface SubSectionProps {
    title: string
    children?: React.ReactNode
}

const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
    return (
        <div className="w-full flex flex-col justify-between space-y-4">
            <div className="w-full flex flex-row items-center space-x-2">
                <span className="text-inherit text-lg">{title}</span>
                <hr className="flex flex-grow border-light-primary"></hr>
            </div>
            {children}
        </div>
    )
}

export default SubSection
