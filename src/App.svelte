<script lang="ts">
  import { onMount } from "svelte";
  import {debounce} from 'lodash';
  import { Toaster } from 'svelte-french-toast';
  import BigButtonSwitch from "./lib/BigButtonSwitch.svelte";
  import Slider from "./lib/Slider.svelte";
  import { turnOff, turnOn } from "./services/led";
  import { setValue } from "./services/slider";
  import { onRequest } from "./services/request";
  import toast from './services/toast';

  const min = 20;
  const max = 255;
  const debouncedSlider = debounce(setValue, 100);


  let status: boolean = false;
  let slider:number;


  $: {
    if(status){
      turnOn();
    }
    else{
      turnOff();
    }
  }

  $: {
    debouncedSlider(min, max, slider);
  }

  onMount(() => {
    onRequest(({url, ok, params}) => {
      console.log({url, ok, params});
      
      const msg = `${url}${params ? (`(${params['value']})`) : ''}`;
      if(ok){
        toast.success(msg);
        return;
      }
      toast.error(msg);
    })
  })
</script>

<Toaster/>

<main class="main-layout">
  <BigButtonSwitch bind:status />
  <Slider bind:value={slider} max={max} min={min}/>
</main>

<style>
  .main-layout {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>
