import React from 'react'
import Zoom from 'react-medium-image-zoom'

interface SkillsSubSectionProps {
    title: string
    image?: string
    imageTitle?: string
    children?: React.ReactNode
}

interface BackgroundFigureProps {
    title: string
    image: string
}

const BackgroundFigure: React.FC<BackgroundFigureProps> = ({ title, image }) => {
    return (
        <div className="w-full m-auto">
            <Zoom>
                <img alt={`${title}`} src={`${process.env.PUBLIC_URL}/${image}`} />
            </Zoom>
        </div>
    )
}

const SkillsSubSection: React.FC<SkillsSubSectionProps> = ({
    title,
    image,
    imageTitle,
    children,
}) => {
    return (
        <div className="card w-full shadow-xl bg-secondary text-primary">
            {image && imageTitle && <BackgroundFigure title={imageTitle} image={image} />}
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default SkillsSubSection
