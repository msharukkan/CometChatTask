<script>
  import "../app.css";
  import '$lib/glowEffect'
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Header />

<slot />

<Footer />
