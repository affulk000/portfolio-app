import { FC } from "react"
import Profile from "../assets/profile.jpeg"
import Info from "./Info"


export const About: FC = () => (
	<section id="about">
		<div className="prose prose-headings:text-2xl dark:prose-invert mx-auto my-3">
			{/* <!--Title--> */}
			<h2 className="text-center mb-0">About Me</h2>
			{/* <!--Subtitle--> */}
			<span className="flex items-center justify-center mb-8">My introduction</span>
			<div className="about_container gap-x-52 grid grid-cols-2">
				<img src={Profile} alt="art" className="w-[350px] rounded-3xl  justify-self-center" />

				<div className="flex flex-col flex-wrap">
					{/* <!--info component--> */}
					<Info />

					{/* <!--paragraph story--> */}
					<p className="text-base line-clamp-3">
						I am a Full Stack developer, I have honed my skills in various programming languages and
						technologies, including HTML, CSS, JavaScript, and React.
					</p>

					<a
						download=""
						href="cv"
						className="no-underline bg-black dark:bg-amber-600 text-sm font-Poppins rounded-md text-center text-white p-2 shadow-xl shadow-slate-300"
					>Download CV <i className="fa-thin fa-file-spreadsheet" /></a
					>
				</div>
			</div>
		</div>
	</section>
)
