<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<a
	href="#main"
	class="focus:bg-brand-700 sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
>
	Skip to content
</a>

{@render children()}
