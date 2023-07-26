<script lang="ts">
  import InfoPage from "../../lib/components/shared/InfoPage.svelte";

  const CALORIE_LOOKUP = {
    EGG: 120,
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
    SHREDDED_CHEESE: 110,
    RICE: 200,
  };
  
  let itemCount = new Map(Object.keys(CALORIE_LOOKUP).map((name) => [name, 0]))
  $: total = Array.from(itemCount.entries()).reduce((acc, [key, value]) => acc + (value * CALORIE_LOOKUP[key]), 0);
</script>

<svelte:head>
  <title>Calorie Calculator</title>
</svelte:head>

<InfoPage title="Calorie Calculator" description="Calorie calculator for common foods.">
  <div class="flex justify-between">
    Total Calories: {total}
    <button
      on:click={() => itemCount = new Map(Object.keys(CALORIE_LOOKUP).map((name) => [name, 0]))}
      class="underline"
    >
      Clear
    </button>
  </div>
  <table>
    <thead>
      <tr>
        {#each ["Name", "Calories", "Quantity"] as label}
          <td class="px-2 py-3 text-lg last:text-right">{label}</td>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Object.entries(CALORIE_LOOKUP) as [key, value]}
        <tr data-active={itemCount.get(key) > 0} class="group odd:bg-slate-100 dark:odd:bg-slate-800">
        {#each [key.replaceAll("_", " ").toLowerCase(), value, ] as data}
          <td class="px-2 py-3 capitalize underline-offset-2 first:group-data-[active=true]:underline">{data}</td>
        {/each}
          <td class="px-2 text-right">
            <button
              on:click={() => {
                itemCount.set(key, Math.max(0, itemCount.get(key) - 1));
                itemCount = itemCount;
              }}
              class="w-6 bg-slate-200 rounded dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            >
              -
            </button>
            <span class="mx-2">
              {itemCount.get(key)}
            </span>
            <button
              on:click={() => {
                itemCount.set(key, itemCount.get(key) + 1);
                itemCount = itemCount;
              }}
              class="w-6 bg-slate-200 rounded dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            >
              +
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</InfoPage>
