<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<section class="grid gap-2">
  <h1 class="text-3xl font-semibold text-center">{title}</h1>
  <p class="text-center">{description}</p>
  <slot />
</section>
