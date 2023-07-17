<script lang="ts">
  import InfoPage from "../../lib/components/shared/InfoPage.svelte";

  const itinerary = [
    ["Sun, March 10", "Arrive in Tokyo"],
    ["Mon, March 11", "Ian busy until the evening"],
    ["Tue, March 12", "Asakusa, Tokyo Sky Tree"],
    ["Wed, March 13", "Tokyo DisneySea"],
    ["Thu, March 14", "Free day (optional: Tokyo Disneyland)"],
    ["Fri, March 15", "Meiji-Jingu, Harajuku, Shibuya"],
    ["Sat, March 16", "Wedding in Nagoya at 4pm (tentative) with reception party at 6pm (tentative)"],
    ["Sun, March 17", "Go home (departing from Tokyo)"],
  ];
</script>

<svelte:head>
  <title>Wedding Trip Itinerary</title>
</svelte:head>
<InfoPage
  title="Wedding Trip Itinerary"
  description="The following is a list of all activities we plan on doing. Guests are welcome to split off and find their own activities."
>
  <p class="text-center">Group accommodations will be in Shinjuku. <a href="mailto:irshakes11@gmail.com" class="underline">Email me</a> for more information regarding the rental.</p>
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
</InfoPage>
