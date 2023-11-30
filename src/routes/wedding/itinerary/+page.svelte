<script lang="ts">
  import InfoPage from "$lib/components/shared/InfoPage.svelte";

  const itinerary = [
    ["Sat, March 9", "Depart USA"],
    ["Sun, March 10", "Arrive in Tokyo (afternoon), Dinner in Shinjuku"],
    ["Mon, March 11", "Kamakura (all day)"],
    ["Tue, March 12", "Asakusa (morning/early afternoon), Tokyo Sky Tree (afternoon), Akihabara (evening)"],
    ["Wed, March 13", "Tokyo DisneySea (all day)"],
    ["Thu, March 14", "Meiji-Jingu, Harajuku, and Shibuya (Tokyo Disneyland<sup class='text-red-500'>*</sup>)"],
    ["Fri, March 15", "Odaiba (early afternoon), Bachelor party (invite only)"],
    ["Sat, March 16", "Wedding in Nagoya at 4pm (tentative) with reception party at 6pm (tentative)"],
    ["Sun, March 17", "Go home (departing from Tokyo)"],
  ];
</script>

<svelte:head>
  <title>Itinerary - Wedding Trip</title>
</svelte:head>
<InfoPage
  title="Wedding Trip Itinerary"
  description={
    `The following is a list of all activities I plan on doing. This list is malleable and will likely change.<br>
    You are <b class="text-blue-500">highly encouraged</b> to split off and find your own activities.<br>
    Bear in mind that the Japanese school break is during our trip, so some places may be extremely crowded.<br>
    Please <a href="mailto:irshakes11@gmail.com" class="underline">email me</a>
    for more information regarding my plans.`
  }
>
  <table>
    <tr class="text-left font-semibold">
      <th class="p-2">Date</th>
      <th class="p-2">Event</th>
    </tr>
    {#each itinerary as [date, event]}
      <tr class="rounded even:bg-slate-100 even:dark:bg-slate-800">
        <td class="p-2">{date}</td>
        <td class="p-2">{@html event}</td>
      </tr>
    {/each}
  </table>
  <p class="py-4">
    <sup class='text-red-500'>*</sup>Some members of our group plan on visiting
    Tokyo Disneyland (yes it is separate from DisneySea). I will not personally
    be participating, but you are more than welcome to join the other members of
    the group who will be.
  </p>
</InfoPage>
