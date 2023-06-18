// import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
export const load = async (serverLoadEvent) => {
  const { fetch, params, url, route } = serverLoadEvent;
  console.log({ params, url, route: route.id });
  const { productId } = params;
  if (productId > 3) {
    // throw error(404, {
    //   message: "🙁 Oh no! Looks like product isn't available!",
    //   hint: "Please try another product.",
    // });
    throw redirect(307, "/products");
  }
  const title = "Product details";
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();
  return {
    title,
    product,
  };
};
