import  { FC } from 'react'

const ScrollDown: FC = () => {
    return (
        <div>
            <div className="pl-52 pb-4 mb-10">
                <a href="/about" className="ml-36 text-xl flex space-x-2 dark:prose-invert prose">
                    <i className="fa-regular fa-computer-mouse-scrollwheel"></i>
                    <span className="text-sm ml-[2px] font-medium">Scroll down <i className="fa-regular fa-arrow-down animate-[scroll_2s_ease_infinite]"></i></span>
                </a>
            </div>
        </div>
    )
}

export default ScrollDown;