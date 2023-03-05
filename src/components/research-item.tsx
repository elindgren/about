import React from 'react'
import { toast } from 'react-toastify'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ResearchItemProps {
    title: string
    time: string
    uri: string
    body: string
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
        <div className="w-1/2 m-auto">
            <Zoom>
                <img alt={`Publication: ${title}`} src={`${process.env.PUBLIC_URL}/${image}`} />
            </Zoom>
        </div>
    )
}

const ResearchItem: React.FC<ResearchItemProps> = ({ title, time, uri, body, type, image }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full image-full">
            <TOCFigure title={title} image={image} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-secondary">{time}</div>
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
