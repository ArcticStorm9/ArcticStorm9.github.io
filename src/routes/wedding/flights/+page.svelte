<script lang="ts">
  import InfoPage from "$lib/components/shared/InfoPage.svelte";

  const copyData = [
    [
      "Book well in advance",
      "Flights to Japan are usually at their cheapest 5-6 months prior to departure.",
    ],
    [
      "Track prices",
      `It's a good idea to check every couple of days to see if prices have
      dropped. Alternatively, you can track prices using
      <a href="https://flights.google.com" class="underline">Google Flights</a>.
      They will send you an email any time the price fluctuates, up or down.`,
    ],
    [
      "Book with an aggregator",
      `This should be no shock to anyone. Online search engines are nearly always
      cheaper than buying directly from the carrier. My recommendation is the
      aforementioned <a href="https://flights.google.com" class="underline">Google
      Flights</a>, though I hear good things about Priceline and Expedia.`,
    ],
    [
      "Fly to Narita",
      `Far and away Japan's cheapest arrival airport is Narita International
      Airport (NRT). It is located just east of Tokyo, so you will need to
      take a train or bus into Tokyo proper. Even including the cost of
      additional transportation it is still cheaper than (the more downtown) Haneda
      International Airport (HND). Both are viable options, but you will
      save around $200 going to Narita.`,
    ],
  ];
</script>

<svelte:head>
  <title>Flights - Wedding Trip</title>
</svelte:head>
<InfoPage
  title="Flight Information"
  description={
    `You are responsible for finding your own way to Japan. However, you are
    welcome to fly with us.<br>We will be flying on <b>ZIPAIR - ZG 23 on March 9th</b> from
    Los Angeles (LAX) to Narita (NRT).`
  }
>
  <section class="grid gap-4">
    <h2 class="text-2xl font-semibold leading-none">General Booking Tips</h2>
    <p>
      I've flown to and from Japan a couple of times, while I'm no expert, I've
      learned a couple of tricks for booking.
    </p>
    <ol>
      {#each copyData as [title, description], i}
        <li class="grid gap-2 px-2 py-4 rounded odd:bg-slate-100 odd:dark:bg-slate-800">
          <h3 class="text-lg font-semibold capitalize">
            <span class="text-blue-500">{i + 1}.</span> {title}
          </h3>
          <p>{@html description}</p>
        </li>
      {/each}
    </ol>
  </section>
</InfoPage>
