<script lang="ts">
	import { projects as projectsEn, smallerBuilds as buildsEn } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import Icon from './Icon.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		projects = projectsEn,
		smallerBuilds = buildsEn,
		header = {
			number: '02 / Work',
			title: 'Selected work',
			intro:
				'A robot in daily public service, a controller that has to fail safely, and seven years of contest infrastructure.'
		},
		bench = { title: 'On the bench', aside: 'Also shipped' },
		projectLabels = undefined
	} = $props();
</script>

<section id="work" class="pt-section">
	<div class="shell">
		<SectionHeader
			number={header.number}
			title={header.title}
			intro={header.intro}
		/>

		<div class="mt-10 space-y-6 sm:mt-14 sm:space-y-8 lg:space-y-10">
			{#each projects as project, i (project.title)}
				<ProjectCard {project} index={i} labels={projectLabels} />
			{/each}
		</div>

		<!-- Smaller builds -->
		<div class="mt-12 sm:mt-16">
			<div class="reveal mb-6 flex items-baseline gap-4" use:reveal>
				<h3 class="text-title font-semibold">{bench.title}</h3>
				<span class="bg-line h-px flex-1"></span>
				<span class="label text-faint shrink-0">{bench.aside}</span>
			</div>

			<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each smallerBuilds as build, i (build.text)}
					<li
						class="reveal group border-line hover:border-brand-300 rounded-card relative flex flex-col overflow-hidden border bg-white p-5 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_38px_-24px_rgba(4,69,30,0.34)]"
						use:reveal={{ delay: i * 70 }}
					>
						<span
							class="bg-brand-700 absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
							aria-hidden="true"
						></span>

						<span
							class="bg-brand-50 text-brand-700 group-hover:bg-brand-700 mb-4 flex h-10 w-10 items-center justify-center rounded-[3px] transition-all duration-400 group-hover:text-white"
						>
							<Icon name={build.icon} size={19} />
						</span>
						<span
							class="text-brand-700 mb-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-300"
						>
							{build.domain}
						</span>
						<span class="text-muted text-sm leading-snug">{build.text}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
