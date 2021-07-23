<script>
  import { onMount } from "svelte";
  import { QlikComponent } from "./function/qlik";
  import "../../public/resources/main/main.f6bf74c0.js";

  import { render } from "../../../svelte-snowpack-nebula/build/_dist_/index";

  let nebula;
  let fields = ["Year", "=avg(Weight)"];
  let element;

  onMount(async () => {
    let qlikInstance = new QlikComponent();
    nebula = await qlikInstance.chart();

    render(element, { nebula: nebula, fields: fields });
  });
</script>

<main>
  <div id="test">Testsss</div>
  {#if nebula}
    <nebula-barchart {nebula} {fields} />
  {/if}
  <div bind:this={element} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
