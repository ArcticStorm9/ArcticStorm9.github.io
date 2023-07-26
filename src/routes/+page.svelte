<script lang="ts">
  import { base } from "$app/paths";
  import NavigationDirectory from "$lib/components/shared/NavigationDirectory.svelte";

  const paths = [
    ["Wedding Information", "/wedding"],
    ["D&D Resources", "/dnd"],
    ["Calorie Tracker", "/calorie-tracker"]
  ];
</script>

<svelte:head>
  <title>Home Directory</title>
</svelte:head>
<NavigationDirectory {base} {paths} />
