import React from 'react'
import { toast } from 'react-toastify'

interface ResearchItemProps {
    title: string
    authors: string
    time: string
    uri: string
    body: string | React.ReactElement
    image: string
    type: string
}

interface URLButtonProps {
    uri: string
}

const URLButton: React.FC<URLButtonProps> = ({ uri }) => {
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(uri)
                toast('🦄 Copied!', {
                    position: 'bottom-center',
                    autoClose: 1500,
                    theme: 'dark',
                })
            }}
            className="btn btn-ghost"
        >
            🔗 Link
        </button>
    )
}

interface TOCFigureProps {
    title: string
    image: string
}

const TOCFigure: React.FC<TOCFigureProps> = ({ title, image }) => {
    return (
        <div className="w-1/2 m-auto pt-4">
                <img alt={`Publication: ${title}`} src={`${import.meta.env.PUBLIC_URL}/${image}`} />
        </div>
    )
}

const ResearchItem: React.FC<ResearchItemProps> = ({
    title,
    authors,
    time,
    uri,
    body,
    type,
    image,
}) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full image-full">
            <TOCFigure title={title} image={image} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex flex-row justify-between">
                    <h3 className="text-sm font-semibold">{authors}</h3>
                    <span className="badge badge-secondary">{time}</span>
                </div>
                <p>{body}</p>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">{type}</div>
                    <URLButton uri={uri} />
                </div>
            </div>
        </div>
    )
}

export default ResearchItem
