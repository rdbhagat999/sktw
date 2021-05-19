<script lang="ts">
	import type { Property } from '$lib/data/index';
	export let popularProperties: Property[] = [];

	const activeClass = 'h-4 w-4 text-yellow-400';
	const defaultClass = 'h-4 w-4 text-gray-400';

</script>

{#each popularProperties as property (property?.imageUrl)}
	<div class="text-left my-4">
		<div class="relative rounded-xl overflow-hidden shadow-lg bg-gray-500 pb-72 sm:pb-80 lg:pb-96">
			<img
				loading="lazy"
				class="w-full h-full object-cover absolute inset-0"
				src={property?.imageUrl}
				alt={property?.imageAlt}
			/>
		</div>

		<div class="relative px-2 -mt-16">
			<div class="rounded-xl p-4 shadow-xl bg-white">
				<div class="flex items-baseline">
					<div class="text-xs text-gray-500 uppercase font-semibold tracking-wider">
						{property?.beds} beds &bull; {property?.baths} baths
					</div>
					<span
						class="inline-block ml-2 text-green-700 text-xs rounded-full bg-green-200 px-2 uppercase tracking-wide font-semibold"
						>New
					</span>
				</div>
				<h4
					class="mt-1 text-2xl capitalize tracking-wide truncate leading-tight font-semibold text-blue-500"
				>
					{property?.title}
				</h4>

				<div class="mt-1 text-gray-500 tracking-wider">
					<span class="font-semibold">{property?.formattedPrice}</span>
					<span class="text-xs tracking-wider">/month</span>
				</div>
				<div class="mt-4 flex items-center">
					{#each [1, 2, 3, 4, 5] as star, i (star)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class={i < property?.rating ? activeClass : defaultClass}
							viewBox="0 0 20 20"
							fill="currentColor"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
					{/each}
					<span class="ml-2 text-gray-500 text-xs tracking-wider">
						{property?.reviewCount} reviews
					</span>
				</div>
			</div>
		</div>
	</div>
{/each}
