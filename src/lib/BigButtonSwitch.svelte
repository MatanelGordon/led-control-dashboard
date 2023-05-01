<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Events {
    click: {
      status: boolean;
      event: MouseEvent;
    };
  }

  export let status: boolean = false;

  const dispatch = createEventDispatcher<Events>();

  function clickHandler(event: MouseEvent) {
    status = !status;
    dispatch('click', {
      event,
      status,
    });
  }
</script>

<button class="switch" on:click={clickHandler}>
  {status? "Turn Off" : "Turn On"}
</button>

<style lang="scss">
  .switch{
    --size: 200px;
    --glaze: inset 0 5px 17px #bfbaba5c;

    width: var(--size);
    height: var(--size);

    background-color: var(--red-7);
    
    border: none;
    border-radius: 50%;
    outline-color: var(--red-2);
    box-shadow: 0 var(--size-2) var(--red-10), var(--glaze);

    text-shadow: 1px 3px 1px rgb(0 0 0 / 56%);
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;

    &:active{
      box-shadow: inset 0 calc(var(--size-2) * -1) var(--red-10), var(--glaze);
      transform: translateY(var(--size-2));
    }
  }
</style>
