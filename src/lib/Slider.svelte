<script>
    export let value = 5;
    export let min = 0;
    export let max = 10;
    export let step = 1;
    export let moreProps = {}; // allows other props to be spread in, e.g. "step" or "disabled"

</script>

<div class="slider-container">
    <input id="slider" type="range" bind:value {min} {max} {step} {...moreProps} on:change on:input>
</div>

<style>
  /* :root {
      --accent: #fff;
  } */

  input {
      margin: 0;
  }

  :root {
      
      /* --text: #fff; */
      --trackHeight: 2px;
      --thumbHeight: 12px;
      --thumbTouchHeight: 32px;
      --sliderComponentBg: #f4f4f4;
  }

  .slider-container {
    display: grid;
  }
  input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    margin: calc(1em - var(--thumbTouchHeight) / 2);
    margin-left: calc(-1 * var(--thumbTouchHeight) / 2);
    margin-right: calc(-1 * var(--thumbTouchHeight) / 2);
    width: calc(100% + var(--thumbTouchHeight));
    /* necessary for firefox */
    background: transparent; 
    border: none;
  }

  input[type="range"]:focus {
    outline: none;
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--trackHeight);
    cursor: pointer;
    background: transparent;
    background-image: linear-gradient(
        to right,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) 50%,
        transparent 50%
      ),
      linear-gradient(
        to left,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) 50%,
        transparent 50%
      );
    border-radius: 1px; /* weidly, this property must be here */
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    outline: none;
    background-image: linear-gradient(
        to right,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--text) calc(var(--thumbTouchHeight) / 2),
        var(--text) 50%,
        transparent 50%
      ),
      linear-gradient(
        to left,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--text) calc(var(--thumbTouchHeight) / 2),
        var(--text) 50%,
        transparent 50%
      );
  }
  input[type="range"]::-webkit-slider-thumb {
    height: var(--thumbTouchHeight);
    width: var(--thumbTouchHeight);
    border-radius: var(--thumbTouchHeight);
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: calc(
      -1 * (var(--thumbTouchHeight) / 2) + (var(--trackHeight) / 2)
    );
    background: none; /* necessary for iOS Safari */
    background-image: radial-gradient(
      var(--accent) calc(var(--thumbHeight) / 2 - 0.25px),
      transparent calc(var(--thumbHeight) / 2 + 0.25px),
      transparent
    );
    box-shadow: none;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: var(--trackHeight);
    border-radius: 1px;
    cursor: pointer;
    background-color: transparent;
    background-image: linear-gradient(
        to right,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) 50%,
        transparent 50%
      ),
      linear-gradient(
        to left,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) calc(var(--thumbTouchHeight) / 2),
        var(--trackBg) 50%,
        transparent 50%
      );
  }
  input[type="range"]:focus::-moz-range-track {
    background-image: linear-gradient(
        to right,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--text) calc(var(--thumbTouchHeight) / 2),
        var(--text) 50%,
        transparent 50%
      ),
      linear-gradient(
        to left,
        transparent,
        transparent calc(var(--thumbTouchHeight) / 2),
        var(--text) calc(var(--thumbTouchHeight) / 2),
        var(--text) 50%,
        transparent 50%
      );
  }
  input[type="range"]::-moz-focus-outer {
    border: 0;
  }
  input[type="range"]::-moz-range-thumb {
    height: var(--thumbTouchHeight);
    width: var(--thumbTouchHeight);
    border: none;
    border-radius: var(--thumbTouchHeight);
    background: none; /* necessary for iOS Safari */
    background-image: radial-gradient(
      var(--accent) calc(var(--thumbHeight) / 2 - 0.25px),
      transparent calc(var(--thumbHeight) / 2 + 0.25px),
      transparent
    );
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    width: calc(100% - var(--thumbTouchHeight));
    margin-left: calc(var(--thumbTouchHeight) / 2);
    height: var(--trackHeight);
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background-color: #777;
  }
  input[type="range"]::-ms-fill-upper {
    background: #777;
  }
  input[type="range"]::-ms-thumb {
    width: var(--thumbHeight);
    margin-left: calc(var(--thumbTouchHeight) / 2);
    margin-right: calc(var(--thumbTouchHeight) / 2);
    border-radius: 999px;
    background-color: #222;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: blue;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: blue;
  }
</style>