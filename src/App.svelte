<script>
  import range from "lodash/range";
  import configurations from "./configurations.js";
  import Gh from "./Components/Gh.svelte";
  import Arc from "./Components/Elements/Arc.svelte";
  import Solar from "./Components/Elements/Solar.svelte";
  import Void from "./Components/Elements/Void.svelte";
  import Siva from "./Components/Siva.svelte";

  const numbers = range(1, 13);

  const emptySelection = {
    console1: [null, null],
    console2: [null, null]
  };

  let selection = emptySelection;
  $: activeConfiguration = "arc"; // @TODO get week an preselect

  function setActiveConfiguration(element) {
    activeConfiguration = element;
    possibleOptions = [];
    reset();
  }

  function filterOptions(selection) {
    let possibleOptions = configurations[activeConfiguration].configuration;

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

  console.log(selection);
</script>

<style>
  h1 {
    color: red;
  }

  h1 button {
    font-size: 12px;
  }

  button {
    background-color: black;
    color: red;
    border: 0;
  }

  button.reset {
    font-size: 30px;
  }

  .console button {
    width: 24%;
    font-size: 25px;
    color: red;
    background-color: black;
    border: 2px solid red;
    margin: 1px;
  }

  .console button.selected {
    background-color: red;
    color: white;
  }

  div.wrapper {
    display: flex;
  }

  div.wrapper div.side {
    margin: 5px;
    width: 50%;
  }
</style>

<Gh />

<h1>
  <button on:click={() => setActiveConfiguration('void')}>
    <Void />
  </button>
  <button on:click={() => setActiveConfiguration('arc')}>
    <Arc />
  </button>
  <button on:click={() => setActiveConfiguration('solr')}>
    <Solar />
  </button>
  <button class="reset" on:click={reset}>reset</button>
</h1>
<h1>{configurations[activeConfiguration].name}</h1>
<div class="console">
  <h2>console 1</h2>
  <div class="wrapper">
    <div class="side">
      {#each numbers as num}
        <button
          class:selected={selection[`console1`][0] === num}
          on:click={() => consoleClick('console1', 0, num)}>
           {num}
        </button>
      {/each}
    </div>
    <div class="side">
      {#each numbers as num}
        <button
          class:selected={selection[`console1`][1] === num}
          on:click={() => consoleClick('console1', 1, num)}>
           {num}
        </button>
      {/each}
    </div>
  </div>
  <h2>console 2</h2>
  <div class="wrapper">
    <div class="side">
      {#each numbers as num}
        <button
          class:selected={selection[`console2`][0] === num}
          on:click={() => consoleClick('console2', 0, num)}>
           {num}
        </button>
      {/each}
    </div>
    <div class="side">
      {#each numbers as num}
        <button
          class:selected={selection[`console2`][1] === num}
          on:click={() => consoleClick('console2', 1, num)}>
           {num}
        </button>
      {/each}
    </div>
  </div>
  {#each possibleOptions as option}
    <h1> {option.node.color} {option.node.number} </h1>
  {/each}
</div>
