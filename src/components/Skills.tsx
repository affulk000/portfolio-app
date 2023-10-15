{/* <script lang="ts">
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
</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="skills page" />
</svelte:head>

<section class="prose prose-headings:text-lg prose-h2:text-2xl prose-h3:text-base mx-auto mt-12">
	<h2 class="text-center mb-0">Skills</h2>
	<span class="flex justify-center mb-5">My Technical level</span>

	<div class="grid grid-cols-[repeat(2,350px)] gap-12 justify-center">
		<div class="border border-solid py-2 px-3 bg-white rounded-lg shadow-xl shadow-slate-400">
			<h3 class="text-center">Frontend developer</h3>

			<div class="flex">
				<div class="grid grid-cols-3">
					{#each sections as section}
					<div class="flex space-x-2 items-baseline justify-center px-2">
						
						<i class="fa-regular fa-badge-check text-base" />
						<div class="mt-1 mb-3 flex flex-col">
								<h3 class="m-0">{section.skillName}</h3>
								<span class="text-sm ">{section.skillLevel}</span>
						</div>
						
					</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="border border-solid py-2 px-3 bg-white shadow-xl shadow-slate-400 rounded-lg">
			<h3 class="text-center">Backend developer</h3>

			<div class="flex">
				<div class="grid grid-cols-3">
					{#each backend as section}
					<div class="flex space-x-2 items-baseline justify-center px-2">
						
						<i class="fa-regular fa-badge-check text-base" />
						<div class="mt-1 mb-3 flex flex-col">
								<h3 class="m-0">{section.skillName}</h3>
								<span class="text-sm">{section.skillLevel}</span>
						</div>
						
					</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section> */}
