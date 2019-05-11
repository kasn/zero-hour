<script>
  import range from "lodash/range";
  import configuration from "./configurations.js";

  const numbers = range(1, 13);

  const emptySelection = {
    console1: [null, null],
    console2: [null, null]
  };

  let selection = emptySelection;

  function filterOptions(selection) {
    let possibleOptions = configuration;

    if (selection.console1[0] !== null) {
      possibleOptions = possibleOptions.filter(light => {
        return light[`console1`][0] === selection.console1[0];
      });
    }

    if (selection.console1[1] !== null) {
      possibleOptions = possibleOptions.filter(light => {
        return light[`console1`][1] === selection.console1[1];
      });
    }

    if (selection.console2[0] !== null) {
      possibleOptions = possibleOptions.filter(light => {
        return light[`console2`][0] === selection.console2[0];
      });
    }

    if (selection.console2[1] !== null) {
      possibleOptions = possibleOptions.filter(light => {
        return light[`console2`][1] === selection.console2[1];
      });
    }

    return possibleOptions;
  }

  $: possibleOptions = filterOptions(selection);

  function consoleClick(consoleNum, consoleRow, num) {
    selection[consoleNum][consoleRow] = num;
  }

  function reset() {
    selection = {
      console1: [null, null],
      console2: [null, null]
    };
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
    <button class:selected={selection[`console1`][0] === num} on:click={() => consoleClick('console1', 0, num)}>{num}</button>
  {/each}
  <hr />
  {#each numbers as num}
    <button class:selected={selection[`console1`][1] === num} on:click={() => consoleClick('console1', 1, num)}>{num}</button>
  {/each}
  <h2>console 2</h2>
  {#each numbers as num}
    <button class:selected={selection[`console2`][0] === num} on:click={() => consoleClick('console2', 0, num)}>{num}</button>
  {/each}
  <hr />
  {#each numbers as num}
    <button class:selected={selection[`console2`][1] === num} on:click={() => consoleClick('console2', 1, num)}>{num}</button>
  {/each}

  {#each possibleOptions as option}
    <h1> {option.node.color} {option.node.number} </h1>
  {/each}
</div>
