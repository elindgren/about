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
    abstract: string
}

const ResearchItem: React.FC<ResearchItemProps> = ({ title, time, uri, body, abstract, image }) => {
    return (
        <div className="w-full flex flex-row justify-start items-center">
            <div className="w-full flex flex-col">
                <div className="flex flex-row space-x-2 items-center justify-between py-2">
                    <div className="text-lg font-bold text-light-text-primary">{title}</div>
                    <div className="font-bold text-light-text-secondary">{time}</div>
                </div>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(uri)
                        toast('🦄 Copied!', {
                            position: 'bottom-center',
                            autoClose: 2500,
                        })
                    }}
                    className="border-2 rounded-md p-1 font-semibold w-20 text-light-text-secondary border-light-text-secondary hover:bg-gray-700"
                >
                    Link 🔗
                </button>
                <div className="py-4 w-1/2 m-auto">
                    <Zoom>
                        <img
                            alt={`Publication: ${title}`}
                            src={`${process.env.PUBLIC_URL}/${image}.png`}
                        />
                    </Zoom>
                </div>

                <div className="py-2 text-light-text-primary">{body}</div>
                <div className="font-bold">Abstract</div>
                <div className="px-4 text-sm italic break-word text-light-text-secondary">
                    {abstract}
                </div>
            </div>
        </div>
    )
}

export default ResearchItem
