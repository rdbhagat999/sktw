<script lang="ts">
	import appCSS from '../app.css';
	import NavbarComponent from '$lib/components/NavbarComponent.svelte';

</script>

<svelte:head>
	<title>Tailwind</title>
</svelte:head>

<NavbarComponent />

<slot />
