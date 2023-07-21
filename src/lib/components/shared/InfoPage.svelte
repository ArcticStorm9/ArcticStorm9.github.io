<script lang="ts">
  export let title: string;
  export let description: string | undefined;
</script>

<section class="grid gap-2">
  <h1 class="text-3xl font-semibold text-center">{title}</h1>
  {#if description}
    <p class="text-center">{@html description}</p>
  {/if}
</section>
<hr class="my-4 border-slate-200 dark:border-slate-700" />
<slot />
