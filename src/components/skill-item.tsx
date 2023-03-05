import React from 'react'

interface SkillItemProps {
    title: string
    body?: string
    comment?: string
}

const SkillItem: React.FC<SkillItemProps> = ({ title, body, comment }) => {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2 className="font-bold">{title}</h2>
                <span className="badge badge-primary text-base-100">{comment}</span>
            </div>
            <p className="text-primary">{body}</p>
        </div>
    )
}

export default SkillItem
