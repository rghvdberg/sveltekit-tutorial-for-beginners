<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
  const handleClick = () => {
    console.log("Placing your order");
    goto("/products", { replaceState: true });
  };

  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });
</script>

<h1>Welcome Home!</h1>
<a href="/blog">Blog</a><br />
<a href="/products">Products</a><br />
<button on:click={handleClick}>Place Order</button>
