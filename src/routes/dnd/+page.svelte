<script lang="ts">
  import { base } from "$app/paths";
  import NavigationDirectory from "../../lib/components/shared/NavigationDirectory.svelte";

  const paths = [["Playable Races", "/races"]];
</script>

<svelte:head>
  <title>D&D Directory</title>
</svelte:head>
<NavigationDirectory base={base + "/dnd"} {paths} />
