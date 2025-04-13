<script>
  import Logo from "$lib/logo.svg?raw";
  import Icon from "./components/Icon.svelte";
  import { footerLinks } from "./constants/footerData";

  let openIndex = null;

  const toggleSection = (index) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<footer class="relative overflow-hidden bg-dark px-6">
  <div
    class="absolute w-[100%] h-full bg-[url(/Stars.png)] transition animate-pulse ease-in opacity-90 z-0"
  ></div>
  <div class="relative z-1 container max-w-7xl mx-auto px-4 pt-10">
    <a href="#" class="-m-1.5 p-1.5">
      <span class="sr-only">CometChat</span>
      {@html Logo}
    </a>

    <div class="grid md:grid-cols-4 gap-5 md:gap-15 mb-5 mt-5">
      {#each footerLinks as category, i}
        <div class="text-light">
          <button
            class="w-full text-left text-brand font-semibold text-[16px] tracking-[0.5px] mb-3 flex justify-between items-center md:block cursor-pointer"
            on:click={() => toggleSection(category.title)}
          >
            <span>{category.title}</span>
            <span class="md:hidden">
              {openIndex === category.title ? "-" : "+"}
            </span>
          </button>

          {#each category.sections as section}
            {#if section.label}
              <h4
                class={`text-[14px] tracking-[1px] text-light/54 mb-3 ${openIndex === category.title ? "block" : "hidden"} md:!block`}
              >
                {section.label}
              </h4>
            {/if}
            {#if section.title}
              <button
                class="w-full text-left text-brand font-semibold text-[16px] tracking-[0.5px] my-8 md:my-4 flex justify-between items-center md:block cursor-pointer"
                on:click={() => toggleSection(section.title)}
              >
                <span>{section.title}</span>
                <span class="md:hidden">
                  {openIndex === section.title ? "-" : "+"}
                </span>
              </button>
            {/if}

            <ul
              class={`mb-6 text-[14px] tracking-[1px] text-light ${openIndex === (section.title || category.title) ? "block" : "hidden"} md:!block`}
            >
              {#each section.items as item}
                <li class="mb-3 hover:left-[1px] relative transition ease-in">
                  <a href={item.link}>{item.text}</a>
                </li>
              {/each}
            </ul>
          {/each}
        </div>
      {/each}
    </div>
    <div class="h-px w-full hr-gradient"></div>
  </div>
  <div
    class="relative z-1 max-w-7xl mx-auto px-4 py-8 flex flex-col-reverse lg:flex-col lg:flex-row md:justify-between items-center text-light text-[14px]"
  >
    <div class="w-full md:w-auto flex gap-4 items-center">
      <span>2023 © CometChat</span>
      <a href="#" class=" opacity-74 hover:opacity-100">Terms of Use</a>
      <a href="#" class=" opacity-74 hover:opacity-100">Privacy Policy</a>
    </div>

    <div
      class="flex gap-3 flex-wrap md:flex-row items-center space-x-6 mb-4 lg:mt-0"
    >
      <a href="#" class="inline-flex items-center gap-1 opacity-74 hover:opacity-100">
        <Icon name={"facebook"} size="4" color="text-light" /> Facebook
      </a>
      <a href="#" class="inline-flex items-center gap-1  opacity-74 hover:opacity-100">
        <Icon name={"linkedin"} size="4" color="text-light" /> LinkedIn
      </a>
      <a href="#" class="inline-flex items-center gap-1  opacity-74 hover:opacity-100">
        <Icon name={"insta"} size="4" color="text-light" /> Instagram
      </a>
      <a href="#" class="inline-flex items-center gap-1  opacity-74 hover:opacity-100">
        <Icon name={"twitter"} size="4" color="text-light" /> Twitter
      </a>
      <a href="#" class="inline-flex items-center gap-1  opacity-74 hover:opacity-100">
        <Icon name={"github"} size="4" color="text-light" /> GitHub
      </a>
    </div>
  </div>
</footer>
