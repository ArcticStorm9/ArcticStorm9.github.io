<script lang="ts">
  import InfoPage from "../../../lib/components/shared/InfoPage.svelte";

  const columns = ["Name", "Stats", "Ability"];

  const races = [
    [
      "Altmer (High Elf)",
      "+2 INT, +1 CHA",
      "Highborn: Use a bonus action to regain one spell slot of your choice, up to level 5. This may only be used once per long rest.",
    ],
    [
      "Argonian",
      "+2 WIS, +1 STR",
      "Histborn: Immune to all poison damage. Claws: Unarmed attacks deal an additional 1d4 slashing damage.",
    ],
    [
      "Bosmer (Wood Elf)",
      "+2 DEX, +1 WIS",
      "Ritual Consumption: Consume a human or elven corpse to gain an additional +1 to dexterity, stacking up to 3 times. Stacks are lost after 12 hours.",
    ],
    [
      "Bretons",
      "+2 INT, +1 WIS",
      "Instinctive Spellcraft: Learn one additional cantrip from the Sorcerer spell list",
    ],
    [
      "Dunmer (Dark Elf)",
      "+2 CHA, +1 DEX",
      "Ashen Skin: All fire damage taken is halved.",
    ],
    [
      "Imperial",
      "Choose any 3",
      "Diplomatic: Calm an enemy. Enemy humanoid must succeed on a DC 12 + CHA modifier or be charmed. Enemy must understand a language you speak. This may only be used once per long rest.",
    ],
    [
      "Khajiit",
      "+2 DEX, +1 STR",
      "Razor Claws: Unarmed attacks deal an additional 1d8 slashing damage.",
    ],
    [
      "Nord",
      "+2 CON, +1 STR",
      "Unrelenting Force: Perform a shout, all enemies must succeed on a DC 12 + CON modifier DEX saving throw or be staggered for one round. This may only be used once per long rest.",
    ],
    [
      "Orsimer (Orc)",
      "+2 STR +1 CON",
      "Berserk: For 30 seconds, all damage taken is halved, and successful attacks with a weapon deal an additional 1d8 bludgeoning damage. This may only be used once per long rest.",
    ],
    [
      "Redguard",
      "+2 STR, +1 DEX",
      "Blade Worship: All successful attacks with a slashing weapon deal an additional 1d4 slashing damage.",
    ],
  ];
</script>

<svelte:head>
  <title>Playable Races</title>
</svelte:head>
<InfoPage
  title="Playable Races"
  description={`All playable races for the "Ultimate Skyrim" campaign.`}
>
  <table>
    <tr class="text-left font-semibold grid md:grid-cols-[1fr_1fr_3fr]">
      {#each columns as columnName}
        <th class="p-2">{columnName}</th>
      {/each}
    </tr>
    {#each races as race}
      <tr
        class="rounded grid md:grid-cols-[1fr_1fr_3fr] even:bg-slate-100 even:dark:bg-slate-800"
      >
        {#each race as field}
          <td class="p-2">{field}</td>
        {/each}
      </tr>
    {/each}
  </table>
</InfoPage>
