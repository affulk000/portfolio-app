import React from 'react'

// const Service = () => {
// 	return (
// 		<>
// 			<section className="my-28 prose dark:prose-invert container">
// 				<h2 className="text-xl text-center">Service</h2>
// 				<span className="justify-center flex">What i offer</span>

// 				<div className="grid grid-cols-3 gap-7">
// 					<div
// 						className="relative border border-solid p-[6rem_0_2rem_2.5rem] border-gray-200 shadow-xl shadow-slate-300"
// 					>
// 						<div>
// 							<i className="fa-thin fa-compass-drafting" />
// 							<h3>Product <br /> Designer</h3>
// 						</div>

// 						<button
// 							type="button"
// 							on: click|preventDefault={ToggleIsOpen}
// 						tabindex={1}
// 						className="gap-2 text-sm cursor-pointer hover:translate-x-1 hover:transform block"
// 			>
// 						View more
// 						<i className="fa-regular fa-arrow-right" />
// 					</button>

// 					<Transition appear show={isOpen}>
// 						<Dialog as="div" on: click={() => ToggleIsOpen()} className="relative z-10" tabindex={1}>
// 							<TransitionChild
// 								enter="duration-300 ease-out"
// 								enterFrom="opacity-0"
// 								enterTo="opacity-100"
// 								leave="duration-200 ease-in"
// 								leaveFrom="opacity-100"
// 								leaveTo="opacity-0"
// 							>
// 								<DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
// 							</TransitionChild>

// 							<div className="fixed inset-0 overflow-y-auto">
// 								<div className="flex min-h-full items-center justify-center p-4 text-center">
// 									<TransitionChild
// 										enter="duration-300 ease-out"
// 										enterFrom="opacity-0 scale-95"
// 										enterTo="opacity-100 scale-100"
// 										leave="duration-200 ease-in"
// 										leaveFrom="opacity-100 scale-100"
// 										leaveTo="opacity-0 scale-95"
// 									>
// 										<div
// 											className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all"
// 										>
// 											<i
// 												className="fas fa-times-circle text-gray-500 cursor-pointer"
// 												on: keydown={handleKeydown}
// 												on: click={() => ToggleIsOpen()}
// 											/>

// 											<ul className="">
// 												{#each objects as object}
// 												<li>
// 													<i className="fa-regular fa-check-circle" />
// 													<p>{object.title}</p>
// 												</li>
// 												{/each}
// 									</ul>
// 										</div>
// 									</TransitionChild>
// 								</div>
// 							</div>
// 						</Dialog>
// 					</Transition>

// 				</div>
// 				<div
// 					className="relative border border-solid p-[6rem_0_2rem_2.5rem] border-gray-200 shadow-xl shadow-slate-300"
// 				>
// 					<div>
// 						<i className="fa-thin fa-code-simple" />
// 						<h3>UI/UX <br /> Designer</h3>
// 					</div>
// 					<button
// 						type="button"
// 						on: click|preventDefault={ToggleIsOpen}
// 					tabindex={2}
// 					className="gap-2 text-sm cursor-pointer hover:translate-x-1 hover:transform"
// 			>
// 					View more
// 					<i className="fa-regular fa-arrow-right" />
// 				</button>

// 				<Transition appear show={isOpen}>
// 					<Dialog as="div" on: click={() => ToggleIsOpen()} className="relative z-10" tabindex={2}>
// 						<TransitionChild
// 							enter="duration-300 ease-out"
// 							enterFrom="opacity-0"
// 							enterTo="opacity-100"
// 							leave="duration-200 ease-in"
// 							leaveFrom="opacity-100"
// 							leaveTo="opacity-0"
// 						>
// 							<DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
// 						</TransitionChild>

// 						<div className="fixed inset-0 overflow-y-auto">
// 							<div className="flex min-h-full items-center justify-center p-4 text-center">
// 								<TransitionChild
// 									enter="duration-300 ease-out"
// 									enterFrom="opacity-0 scale-95"
// 									enterTo="opacity-100 scale-100"
// 									leave="duration-200 ease-in"
// 									leaveFrom="opacity-100 scale-100"
// 									leaveTo="opacity-0 scale-95"
// 								>
// 									<div
// 										className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all"
// 									>
// 										<i
// 											className="fas fa-times-circle text-gray-500 cursor-pointer"
// 											on: keydown={handleKeydown}
// 											on: click={() => ToggleIsOpen()}
// 										/>

// 										<ul className="">
// 											{#each objects as object}
// 											<li>
// 												<i className="fa-regular fa-check-circle" />
// 												<p>{object.title}</p>
// 											</li>
// 											{/each}
// 									</ul>
// 									</div>
// 								</TransitionChild>
// 							</div>
// 						</div>
// 					</Dialog>
// 				</Transition>
// 			</div>
// 			<div
// 				className="relative border border-solid p-[6rem_0_2rem_2.5rem] border-gray-200 shadow-xl shadow-slate-300"
// 			>
// 				<div>
// 					<i className="fa-regular fa-service" />
// 					<h3>Product <br /> Designer</h3>
// 				</div>
// 				<button
// 					type="button"
// 					on: click|preventDefault={ToggleIsOpen}
// 				tabindex={3}
// 				className="gap-2 text-sm cursor-pointer hover:translate-x-1 hover:transform"
// 			>
// 				View more
// 				<i className="fa-regular fa-arrow-right" />
// 			</button>

// 			<Transition appear show={isOpen}>
// 				<Dialog as="div" on: click={() => ToggleIsOpen()} className="relative z-10" tabindex={3}>
// 					<TransitionChild
// 						enter="duration-300 ease-out"
// 						enterFrom="opacity-0"
// 						enterTo="opacity-100"
// 						leave="duration-200 ease-in"
// 						leaveFrom="opacity-100"
// 						leaveTo="opacity-0"
// 					>
// 						<DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
// 					</TransitionChild>

// 					<div className="fixed inset-0 overflow-y-auto">
// 						<div className="flex min-h-full items-center justify-center p-4 text-center">
// 							<TransitionChild
// 								enter="duration-300 ease-out"
// 								enterFrom="opacity-0 scale-95"
// 								enterTo="opacity-100 scale-100"
// 								leave="duration-200 ease-in"
// 								leaveFrom="opacity-100 scale-100"
// 								leaveTo="opacity-0 scale-95"
// 							>
// 								<div
// 									className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all"
// 								>
// 									<i
// 										className="fas fa-times-circle text-gray-500 cursor-pointer"
// 										on: keydown={handleKeydown}
// 										on: click={() => ToggleIsOpen()}
// 									/>

// 									<ul className="">
// 										{#each objects as object}
// 										<li>
// 											<i className="fa-regular fa-check-circle" />
// 											<p>{object.title}</p>
// 										</li>
// 										{/each}
// 									</ul>
// 								</div>
// 							</TransitionChild>
// 						</div>
// 					</div>
// 				</Dialog>
// 			</Transition>
// 		</>
// )

// export default Service;