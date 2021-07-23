<svelte:options tag="nebula-barchart" immutable />

<script>
  import { onMount, tick } from "svelte";
  import "../global.css";

  export let nebula;
  export let fields;
  $: console.log({ nebula, fields });
  let elementBar;

  onMount(async () => {
    await tick();
    await nebula?.render({
      element: elementBar,
      type: "bar",
      fields: fields,
    });
  });
</script>

<div class="container">
  <div class="object" bind:this={elementBar} />
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .container {
    width: 100%;
    height: 600px;
  }

  .object {
    width: 100%;
    height: 600px;
    display: flex;
    margin-top: 30px;
  }
</style>
