
const Skills = () => {

	interface sections {
		skillName: string;
		skillLevel: String;
	}

	const sections = [
		{
			skillName: 'HTML',
			skillLevel: 'Basic',
		},
		{
			skillName: 'CSS',
			skillLevel: 'Basic',
		},
		{
			skillName: 'JS',
			skillLevel: 'Basic',
		},
		{
			skillName: 'React',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Node.js',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Svelte',
			skillLevel: 'Basic',
		},
	];
	const backend = [
		{
			skillName: 'Sveltekit',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Node.js',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Django',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Postgres',
			skillLevel: 'Basic',
		},
		{
			skillName: 'Prisma',
			skillLevel: 'Basic',
		},
		{
			skillName: 'API',
			skillLevel: 'Basic',
		},
	];
  return (
	


<section id='skills' className="prose prose-headings:text-lg prose-h2:text-2xl prose-h3:text-base mx-auto mt-12">
	<h2 className="text-center mb-0">Skills</h2>
	<span className="flex justify-center mb-5">My Technical level</span>

	<div className="grid grid-cols-[repeat(2,350px)] gap-12 justify-center">
		<div className="border border-solid py-2 px-3 bg-white rounded-lg shadow-xl shadow-slate-400">
			<h3 className="text-center">Frontend developer</h3>

			<div className="flex">
				<div className="grid grid-cols-3">
					{sections.map((section: sections) => (
					<div className="flex space-x-2 items-baseline justify-center px-2">
						
						<i className="fa-regular fa-badge-check text-base" />
						<div className="mt-1 mb-3 flex flex-col">
								<h3 className="m-0">{section.skillName}</h3>
								<span className="text-sm ">{section.skillLevel}</span>
						</div>
						
					</div>
					), )};
				</div>
			</div>
		</div>
		<div className="border border-solid py-2 px-3 bg-white shadow-xl shadow-slate-400 rounded-lg">
			<h3 className="text-center">Backend developer</h3>

			<div className="flex">
				<div className="grid grid-cols-3">
					{backend.map((section: sections) => (
					<div className="flex space-x-2 items-baseline justify-center px-2">
						
						<i className="fa-regular fa-badge-check text-base" />
						<div className="mt-1 mb-3 flex flex-col">
								<h3 className="m-0">{section.skillName}</h3>
								<span className="text-sm">{section.skillLevel}</span>
						</div>
						
					</div>
					),)}
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Skills;
