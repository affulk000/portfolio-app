import React from 'react'

const Info = () => {
	return (
		<div>
			<div className="grid grid-cols-[repeat(3,140px)] gap-2 mb-8 prose-headings:text-lg">
				{/* <!--about-box--> */}
				<div className="border-solid border rounded-xl bg-slate-100 text-center py-3 px-5 shadow-xl shadow-slate-300">
					<i className="fa-regular fa-award" />
					<h3>Experience</h3>
					<span className="text-sm">8 years working</span>
				</div>

			{/* <!--about-box--> */}
				<div className="border-solid border rounded-xl bg-slate-100 text-center py-3 px-5 shadow-xl shadow-slate-300">
					<i className="fa-regular fa-briefcase" />
					<h3>Completed</h3>
					<span className="text-sm">48 + projects</span>
				</div>

				{/* <!--about-box--> */}
				<div className="border-solid border rounded-xl bg-slate-100 text-center py-3 px-5 shadow-xl shadow-slate-300">
					<i className="fa-regular fa-headset" />
					<h3>Support</h3>
					<span className="text-sm">Online 24/7</span>
				</div>
			</div>

		</div>
	)
}

export default Info;