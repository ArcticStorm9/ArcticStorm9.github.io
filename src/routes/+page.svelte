<script lang="ts">
  const itinerary = [
    ["Sun, March 10", "Arrive in Tokyo"],
    ["Mon, March 11", "Ian busy until the evening"],
    ["Tue, March 12", "Asakusa, Tokyo Sky Tree"],
    ["Wed, March 13", "Tokyo DisneySea"],
    ["Thu, March 14", "Free day (optional: Tokyo Disneyland)"],
    ["Fri, March 15", "Meiji-Jingu, Harajuku, Shibuya"],
    ["Sat, March 16", "Travel to, and have Wedding in Nagoya"],
    ["Sun, March 17", "Go home (departing from Tokyo)"],
  ];
</script>

<svelte:head>
  <title>Wedding Trip Itinerary</title>
</svelte:head>
<section class="grid gap-2">
  <h1 class="text-3xl font-semibold text-center">Wedding Trip Itinerary</h1>
  <p class="text-center">
    The following is a list of all activities we plan on doing. Guests are
    welcome to split off and find their own activities.
  </p>
  <table>
    <tr class="text-left font-semibold">
      <th class="p-2">Date</th>
      <th class="p-2">Event</th>
    </tr>
    {#each itinerary as [date, event]}
      <tr class="rounded even:bg-slate-100 even:dark:bg-slate-800">
        <td class="p-2">{date}</td>
        <td class="p-2">{event}</td>
      </tr>
    {/each}
  </table>
</section>
