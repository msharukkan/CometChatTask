<script>
    import Logo from "$lib/logo.svg?raw";

    import { onMount } from "svelte";

    let scrolled = false;

    onMount(async () => {
        const module = await import("$lib/glowEffect.js");
        module.initGlowEffect();
    });
    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 10;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    let isOpen = false;

    const openMenu = () => {
        isOpen = true;
    };

    const closeMenu = () => {
        isOpen = false;
    };
</script>

<header class={`fixed w-full z-1 z-[99999]`}>
    <nav
        class={`${scrolled ? "border-b border-b-dark/30 bg-dark/70 backdrop-blur-sm shadow-md" : ""}`}
    >
        <div
            class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:py-3 lg:px-8"
        >
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">CometChat</span>
                    {@html Logo}
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    on:click={openMenu}
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 text-light border-1 border-light/10 bg-dark/50"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a
                    href="#"
                    class="text-sm/6 font-semibold text-white hover:text-brand-600 group relative"
                    >Platform
                    <span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span></a
                >
                <a
                    href="#"
                    class="text-sm/6 font-semibold text-white hover:text-brand-600 group relative"
                    >Solutions<span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span></a
                >
                <a
                    href="#"
                    class="text-sm/6 font-semibold text-white hover:text-brand-600 group relative"
                    >Developers<span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span></a
                >
                <a
                    href="#"
                    class="text-sm/6 font-semibold text-white hover:text-brand-600 group relative"
                    >Resources<span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span></a
                >
                <a
                    href="#"
                    class="text-sm/6 font-semibold text-white hover:text-brand-600 group relative"
                    >Pricing<span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span></a
                >
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md p-2.5 text-sm/6 font-semibold text-white group relative"
                >
                    Login
                    <span
                        class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-r from-[#FCB8A8] via-[#B968A4] to-[#756CF6] group-hover:w-full"
                    ></span>
                </button>
                <button
                    type="button"
                    class="bg-brand text-light px-4 py-2.5 rounded-xl hover:bg-brand/60 transition transition-discrete font-semibold text-[14px]"
                >
                    Schedule a demo
                    <div class="glow-overlay"></div>
                </button>
            </div>
        </div>
    </nav>

    {#if isOpen}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <div class="flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">CometChat</span>
                            {@html Logo}
                        </a>
                    </div>
                    <button
                        type="button"
                        on:click={closeMenu}
                        class="-m-2.5 rounded-md p-2.5 text-light"
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="size-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2 font-semibold text-light"
                                >Platform
                            </a>
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2 font-semibold text-light"
                                >Solutions</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2 font-semibold text-light"
                                >Developers</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2 font-semibold text-light"
                                >Resources</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2 font-semibold text-light"
                                >Pricing</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-xl px-3 py-2.5 font-semibold text-light"
                                >Log in</a
                            >

                            <button
                                type="button"
                                class="-mx-3 block rounded-xl px-3 py-2.5 font-semibold text-brand"
                            >
                                Schedule a demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
