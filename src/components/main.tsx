import React from 'react'
import DarkModeToggle from './dark-mode-toggle'

interface MainProps {
    children?: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gradient-to-tr from-light-background via-light-background to-light-background-secondary dark:from-dark-background dark:to-gray-900 flex flex-col justify-start items-center overflow-x-hidden overflox-y-auto text-light-text-secondary dark:text-dark-text-primary">
            <div className="w-full h-16 sticky top-0 z-10 backdrop-blur supports-bg-backdrop-blur:bg-white/90">
                <div className="h-full flex flex-row justify-between items-center px-4 py-2">
                    <div className="flex flex-row items-center space-x-4">
                        <img alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} width="50" />
                        <span className="text-2xl">Eric Lindgren</span>
                    </div>

                    <DarkModeToggle />
                </div>
                <hr className="border-light-border dark:border-dark-border" />
            </div>
            {children}
        </div>
    )
}

export default Main
