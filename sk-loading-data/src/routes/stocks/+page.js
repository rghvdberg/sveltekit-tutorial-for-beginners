export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const mostActiveStockRepsonse = await fetch(
    "http://localhost:4000/most-active-stock"
  );
  const topGainingStockRepsonse = await fetch(
    "http://localhost:4000/top-gaining-stock"
  );
  const topLosingStockRepsonse = await fetch(
    "http://localhost:4000/top-losing-stock"
  );
  // const mostActiveStock = await mostActiveStockRepsonse.json();
  // const topGainingStock = await topGainingStockRepsonse.json();
  // const topLosingStock = await topLosingStockRepsonse.json();
  return {
    mostActiveStock: mostActiveStockRepsonse.json(),
    topGainingStock: topGainingStockRepsonse.json(),
    topLosingStock: topLosingStockRepsonse.json(),
    /* SvelteKit will only resolve top level promises
     * ↓ WON'T WORK AS EXPECTED ↓
     * anotherStock: {
     *  nestedStock: nestedStockRepsonse.json(),
     * }
     */
  };
};
