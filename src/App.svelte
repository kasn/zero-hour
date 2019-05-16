<script>
  import range from "lodash/range";
  import configurations from "./configurations.js";
  import Gh from "./Components/Gh.svelte";
  import Arc from "./Components/Elements/Arc.svelte";
  import Solar from "./Components/Elements/Solar.svelte";
  import Void from "./Components/Elements/Void.svelte";
  import Siva from "./Components/Siva.svelte";
  import { arc } from "d3-shape";

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

  const arcGenerator = arc();
  let angle = Math.PI * 2;

  function getArcOptions(num) {
    const start = ((num - 1) * angle * 1) / 12;

    const arcOptions = {
      innerRadius: 20,
      outerRadius: 40,
      startAngle: start,
      endAngle: start + (angle * 1) / 12
    };

    return arcOptions;
  }

  function isAvailable(
    activeConsole,
    consoleSide,
    num,
    possibleOptions,
    selection
  ) {
    const optionsForSelection = possibleOptions.filter(option => {
      return option[activeConsole][consoleSide] === num;
    });

    return optionsForSelection.length > 0;
  }

  const arcs = numbers.map(num => {
    const arcOptions = getArcOptions(num);
    return {
      num: num,
      d: arcGenerator(arcOptions),
      centroid: arcGenerator.centroid(arcOptions)
    };
  });
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
    flex-wrap: wrap;
  }

  div.wrapper div.side {
    max-width: 50%;
    width: 50%;
  }

  svg {
    width: 100%;
  }

  path {
    /* stroke: white; */
  }

  text {
    font-size: 8px;
    text-anchor: middle;
  }

  path.dial-section,
  svg text {
    cursor: pointer;
  }

  path.dial-section {
    fill: grey;
  }

  path.dial-section.is-available {
    fill: red;
  }

  path.dial-section:hover {
    fill: yellow;
  }

  path.dial-section.selected {
    fill: yellow;
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
  <button on:click={() => setActiveConfiguration('solar')}>
    <Solar />
  </button>
  <button class="reset" on:click={reset}>reset all</button>
</h1>
<h1>{configurations[activeConfiguration].name}</h1>
<div class="console">
  <h2>console 1</h2>
  <div class="wrapper">
    <div class="side">
      <svg viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {#each arcs as arc}
            <path
              on:click={() => consoleClick('console1', 0, arc.num)}
              d={arc.d}
              class="dial-section"
              class:is-available={isAvailable('console1', 0, arc.num, possibleOptions, selection)}
              class:selected={selection[`console1`][0] === arc.num} />
            <text
              x={arc.centroid[0]}
              y={arc.centroid[1]}
              on:click={() => consoleClick('console1', 0, arc.num)}>
               {arc.num}
            </text>
          {/each}
        </g>
      </svg>
      <span class="reset" on:click={() => consoleClick('console1', 0, null)}>
        reset
      </span>
    </div>
    <div class="side">
      <svg viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {#each arcs as arc}
            <path
              on:click={() => consoleClick('console1', 1, arc.num)}
              d={arc.d}
              class="dial-section"
              class:is-available={isAvailable('console1', 1, arc.num, possibleOptions, selection)}
              class:selected={selection[`console1`][1] === arc.num} />
            <text
              x={arc.centroid[0]}
              y={arc.centroid[1]}
              on:click={() => consoleClick('console1', 1, arc.num)}>
               {arc.num}
            </text>
          {/each}
        </g>
      </svg>
      <span class="reset" on:click={() => consoleClick('console1', 1, null)}>
        reset
      </span>
    </div>
  </div>
  <h2>console 2</h2>
  <div class="wrapper">
    <div class="side">
      <svg viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {#each arcs as arc}
            <path
              on:click={() => consoleClick('console2', 0, arc.num)}
              d={arc.d}
              class="dial-section"
              class:selected={selection[`console2`][0] === arc.num} />
            class:is-available={isAvailable('console2', 0, arc.num, possibleOptions, selection)}

            <text
              x={arc.centroid[0]}
              y={arc.centroid[1]}
              on:click={() => consoleClick('console2', 0, arc.num)}>
               {arc.num}
            </text>
          {/each}
        </g>
      </svg>
      <span class="reset" on:click={() => consoleClick('console2', 0, null)}>
        reset
      </span>
    </div>
    <div class="side">
      <svg viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          {#each arcs as arc}
            <path
              on:click={() => consoleClick('console2', 1, arc.num)}
              d={arc.d}
              class="dial-section"
              class:is-available={isAvailable('console2', 1, arc.num, possibleOptions, selection)}
              class:selected={selection[`console2`][1] === arc.num} />
            <text
              x={arc.centroid[0]}
              y={arc.centroid[1]}
              on:click={() => consoleClick('console2', 1, arc.num)}>
               {arc.num}
            </text>
          {/each}
        </g>
      </svg>
      <span class="reset" on:click={() => consoleClick('console2', 1, null)}>
        reset
      </span>
    </div>
  </div>
  {#each possibleOptions as option}
    <h1> {option.node.color} {option.node.number} </h1>
  {/each}
  <hr />
  <footer>
    <p>
      Data is distilled from spreadsheats all over the internet, mainly from
      <a href="https://www.reddit.com/r/destinythegame" target="_blank">
        /r/destinythegame
      </a>
      and
      <a href="https://www.reddit.com/r/raidsecrets" target="_blank">
        r/raidsecrets
      </a>
    </p>
    <p>
      Element icon made by
      <a href="https://twitter.com/justrealmilk" target="_blank">
        justrealmilk
      </a>
      <a href="https://github.com/justrealmilk/destiny-icons" target="_blank">
        justrealmilk/destiny-icons
      </a>
    </p>
    <p>
      other solvers:
      <a
        href="https://huntertyberry-outbreak-configs.netlify.com/"
        target="_blank">
        a)
      </a>
      <a href="https://demoweb.me/kas/d2zerohour/" target="_blank">b)</a>
      <a href="http://www.ensemblefc.com/cryptarchlocks.php" target="_blank">
        c)
      </a>
      <a href="http://www.ensemblefc.com/cryptarchrings.php" target="_blank">
        d)
      </a>
    </p>
    <p>
      Powered by
      <a
        href="https://www.bungie.net/en/ClanV2/Chat?groupId=2131814"
        target="_blank">
        Maschinen und Rabauken
      </a>
    </p>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-34277025-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-34277025-2');
    </script>
  </footer>
</div>
