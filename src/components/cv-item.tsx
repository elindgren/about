import React from 'react'

interface CVItemProps {
    title: string
    location: string
    time: string
}

const CVItem: React.FC<CVItemProps> = ({ title, location, time }) => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2 className="font-bold text-base">{title}</h2>
                <span className="badge badge-secondary">{time}</span>
            </div>
            <p className="text-base-100">{location}</p>
        </div>
    )
}

export default CVItem
