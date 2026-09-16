<script>
    let maxClick = $state(6);
    let cnt = $state(6); // tip: https://svelte.dev/docs/svelte/$state

    function onClick() {
        if (cnt > 0) {
            cnt -= 1;
        }
    }
</script>

<h1>Yuemiao Yang's VIS Site</h1>
<img
    width="200px"
    src="https://images.pexels.com/photos/38162469/pexels-photo-38162469/free-photo-of-vibrant-pink-flower-close-up-in-sunlight.jpeg?cs=tinysrgb&dpr=1&w=500"
/>
<div>
    You can click up to
    <select
        bind:value={maxClick}
        onchange={() => {
            /*tip: define what will happen after click. Maybe you want to update the remaining number of clikc when click a new maxClick value */
            cnt = maxClick;
        }}
    >
        {#each [2, 4, 6] as optionNum}
            <option value={optionNum}>
                {optionNum}
            </option>
        {/each}
    </select>
    times
</div>
<button onclick={onClick}> Click Me </button>

<!-- tip: use {#if...} template syntax here (https://svelte.dev/docs/svelte/if) so that the content below will automatically update when cnt value changes -->
<!-- `the content below should only show when cnt >0` -->
{#if cnt > 0}
    <p id="info">Remaining Number of Clicks: {cnt}</p>
{:else}
    <p>No more clicks allowed</p>
{/if}

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        background-color: #44aa66;
        /* background-color: blue; */
        color: white;
        font-size: xx-large;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
</style>
