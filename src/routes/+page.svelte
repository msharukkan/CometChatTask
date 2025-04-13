<script>
    import Icon from "$lib/components/Icon.svelte";
    import {
        faqs,
        partnerBenefits,
        partnerTypes,
    } from "$lib/constants/partnerData";
    let fullName = "";
    let email = "";
    let company = "";

    function submit() {
        alert(`Submitted by ${fullName}`);
    }
    let openIndex = 0;

    const toggle = (index) => {
        openIndex = openIndex === index ? -1 : index;
    };
</script>

<svelte:head>
    <title>Join the CometChat partner universe!</title>
    <meta
        name="description"
        content="Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!"
    />
</svelte:head>
<section
    class="min-h-conditional bg-gradient-to-b from-[#0c021d] to-[#140c27] text-white flex flex-col md:flex-row justify-between items-center relative overflow-hidden px-6 py-16"
>
    <div
        class="relative max-w-7xl mx-auto md:flex gap-8 px-container lg:pb-20 pt-[50px] lg:flex-row lg:gap-20 lg:pt-[132px]"
    >
        <div class="z-20 lg:pt-14 max-w-md">
            <h1
                class="font-sans font-semibold text-[32px] leading-[36px] text-light lg:text-[48px] lg:leading-[50px] text-left md:mt-10 lg:mt-3 mb-3 lg:mb-5"
            >
                Join the CometChat partner universe
            </h1>
            <p class="text-light/74 text-[18px] lg:text-[22px]">
                Create value for your clients, leveraging our world-class
                technology. Partner with us and grow your business!
            </p>
        </div>
        <div class="relative w-full lg:w-[528px]">
            <div
                class="relative z-10 mt-8 md:mt-0 lg:p-8 bg-light/8 backdrop-blur-3xl p-4 rounded-3xl border-1 border-light/4"
            >
                <h2
                    class="text-[22px] lg:text-[32px] font-semibold mb-3 lg:mb-6"
                >
                    Become a partner
                </h2>
                <form on:submit|preventDefault={submit} class="space-y-4">
                    <div class="field">
                        <label
                            class="text-light/74 text-[16px] lg:text-[18px] font-[640]"
                            for="fullname"><span>Full name</span></label
                        >
                        <input
                            type="text"
                            placeholder="Type your name here..."
                            bind:value={fullName}
                            class="w-full px-4 py-2.5 text-light/64 placeholder-gray-300 focus:outline-none bg-light/1 rounded-xl border-1 border-light/4 focus:border-brand"
                        />
                    </div>
                    <div class="field">
                        <label
                            class="text-light/74 text-[16px] lg:text-[18px] font-[640]"
                            for="email"><span>Email address </span></label
                        >
                        <input
                            type="text"
                            placeholder="Type your emailsomething..."
                            bind:value={email}
                            class="w-full px-4 py-2.5 text-light/64 placeholder-gray-300 focus:outline-none bg-light/1 rounded-xl border-1 border-light/4 focus:border-brand"
                        />
                    </div>
                    <div class="field">
                        <label
                            class="text-light/74 text-[16px] lg:text-[18px] font-[640]"
                            for="company"><span>Companies name</span></label
                        >
                        <input
                            type="text"
                            placeholder="Type you company’s name"
                            bind:value={company}
                            class="w-full px-4 py-2.5 text-light/64 placeholder-gray-300 focus:outline-none bg-light/1 rounded-xl border-1 border-light/4 focus:border-brand"
                        />
                    </div>

                    <button
                        type="submit"
                        class="bg-brand text-light px-4 py-2.5 rounded-xl hover:bg-brand/60 transition transition-discrete font-semibold text-[14px]"
                        >Submit application</button
                    >
                </form>
            </div>
            <!-- Decorative Starts -->
            <div
                class="hidden md:flex absolute bottom-[10px] -left-[40px] w-[80px] h-[80px] z-0 blur-2xl animate-pulse opacity-80"
            >
                <div
                    class="bg-gradient-to-tr from-[#604BC5] via-60%-[#FFD2BB] to-[#FFE5D8] rounded-full w-[80px] h-[80px]"
                ></div>
            </div>
            <div
                class="hidden md:flex absolute bottom-[10px] -left-[40px] bg-gradient-to-tr from-[#604BC5] via-60%-[#FFD2BB] to-[#FFE5D8] rounded-full w-[80px] h-[80px]"
            ></div>
            <div
                class="absolute bg-gradient-to-tr from-[#604BC5] via-60%-[#FFD2BB] to-orange rounded-full w-[32px] h-[32px] top-2 -right-[15px] blur-xs"
            ></div>
            <!-- Decorative Ends -->
        </div>
        <!-- Decorative Starts -->
        <div class="absolute w-full h-full z-0 left-0 top-0">
            <div
                class="hidden md:flex absolute -left-[100px] bg-gradient-to-b from-orange to-brand rounded-full w-[60px] h-[60px] transition animate-pulse ease-in blur-xs opacity-60"
            ></div>
            <div
                class="absolute top-[60%] -left-[70px] md:top-[50%] md:-left-[20%] bg-gradient-to-tl from-[#FFE5D8] via-[#FFD2BB] to-[#604BC5] rounded-full w-[120px] h-[120px] transition animate-pulse ease-in blur-3xl opacity-98"
            ></div>
            <div
                class="absolute top-[60%] -left-[70px] md:top-[50%] md:-left-[20%] bg-gradient-to-tl from-[#FFE5D8] via-[#FFD2BB] to-[#604BC5] rounded-full w-[120px] h-[120px] transition ease-in blur-[2px] opacity-98"
            ></div>
            <div
                class="absolute bg-orange/10 rounded-full w-70 h-220 blur-3xl left-[100px] -top-[20%] rotate-45 animate-pulse pulse-delay-5"
            ></div>

            <div class=" absolute bottom-0 left-[5%] hidden lg:block z-2">
                <img
                    role="presentation"
                    src="/comet-1.svg"
                    alt=""
                    class="h-full w-full"
                />
            </div>
            <div
                class=" absolute -bottom-[10%] -left-[5%] hidden w-[1211.03px] lg:block z-1"
            >
                <img
                    role="presentation"
                    src="/Orbit.svg"
                    alt=""
                    class="h-full w-full"
                />
            </div>
            <div
                class=" absolute bottom-0 left-[5%] hidden lg:block blur-3xl animate-pulse pulse-delay-3"
            >
                <img
                    role="presentation"
                    src="/comet-1.svg"
                    alt=""
                    class="h-full w-full"
                />
            </div>
            <div
                class="absolute bg-brand/10 rounded-full w-72 h-72 top-20 left-10 w-70 h-220 blur-3xl rotate-45"
            ></div>
            <div
                class="absolute bg-brand/30 rounded-full w-80 h-120 top-20 left-10 blur-3xl animate-pulse opacity-70"
            ></div>
        </div>
        <!-- Decorative Ends -->
    </div>
    <!-- Decorative Starts -->
    <div
        class="absolute w-full h-[300px] bg-gradient-to-b from-[#0A091400] to-[#0A0914] bottom-0 left-0 z-0"
    ></div>
    <div
        class="absolute w-full h-full z-0 bg-[url(/Stars-hero.png)] animate-pulse"
    ></div>
    <div
        class="absolute rounded-full w-[160px] h-[160px] -right-[50px] -bottom-[50px] lg:w-[256px] lg:h-[256px] lg:-right-[156px] lg:bottom-0 bg-gradient-to-tr from-[#B968A4] to-[#FCB8A8] shadow-2xl"
    ></div>
    <div
        class="absolute rounded-full w-[160px] h-[160px] -right-[50px] -bottom-[50px] lg:w-[256px] lg:h-[256px] lg:-right-[156px] lg:bottom-0 bg-gradient-to-tr from-[#B968A4] to-[#FCB8A8] blur-3xl animate-pulse"
    ></div>
    <!-- Decorative Ends -->
