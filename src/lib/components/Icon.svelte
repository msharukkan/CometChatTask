<script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { error } from "@sveltejs/kit";

    export let name;
    export let size = "24";
    export let color = "currentColor";
    export let className = "";

    let iconContent;

    const icons = import.meta.glob("../icons/*.svg", {
        eager: true,
        import: "default",
    });

    onMount(() => {
        if (!browser) return;

        const path = Object.keys(icons).find((key) =>
            key.endsWith(`${name}.svg`),
        );

        if (path && icons[path]) {
            iconContent = icons[path];
        } else {
            iconContent = "";
            console.warn(`⚠ Icon "${name}" not found`);
        }
    });
</script>

{#if iconContent}
    <i class={className} style="width: {size}; height: {size}; color: {color}">
        {@html iconContent}
    </i>
{:else}
    <span class="text-red-500 text-xs">⚠ Icon not found: "{name}"</span>
{/if}
