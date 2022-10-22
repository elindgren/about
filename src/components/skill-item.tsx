import React from 'react'

interface SkillItemProps {
    title: string
    body: string
    comment?: string
    longText?: boolean
}

const SkillItem: React.FC<SkillItemProps> = ({ title, body, comment, longText }) => {
    const bodyComponent = <div className="flex-grow text-light-text-secondary">{body}</div>
    return (
        <div className="w-full flex flex-row justify-start">
            <div className="w-16 flex items-center justify-center">
                <div className="w-2 h-2 bg-light-primary" />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-row space-x-2 items-center justify-between">
                    <div className="h-full flex justify-center items-center">
                        <span className="text-lg font-bold text-light-text-primary">{title}</span>
                    </div>
                    {!longText && bodyComponent}
                    <div className="italic text-light-text-secondary">{comment}</div>
                </div>
                {longText && bodyComponent}
            </div>
        </div>
    )
}

export default SkillItem