</section>
<section class="overflow-hidden bg-dark px-6">
    <div
        class="container flex-col items-center justify-center py-8 md:gap-8 md:py-16 opacity-64"
    >
        <div
            class="flex items-center whitespace-nowrap gap-10 md:gap-20 logo-marquee"
        >
            <img
                src="/logos/aws.png"
                alt="AWS Logo"
                class="h-[32px] opacity-80"
            />
            <img
                src="/logos/10x-Genomics.png"
                alt="10x Genomics Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/microsoft.png"
                alt="Microsoft Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/nasscom.png"
                alt="Nasscom Logo"
                class="h-[22px] opacity-80"
            />
            <img
                src="/logos/techstars.png"
                alt="Techstars Logo"
                class="h-[24px] opacity-80"
            />
            <img
                src="/logos/Teknopoint.png"
                alt="Tecknopoint Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/cisco.png"
                alt="Cisco"
                class="h-[32px] opacity-80"
            />
            <img
                src="/logos/homemainlogo.png"
                alt="Home Main Logo"
                class="h-[32px] opacity-80"
            />
            <img
                src="/logos/aws.png"
                alt="AWS Logo"
                class="h-[32px] opacity-80"
            />
            <img
                src="/logos/10x-Genomics.png"
                alt="10x Genomics Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/microsoft.png"
                alt="Microsoft Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/nasscom.png"
                alt="Nasscom Logo"
                class="h-[22px] opacity-80"
            />
            <img
                src="/logos/techstars.png"
                alt="Techstars Logo"
                class="h-[24px] opacity-80"
            />
            <img
                src="/logos/Teknopoint.png"
                alt="Tecknopoint Logo"
                class="h-[28px] opacity-80"
            />
            <img
                src="/logos/cisco.png"
                alt="Cisco"
                class="h-[32px] opacity-80"
            />
            <img
                src="/logos/homemainlogo.png"
                alt="Home Main Logo"
                class="h-[32px] opacity-80"
            />
        </div>
    </div>
