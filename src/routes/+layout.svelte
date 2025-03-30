<script>
	import '../app.css';
  
	let menuOpen = false;
	function toggleMenu() {
	  menuOpen = !menuOpen;
	}
  </script>
  
  <header class="fixed w-full z-50 bg-[#0B0B0B]/80 backdrop-blur-md text-white transition-250">
	<div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
	  <!-- Brand + SVG Logo -->
	  <a
		class="flex items-center space-x-2 cursor-pointer hover-scale"
		href='/'
	  >
		<!-- Minimal placeholder SVG (like a "tooth" icon) -->
		<svg
		  width="28"
		  height="28"
		  viewBox="0 0 24 24"
		  fill="none"
		  stroke="currentColor"
		  stroke-width="2"
		  stroke-linecap="round"
		  stroke-linejoin="round"
		>
		  <path d="M6 3h12l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7l4-4z" />
		  <line x1="3" y1="7" x2="21" y2="7" />
		  <path d="M16 3v4H8V3" />
		</svg>
		<h1 class="text-lg tracking-wide font-light transition-250">
		  Dogtooth & Friends
		</h1>
	</a>
  
	  <!-- Hamburger (mobile) -->
	  <button
		class="md:hidden focus:outline-none transition-250 hover:scale-110"
		on:click={toggleMenu}
		aria-label="Toggle menu"
	  >
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  class="h-6 w-6"
		  fill="none"
		  viewBox="0 0 24 24"
		  stroke="currentColor"
		>
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		  />
		</svg>
	  </button>
  
	  <!-- Desktop Nav -->
	  <nav class="md:flex space-x-6 text-sm font-light">
		<a href="/" class="hover:text-[#f48c06] transition-250">Home</a>
		<a href="/services" class="hover:text-[#f48c06] transition-250">Services</a>
		<a href="/pricing" class="hover:text-[#f48c06] transition-250">Pricing</a>
		<a href="/contact" class="hover:text-[#f48c06] transition-250">Contact</a>
	  </nav>
	</div>
  
	<!-- Mobile Nav (conditional) -->
	{#if menuOpen}
	  <nav class="md:hidden bg-[#0B0B0B]/95 backdrop-blur-md py-2 transition-250">
		<div class="max-w-6xl mx-auto px-4 flex flex-col space-y-2 text-sm font-light">
		  <a href="/" class="hover:text-[#f48c06] transition-250" on:click={() => (menuOpen = false)}>Home</a>
		  <a href="/services" class="hover:text-[#f48c06] transition-250" on:click={() => (menuOpen = false)}>Services</a>
		  <a href="/pricing" class="hover:text-[#f48c06] transition-250" on:click={() => (menuOpen = false)}>Pricing</a>
		  <a href="/contact" class="hover:text-[#f48c06] transition-250" on:click={() => (menuOpen = false)}>Contact</a>
		</div>
	  </nav>
	{/if}
  </header>
  
  <main class="min-h-screen bg-[#0B0B0B] text-white pt-20">
	<slot />
  </main>
  
  <footer class="bg-[#0B0B0B] text-white">
	<div class="max-w-6xl mx-auto px-4 py-4 text-center text-sm font-light">
	  <div class="flex items-center justify-center space-x-2 mb-2">
		<!-- Same SVG from header, smaller if desired -->
		<svg
		  width="20"
		  height="20"
		  viewBox="0 0 24 24"
		  fill="none"
		  stroke="currentColor"
		  stroke-width="2"
		  stroke-linecap="round"
		  stroke-linejoin="round"
		>
		  <path d="M6 3h12l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7l4-4z"/>
		  <line x1="3" y1="7" x2="21" y2="7"/>
		  <path d="M16 3v4H8V3"/>
		</svg>
		<p>Dogtooth & Friends</p>
	  </div>
	  <p>
		© 2025 Dogtooth & Friends • All Rights Reserved
	  </p>
  
	  <!-- Social Links -->
	  <div class="footer-links">
		<a href="/dogtooth-and-friends" aria-label="Instagram">Instagram</a>
		<a href="/dogtooth-and-friends" aria-label="Twitter">Twitter</a>
		<a href="/dogtooth-and-friends" aria-label="Facebook">Facebook</a>
	  </div>
	</div>
  </footer>
  