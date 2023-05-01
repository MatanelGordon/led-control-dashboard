<script lang="ts">
  import { Slider } from "fluent-svelte";

  export const min:number = 20;
  export const max:number = 100;
  export let value:number = (min + max) / 2;


</script>

<div class="slider">
    <Slider step={1} max={max} min={min} bind:value={value}/>
</div>

<style>
    .slider{
        --fds-accent-default: #df5d1d;
        --fds-accent-tertiary: #e68a5c;
    }
</style>
