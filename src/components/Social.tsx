import React from 'react'

const Social = () => {
    return (
        <div className="grid grid-cols-[max-content] gap-y-4 prose dark:prose-invert">
            <a href="#tp" className="text-xl text-green-600 hover:text-green-500 ease-in transition" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#tp" className="text-xl hover:text-sky-500 ease-in transition" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="#tp" className="text-xl text-[#7289d9] hover:text-sky-500 ease-in" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-discord"></i>
            </a>
        </div>
    )
}

export default Social;
