<script lang="ts">
	import { popularProperties } from '$lib/data/index';
	import CardComponent from '$lib/components/CardComponent.svelte';

</script>

<div class="bg-gray-100 min-h-screen p-8 text-center">
	<CardComponent {popularProperties} />
</div>
