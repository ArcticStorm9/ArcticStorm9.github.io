<script lang="ts">
  export let base: string;
  export let paths: string[][];
</script>

<div class="grid gap-2 md:grid-cols-2">
  {#each paths as [label, path]}
    <a
      href={base + path}
      class="px-4 py-8 border-slate-200 border bg-slate-100 font-semibold dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-200 hover:border-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-600"
      >{label}</a
    >
  {/each}
</div>
