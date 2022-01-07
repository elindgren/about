import React from 'react'

interface SectionProps {
    title: string
    children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    const sectionStyles =
        'rounded-lg mt-12 mx-4 md:w-3/4 lg:w-196 flex flex-col text-light-text-primary dark:text-dark-text-primary border border-light-border dark:border-dark-border bg-section-background'
    return (
        <div className={sectionStyles}>
            <div className="flex flex-row mt-2">
                <span className="py-2 px-4 text-2xl text-inherit w-32 border-b border-light-primary">
                    {title}
                </span>
                <div className="flex-grow rounded-tl-lg border-b bg-gray-700   border-light-border dark:border-dark-border" />
            </div>
            <div className="flex flex-col space-y-4 p-4">{children}</div>
        </div>
    )
}

export default Section
