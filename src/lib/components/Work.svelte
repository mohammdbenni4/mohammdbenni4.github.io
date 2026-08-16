<script lang="ts">
	import { projects, smallerBuilds } from '$lib/data/site';
	import SectionHeader from './SectionHeader.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="work" class="pt-section">
	<div class="shell">
		<SectionHeader
			number="02 / Work"
			title="Selected work"
			intro="A robot in daily public service, a controller that has to fail safely, and seven years of contest infrastructure."
		/>

		<div class="mt-14 space-y-8 lg:space-y-10">
			{#each projects as project, i (project.title)}
				<ProjectCard {project} index={i} />
			{/each}
		</div>

		<!-- Smaller builds -->
		<div class="mt-16 grid gap-6 md:grid-cols-[7rem_1fr] md:gap-8" use:reveal>
			<div class="label text-faint md:pt-2">Also</div>
			<div>
				<h3 class="text-title mb-6 font-semibold">On the bench</h3>
				<ul class="grid gap-4 sm:grid-cols-2">
					{#each smallerBuilds as build (build.text)}
						<li
							class="border-line hover:border-brand-300 group rounded-card border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(4,69,30,0.35)]"
						>
							<span
								class="text-brand-700 group-hover:text-brand-500 mb-2 block font-mono text-xs uppercase tracking-wider transition-colors duration-300"
							>
								{build.domain}
							</span>
							<span class="text-muted text-sm leading-snug">{build.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
