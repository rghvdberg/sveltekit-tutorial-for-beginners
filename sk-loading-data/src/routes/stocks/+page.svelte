<script>
  // import { invalidate } from "$app/navigation";
  import { invalidateAll } from "$app/navigation";
  export let data;

  function refresh() {
    // invalidate("stocks:actively-trading");
    invalidateAll("stocks:actively-trading");
  }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
  <h2>{stock.symbol} - ${stock.price}</h2>
{/each}

<button on:click={refresh}>Refresh</button>
