import React from 'react'

const Welcome: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-sm md:max-w-lg">
                    <div className="flex flex-row items-center justify-center text-[32px] lg:text-[64px] text-primary">
                        <span className="text-[64px] lg:text-[120px] pb-4 font-bold">{'{'}</span>
                        <span className="align-middle">{'Hello there 👋'}</span>
                        <span className="text-[64px] lg:text-[120px] pb-4 font-bold">{'}'}</span>
                    </div>
                    <p className="mb-5">
                        <div>
                            {'My name is '}
                            <b>Eric Lindgren</b>
                            {'. I am a 26 year old PhD student in physics, and part of the '}
                            <a
                                className="underline hover:text-primary-content font-bold"
                                href="https://materialsmodeling.org/"
                            >
                                Computational Materials Group
                            </a>
                            {' at Chalmers University of Technology in Gothenburg, Sweden.'}
                        </div>
                        <span></span>
                        <div className="mt-4">
                            {
                                'This site showcases my research, CV and skills. Use the links at the top or the bottom of this page if you want to get in touch!'
                            }
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome
