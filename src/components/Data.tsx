import { FC } from 'react'

const Data: FC = () => {
	return (
		<>
			<div
				className="home__data lg:col-auto sm:col-[1/3] prose prose-a:no-underline dark:prose-invert prose-h1:text-2xl prose-h3:text-xl prose-h3:font-semibold"
			>
				<h1 className="flex gap-x-2 font-Poppins font-bold items-center">
					Emmanuel Afful <div className="lg:text-lg md:text-base">🖐🏼</div>
				</h1>
				<h3
					className="relative pl-40 font-normal sm:before:absolute sm:before:w-[70px] sm:before:h-[1px] sm:before:bg-slate-700 sm:before:top-4 sm:before:left-10 lg:before:absolute lg:before:w-[70px] lg:before:h-[1px] lg:before:bg-slate-700 lg:before:top-4 lg:before:left-10 lg:after:absolute lg:after:w-[70px] lg:after:h-[1px] lg:after:bg-slate-700 lg:after:top-4 lg:after:right-48"
				>
					Software Developer
				</h3>
				<p className="max-w-lg mb-12">
					Emmanuel Afful is the software developer for the open source community. It is based in a French
					public space, in the National Library of the University of Turin and in, the French public
					space, in the National Library of the University of Turin.
				</p>
				<a href="/contact" className="bg-black dark:bg-amber-600 shadow-xl shadow-slate-400 rounded text-white text-sm font-normal font-Poppins p-3">
					Say Hello <i className="fa-thin fa-paper-plane-top" />
				</a>
			</div>

		</>
	)
}

export default Data;

