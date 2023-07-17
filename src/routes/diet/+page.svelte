<script lang="ts">
  import InfoPage from "../../lib/components/shared/InfoPage.svelte";

 const foods = {
  EGGS: 250,
  BEEF: 70,
  CHICKEN: 70,
  CHEERIOS: 140,
  OATMEAL: 160,
  TORTILLA: 450,
  CHIPS: 75,
  NUTS: 800,
  YOGURT: 150,
  MUFFIN: 400,
  BREAD: 80,
  HONEY: 60,
  PROTEIN_BAR: 300,
  PROTEIN_POWDER: 120,
  SHREDDED_CHEESE: 450,
  RICE: 200,
};
</script>

<svelte:head>
  <title>Diet Calculator</title>
</svelte:head>

<InfoPage title="Diet Calculator" description="Calorie calculator for common foods.">
  <table>
    <tr class="text-left font-semibold">
      <th class="p-2">Date</th>
      <th class="p-2">Event</th>
    </tr>
    {#each [] as [date, event]}
      <tr class="rounded even:bg-slate-100 even:dark:bg-slate-800">
        <td class="p-2">{date}</td>
        <td class="p-2">{event}</td>
      </tr>
    {/each}
  </table>
</InfoPage>
