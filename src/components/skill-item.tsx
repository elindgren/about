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
                <h2 className="font-bold text-base">{title}</h2>
                <span className="badge badge-outline">{comment}</span>
            </div>
            <p className="text-base-100">{body}</p>
        </div>
    )
}

export default SkillItem