</section>
<section class="overflow-hidden bg-dark px-6">
    <div
        class="container relative z-10 max-w-7xl mx-auto gap-8 md:pb-20 pt-10 md:pt-16"
    >
        <p class="text-[18px] lg:text-[22px] text-orange font-semibold mb-2">
            Be a partner
        </p>
        <h2
            class="max-w-[528px] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-semibold mb-10 text-light"
        >
            CometChat partner advantages
        </h2>
        <div
            class="grid md:grid-cols-3 pb-12 pt-6 md:gap-y-16 md:pb-20 md:pt-12 gap-8 lg:gap-x-12"
        >
            {#each partnerBenefits as item}
                <div class="flex flex-col gap-1">
                    <div
                        class="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-orange/12 mb-2"
                    >
                        <Icon name={item.icon} size="4" color="text-light" />
                    </div>
                    <h3
                        class="text-light text-[16px] lg:text-[18px] font-[640] leading-[20px]"
                    >
                        {item.title}
                    </h3>
                    <p
                        class="text-light/74 text-[16px] lg:text-[18px] font-medium leading-[22px]"
                    >
                        {item.desc}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
<section class="overflow-hidden pt-10 lg:pt-24 bg-light px-6">
    <div class="container relative z-10 max-w-7xl mx-auto">
        <p class="text-[18px] lg:text-[22px] text-brand font-semibold mb-2">
            Our programs
        </p>
        <h2
            class="max-w-[528px] text-[32px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-semibold mb-10 text-grey"
        >
            Types of partnerships programs
        </h2>
        <div
            class="grid md:grid-cols-3 pb-12 pt-6 md:gap-y-16 md:pb-20 md:pt-12 gap-8 lg:gap-x-12"
        >
            {#each partnerTypes as item}
                <div class="flex flex-col gap-1">
                    <div
                        class="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand/12 mb-2"
                    >
                        <Icon name={item.icon} />
                    </div>
                    <h3
                        class="text-grey text-[16px] lg:text-[18px] font-[640] leading-[20px]"
                    >
                        {item.title}
                    </h3>
                    <p
                        class="text-grey/74 text-[16px] lg:text-[18px] font-medium leading-[22px]"
                    >
                        {item.desc}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
<section class="relative overflow-hidden py-10 lg:py-24 bg-light px-6">
    <div class="max-w-3xl mx-auto lg:text-center">
        <p class="text-[18px] lg:text-[22px] text-orange font-semibold mb-2">
            FAQ’s
        </p>
        <h2
            class="text-[32px] leading-[36px] lg:text-[48px] lg:leading-[50px] font-semibold mb-10 md:mb-15 text-grey"
        >
            We want to help you <br />with all your doubts
        </h2>

        {#each faqs as faq, i}
            <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
            <div
                class="bg-dark/2 border-1 border-[#14131D0A] rounded-2xl p-6 mb-4 cursor-pointer transition ease-in hover:shadow-lg z-1"
                on:click={() => toggle(i)}
            >
                <div class="flex justify-between items-center">
                    <h3
                        class="text-[18px] lg:text-[22px] font-[640] text-left text-dark leading-[24px] md:w-full w-60"
                        class:opacity-74={openIndex !== i}
                    >
                        {faq.question}
                    </h3>
                    <svg
                        class="w-5 h-5 transform transition-transform"
                        class:rotate-180={openIndex === i}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
                {#if openIndex === i && faq.answer}
                    <p
                        class="text-[18px] lg:text-[22px] leading-[24px] font-medium text-dark/74 text-left mt-3"
                    >
                        {faq.answer}
                    </p>
                {/if}
            </div>
        {/each}
    </div>
    <div
        class="hidden lg:block absolute w-full h-full overflow-hidden z-0 left-0 top-0"
    >
        <div
            class="absolute bg-gradient-to-b from-[#FCB8A8] via-[#B968A4] to-[#756CF6] rounded-full w-[500px] h-[500px] top-50 -left-[250px] transition animate-pulse blur-3xl opacity-60 backdrop-blur-md"
        ></div>
        <div
            class="absolute bg-gradient-to-b from-[#FCB8A8] via-[#B968A4] to-[#756CF6] rounded-full w-[500px] h-[500px] top-50 -right-[250px] transition animate-pulse blur-3xl pulse-delay-1 opacity-60 backdrop-blur-md"
        ></div>
    </div>
</section>
<section
    class="relative bg-dark bg-[url(/Stars.png)] text-white py-24 md:py-32 overflow-hidden px-6"
>
    <!-- <div
        class="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-500 via-brand-600 to-transparent rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 "
    ></div>
    <div
        class="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-orange-400 via-brand to-transparent rounded-full blur-2xl opacity-70 "
    ></div> -->

    <div class="relative z-10 lg:text-center max-w-2xl lg:mx-auto">
        <h2 class="text-[32px] lg:text-[48px] font-semibold">
            Get started for free
        </h2>
        <p class="text-[18px] lg:text-[22px] text-light/74 mb-8">
            Build and test for as long as you need. <br
                class="hidden sm:block"
            />
            Pick a plan when you’re ready.
        </p>
        <div class="flex lg:justify-center gap-4 flex-wrap">
            <button
                class="border border-light/20 bg-light/2 text-light px-4 py-2.5 rounded-xl hover:bg-gray-800 transition transition-discrete font-semibold text-[14px]"
            >
                Start free trial
            </button>
            <button
                class="bg-violet-500 hover:bg-violet-600 text-[#FCFCFE] px-3 py-2.5 rounded-xl transition transition-discrete font-semibold text-[14px]"
            >
                Schedule a demo
            </button>
        </div>
    </div>
    <!-- Decoration starts -->
    <div
        class=" absolute bottom-0 -right-[60px] lg:bottom-[60px] lg:right-[60px] blur-xl animate-pulse pulse-delay-3s w-[140px] h-[140px]"
    >
        <img
            role="presentation"
            src="/comet-1.svg"
            alt=""
            class="h-full w-full"
        />
    </div>
    <div
        class="absolute bottom-0 -right-[60px] lg:bottom-[60px] lg:right-[60px] w-[140px] h-[140px]"
    >
        <img
            role="presentation"
            src="/comet-1.svg"
            alt=""
            class="h-full w-full"
        />
    </div>

    <div
        class="absolute rounded-full w-[120px] h-[120px] -left-[60px] -top-[40px] lg:w-[256px] lg:h-[256px] bg-gradient-to-bl from-[#B968A4] to-[#FCB8A8] shadow-2xl"
    ></div>
    <div
        class="absolute rounded-full w-[120px] h-[120px] -left-[60px] -top-[40px] lg:w-[256px] lg:h-[256px] bg-gradient-to-bl from-[#B968A4] to-[#FCB8A8] blur-3xl animate-pulse"
    ></div>
    <div
        class="absolute rounded-full w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] -left-[2%] -top-[20%] lg:left-[2%] lg:top-[20%] bg-gradient-to-bl from-[#5343A5] to-[#FCB8A8] blur-2xl z-2"
    ></div>
    <!-- backdrop-blur-3xl animate-pulse opacity-50 -->
    <!-- <div
        class="absolute rounded-full w-[160px] h-[160px] -right-[50px] -bottom-[50px] lg:w-[256px] lg:h-[256px] lg:-left-[156px] lg:top-0 bg-gradient-to-tr from-[#B968A4] to-[#FCB8A8] blur-3xl animate-pulse"
    ></div> -->
    <!-- Decoration ends -->
</section>
