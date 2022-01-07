import React from 'react'

const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-4 mx-4 md:w-3/4 lg:w-196">
            <div className="flex flex-row items-center text-[32px] lg:text-[64px] text-light-primary space-x-2">
                <span className="text-[64px] lg:text-[120px] pb-4 font-bold">{'{'}</span>
                <span className="align-middle">{'Hello there 👋'}</span>
                <span className="text-[64px] lg:text-[120px] pb-4 font-bold">{'}'}</span>
            </div>
            <div className="rounded-lg my-12 flex flex-col text-light-text-primary dark:text-dark-text-primary border border-light-border dark:border-dark-border bg-section-background">
                <div className="p-4">
                    <div>
                        My name is <b>Eric Lindgren</b>.
                    </div>
                    <span>
                        {'I am a 24 year old PhD student computational physics in the '}
                        <a
                            className="underline hover:text-light-primary"
                            href="https://materialsmodeling.org/"
                        >
                            Computational Materials Group
                        </a>
                        {' at Chalmers University of Technology in Gothenburg, Sweden.'}
                    </span>
                    <div>{'This site showcases my research, CV and skills.'}</div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
