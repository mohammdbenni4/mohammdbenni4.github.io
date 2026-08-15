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
			intro="Five projects that between them cover the whole range — a robot in daily public service, a controller that has to fail safely, and a product I designed, built, and shipped end to end."
		/>

		<div class="mt-14">
			{#each projects as project, i (project.title)}
				<ProjectCard {project} index={i} />
			{/each}
		</div>

		<!-- Smaller builds -->
		<div class="border-line grid gap-6 border-t pt-10 md:grid-cols-[7rem_1fr] md:gap-8" use:reveal>
			<div class="label text-faint md:pt-2">Also</div>
			<div>
				<h3 class="text-title mb-6 font-semibold">On the bench</h3>
				<ul class="grid gap-px sm:grid-cols-2">
					{#each smallerBuilds as build (build.text)}
						<li class="border-line flex gap-4 border-t py-4">
							<span class="text-brand-700 w-20 shrink-0 font-mono text-xs uppercase tracking-wider">
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
