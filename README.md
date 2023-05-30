# [SvelteKit Tutorial for Beginners](https://youtube.com/playlist?list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua)

- [x] [01 - Introduction](https://youtu.be/UOMLvxfrTCA)
- [x] [02 - Hello World](<https://youtu.be/Hyss()09pgYzVrhc>)
  - create project `npm create svelte@latest hello-world`
  - `cd` into `./hello-world/`
  - run `npm install`
  - start development server: `npm run dev -- --open`
  - edit `./src/routes/+page.svelte`
- [x] [03 - Project Structure](https://youtu.be/iqm7Sv9VykI)
- [x] [04 - Routing](https://youtu.be/IFZM2CGQ4cU)
  - create dir in `/src/routes/` to create route
    - `src/routes/about/` creates route to <http://localhost:5173/about>
    - add `+page.svelte` for the routes content
- [x] [05 - Nested Routes](https://youtu.be/1UiDq3RAD8c)
  - create nested dirs (with `+page.svelte`) to create nested routes
    - `src/blog/` => <http://localhost:5173/blog>
    - `src/blog/first/` => <http://localhost:5173/blog/first>
- [x] [06 - Dynamic Routes](https://youtu.be/2ZvSj5kktjA)
  - dynamic route folders are in square brackets
    - `[productId]`
  - import `page` module from `$app/stores` to get the page data.
- [x] [07 - Nested Dynamic Routes](https://youtu.be/Vo4ZML4JOUI)
  - put dynamic route in dynamic route folder ¯\\\_(ツ)\_/¯
- [x] [08 - Catch All Routes](https://youtu.be/hREagSs5UI0)
  - `[...slug]`
  - `slugArr = $page.params.slug.split("/");`
- [x] [09 - Optional Parameters](https://youtu.be/cgsT_WCLWEo)
  - `[[lang]]`
    - `const { lang = "en" } = $page.params` makes `en` default
- [x] [10 - Route Navigation](https://youtu.be/6GImQ9i6hRc)
  - plain ol' `<a>` tags (\* ^ ω ^)
- [x] [11 - Navigating Programmatically](https://youtu.be/GjAViOJeaEo)
  - use `goto` from `$app/navigation`
- [x] [12 - Route Matchers](https://youtu.be/TNF2umSjulw)
  - add `src/params/integer.js`
    - <https://kit.svelte.dev/docs/advanced-routing#matchin>
      > Each module in the params directory corresponds to a matcher, with the
      > exception of `_.test.js` and `_.spec.js` files which may be used to
      > unit test your matchers.
  - change `[productId]` to `[productId=integer]`
- [x] [13 - Route Layout](https://youtu.be/C_ZUTipbXkgV)
  - <https://kit.svelte.dev/docs/routing#layout>
  - > To create a layout that applies to every page, make a file called
    > `src/routes/+layout.svelte`.
  - `+page.svelte` files are rendered in the `<slot/>` of the layout page.
  - Layouts can be nested.
  - By default, each layout inherits the layout above it.
- [x] [14 - Layout Groups](https://youtu.be/GMxnG82JHlE)
  - <https://kit.svelte.dev/docs/advanced-routing#advanced-layouts-group>
  - We can group routes with a directory whose name is wrapped in
    parentheses — these do not affect the URL pathname of the routes inside them.
- [x] [15 - Breaking Out of Layouts](https://youtu.be/QoT_OxlFHUw)
  - <https://kit.svelte.dev/docs/advanced-routingadvanced-layouts-breaking-out-of-layouts>
  - We can reset to a layouts by appending @ followed by the segment name.
  - `(auth)/passwords/forgot/+page#@(auth).svelte` uses layout from (auth) group
- [x] [16 - Other Files](https://youtu.be/6CawFc-OvV4)
  - <https://kit.svelte.dev/docs/routing#other-files>
  - > Any other files inside a route directory are ignored by SvelteKit. This
    > means you can colocate components and utility modules with the routes that
    > need them.
    >
    > If components and modules are needed by multiple routes, it's a good idea
    > to put them in `$lib`.
- [x] [17 - API Routes](https://youtu.be/eW8uTGspyV8)
  - export `GET` function in `+server.js`
- [x] [18 - API Get Request](https://youtu.be/U375cmoSIDU)

  - SvelteKit provides a convenience json function.

  ```javascript
  import { json } from "@sveltejs/kit";
  export function GET() {
    return json(myObject);
  }
  ```

- [ ] [19 - API Post Request](https://youtu.be/3R4rSyMCiC0)
- [ ] [20 - Dynamic API Routes](https://youtu.be/Q5b_Gy90G4c)
- [ ] [21 - API Patch Request](https://youtu.be/S08Fvb0Iv1w)
- [ ] [22 - API Delete Request](https://youtu.be/SxcfP0V-LxM)
- [ ] [23 - Loading Data](https://youtu.be/qHqQpHC0xVY)
- [ ] [24 - Page Data](https://youtu.be/iBctrIOg-Jw)
- [ ] [25 - fetch Function](https://youtu.be/1w2d5HsqwS8)
- [ ] [26 - Universal Load Function](https://youtu.be/oQL3stj6_H0)
- [ ] [27 - Server Load Function](https://youtu.be/mmhUlbvkp-0)
- [ ] [28 - Universal vs Server Load Function](https://youtu.be/jQXeLhR6Qe8)
- [ ] [29 - Using URL data](https://youtu.be/qMJ8JEZ2A4c)
- [ ] [30 - Errors and Redirects](https://youtu.be/rf3hHNkoLRk)
- [ ] [31 - Layout Data](https://youtu.be/OBRbAXPpNIg)
- [ ] [32 - Using Parent Data](https://youtu.be/N3qa9nSS96s)
- [ ] [33 - Using Child Data](https://youtu.be/VICP7KihiNs)
- [ ] [34 - Promise Unwrapping](https://youtu.be/btg0_D9TMos)
- [ ] [35 - Data Invalidation](https://youtu.be/zydO6wkqXRU)
- [ ] [36 - Link Options](https://youtu.be/Jj2EzWzEUk4)
- [ ] [37 - Preload Data](https://youtu.be/W5Uo8-zaCeY)
- [ ] [38 - Preload Code](https://youtu.be/iatqe8JLbuA)
- [ ] [39 - Reload and No Scroll](https://youtu.be/xyFSbu3hM1g)
- [ ] [40 - Preload Programmatically](https://youtu.be/Wte7GTEryZM)
- [ ] [41 - Page Options](https://youtu.be/zv4zxqcpe0I)
- [ ] [42 - SSR and CSR](https://youtu.be/CwneYTVt_UY)
- [ ] [43 - Pre-rendering Pages](https://youtu.be/FEwUOn_MCL4)
- [ ] [44 - Pre-rendering API Routes](https://youtu.be/nm0arhFBz9Y)
- [ ] [45 - Pre-rendering Dynamic Routes](https://youtu.be/BCqlAbxFlHc)
- [ ] [46 - Pre-rendering and SSR](https://youtu.be/JkBTI_6cAMI)
- [ ] [47 - Form Actions](https://youtu.be/Ygazrvdm3ec)
- [ ] [48 - Default Form Actions](https://youtu.be/kN6n2wsQA9U)
- [ ] [49 - Named Form Actions](https://youtu.be/ZXWGRzg5IWE)
- [ ] [50 - Form Action Validation](https://youtu.be/NeUWRIbonrY)
- [ ] [51 - Form Action Redirects](https://youtu.be/QfwNNKq6-bw)
- [ ] [52 - Progressive Enhancement](https://youtu.be/sYOppTihzgA)
- [ ] [53 - Snapshots](https://youtu.be/knjWr4bTyA8)
- [ ] [54 - Environment Variables](https://youtu.be/rab8jW1iJOs)
- [ ] [55 - Server-only Modules](https://youtu.be/hb5LPU5DMlA)
- [ ] [56 - Deploying SvelteKit Application](https://youtu.be/dxFDUpPjfRc)
