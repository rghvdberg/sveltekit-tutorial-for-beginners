<script>
  import { goto, preloadData } from "$app/navigation";
</script>

<h1 class="tall">Welcome to SvelteKit</h1>
<a href="/products">Products</a>
<button
  on:focus={async () => {
    await preloadData("/products");
  }}
  on:mouseover={async () => {
    await preloadData("/products");
  }}
  on:click={() => goto("/products")}
>
  Go to Products
</button>

<style>
  /*
  .tall { height: 100vh; }
   */
</style>
