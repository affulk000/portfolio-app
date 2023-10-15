import React from 'react'

const Qualification = () => {
	return (
		<div>
			<section className="prose container mx-auto prose-h2:prose-lg">
				<h2 className="text-center justify-center mb-0">Qualification</h2>
				<span className="flex justify-center text-base mb-2">My personnal Journey</span>

				<div className="max-w-3xl">
					{/* <!-- container --> */}
					<div className="flex justify-center mb-2">
						{/* <!-- Tabs --> */}
						<div className="cursor-pointer hover:text-black m-2">
							{/* <!-- button --> */}
							<i className="fa fa-graduation-cap" /> Education
						</div>
						{/* <!-- end button --> */}

						<div className="cursor-pointer hover:text-black m-2">
							{/* <!-- button --> */}
							<i className="fa-regular fa-briefcase" /> Experience
						</div>
						{/* <!-- end button --> */}
					</div>
					{/* <!-- ends tabs --> */}

					<div className="grid grid-cols-[0.5fr] justify-center">
						{/* <!--section--> */}
						<div className="aria-[activedescendant]:block" aria-activedescendant="none">
							{/* <!--content--> */}
							<div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
								{/* <!--data--> */}
								<div className="flex flex-col items-center">
									<h2>title</h2>
									<span className="text-sm">Bompata-senior high school</span>
									<div className="text-sm">
										<i className="fa-regular fa-calendar-alt" /> 2015-2017
									</div>
								</div>

								<div className="flex flex-col items-center">
									<span className="inline-block w-3 h-3 bg-slate-700 rounded-2xl" />
									<span className="block w-[1px] h-full bg-slate-700 translate-x-[6px,-7px]" />
								</div>
							</div>
							<div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
								{/* <!--data--> */}
								<div className="flex flex-col items-center">
									<span className="inline-block w-3 h-3 bg-slate-700 rounded-2xl" />
									<span className="block w-[1px] h-full bg-slate-700 translate-x-[6px,-7px]" />
								</div>
								<div>
									<h2>title</h2>
									<span className="text-sm">GCTU</span>
									<div className="text-sm">
										<i className="fa-regular fa-calendar-alt" /> 2015-2017
									</div>
								</div>
							</div>
							<div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
								{/* <!--data--> */}
								<div>
									<h2>title</h2>
									<span className="text-sm">Bompata-senior high school</span>
									<div className="text-sm">
										<i className="fa-regular fa-calendar-alt" /> 2015-2017
									</div>
								</div>

								<div className="flex flex-col items-center">
									<span className="inline-block w-3 h-3 bg-slate-700 rounded-2xl" />
									<span className="block w-[1px] h-full bg-slate-700 translate-x-[6px,-6px]" />
								</div>
							</div>
							<div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
								{/* <!--data--> */}
								<div className="flex flex-col items-center">
									<span className="inline-block w-3 h-3 bg-slate-700 rounded-2xl" />
									<span className="block w-[1px] h-full bg-slate-700 translate-x-[6px,-7px]" />
								</div>
								<div>
									<h2>title</h2>
									<span className="text-sm">GCTU</span>
									<div className="text-sm">
										<i className="fa-regular fa-calendar-alt" /> 2015-2017
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- end container --> */}
			</section>

		</div>
	)
}

export default Qualification;