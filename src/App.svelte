<script>
  import range from "lodash/range";
  import lights from "./configurations.js";

  const numbers = range(1, 13);

  let res = null;

  const emptySelection = {
    c1: [null, null],
    c2: [null, null]
  };

  let selection = emptySelection;

  let possibleOptions = [];

  function consoleClick(consoleNum, consoleRow, num) {
    selection[`c${consoleNum}`][consoleRow] = num;

    if (selection.c1[0] !== null) {
      possibleOptions = lights.filter(light => {
        return light[`console1`][0] === selection.c1[0];
      });
    }

    if (selection.c1[1] !== null) {
      possibleOptions = lights.filter(light => {
        return light[`console1`][1] === selection.c1[1];
      });
    }

    if (selection.c2[0] !== null) {
      possibleOptions = lights.filter(light => {
        return light[`console2`][0] === selection.c2[0];
      });
    }

    if (selection.c2[1] !== null) {
      possibleOptions = lights.filter(light => {
        return light[`console2`][1] === selection.c2[1];
      });
    }
  }

  function reset() {
    selection = emptySelection;
    possibleOptions = [];
  }
</script>

<style>
  h1 {
    color: purple;
  }

  h1 button {
    font-size: 12px;
  }

  .console button {
    width: 16%;
    font-size: 20px;
  }

  .console button.selected {
    background-color: red;
    color: white;
  }
</style>

<h1>
  Zero Hour
  <button on:click={reset}>reset</button>
</h1>
<div class="console">
  <h2>console 1</h2>
  {#each numbers as num}
    <button class:selected={selection[`c1`][0] === { num }} on:click={() => consoleClick(1, 0, num)}>{num}</button>
  {/each}
  <hr />
  {#each numbers as num}
    <button class:selected={selection[`c1`][1] === { num }} on:click={() => consoleClick(1, 1, num)}>{num}</button>
  {/each}
  <h2>console 2</h2>
  {#each numbers as num}
    <button class:selected={selection[`c2`][0] === { num }} on:click={() => consoleClick(2, 0, num)}>{num}</button>
  {/each}
  <hr />
  {#each numbers as num}
    <button class:selected={selection[`c2`][1] === { num }} on:click={() => consoleClick(2, 1, num)}>{num}</button>
  {/each}

  {#each possibleOptions as option}
    <h1> {option.node.color} {option.node.number} </h1>
  {/each}
</div>
