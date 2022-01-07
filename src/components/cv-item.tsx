import React from 'react'

interface CVItemProps {
    title: string
    location: string
    time: string
    body: string
}

const CVItem: React.FC<CVItemProps> = ({ title, location, time, body }) => {
    return (
        <div className="w-full flex flex-row justify-start items-center pb-2">
            <div className="w-full flex flex-col">
                <div className="flex flex-row space-x-2 justify-between">
                    <span className="flex flex-row space-x-2 items-center">
                        <div className="rounded-full w-2 h-2 bg-light-primary" />
                        <span className="font-bold text-light-text-primary">{title}</span>
                    </span>
                    <span className="italic flex-grow text-light-text-secondary">{location}</span>
                    <span className="font-bold text-light-text-secondary">{time}</span>
                </div>
                <span className="px-8 pt-2 text-light-text-primary">{body}</span>
            </div>
        </div>
    )
}

export default CVItem
