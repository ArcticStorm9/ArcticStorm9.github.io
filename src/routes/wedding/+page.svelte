<script lang="ts">
  import { base } from "$app/paths";
  import NavigationDirectory from "$lib/components/shared/NavigationDirectory.svelte";

  const paths = [
    ["Itinerary", "/itinerary"],
    ["Flights", "/flights"],
  ];
</script>

<svelte:head>
  <title>Wedding Directory</title>
</svelte:head>
<NavigationDirectory base={`${base}/wedding`} {paths} />
