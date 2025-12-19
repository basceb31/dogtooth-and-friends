<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { icons, services, projects, testimonials } from '$lib/data';

  export const prerender = true;
</script>

<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { icons, services, testimonials } from '$lib/data';
  import { images } from '$lib/images';

  export const prerender = true;

  let companyName = 'My Awesome Company';
  let colorScheme = 'orange';

  let prompt = '';
  let generatedContent = '';
  let isGenerating = false;

  let industry = '';
  let keywords = [];
  let isGeneratingKeywords = false;

  function generateContent() {
    isGenerating = true;
    setTimeout(() => {
      generatedContent = `
        <h3 class="text-xl font-semibold mb-4 text-white">The Surprising Benefits of Your Morning Coffee</h3>
        <p class="text-gray-300 font-light mb-4">
          That daily cup of coffee does more than just wake you up. Studies show it can improve brain function, boost your metabolism, and may even lower your risk of several diseases.
        </p>
        <p class="text-gray-300 font-light">
          Packed with antioxidants, coffee is a complex beverage with a wide range of health benefits. So go ahead, enjoy that second cup.
        </p>
      `;
      isGenerating = false;
    }, 1500);
  }

  function critiqueContent() {
    isGenerating = true;
    setTimeout(() => {
      generatedContent = `
        <h3 class="text-xl font-semibold mb-4 text-white">Content Analysis Report</h3>
        <p class="text-gray-300 font-light mb-4">
          <strong>Overall:</strong> The page is strong, but could be more benefit-oriented.
        </p>
        <ul class="list-disc list-inside text-gray-300 font-light space-y-2">
          <li><strong>Hero Section:</strong> The headline "Your Website, CRM, and SEO. Done in Seconds." is powerful. Consider adding a sub-headline that quantifies the benefit, like "Join 1,000+ businesses who launched their site in under a minute."</li>
          <li><strong>Features Section:</strong> The three pillars are clear. The descriptions could be more evocative. For "Instant Website Builder," try "Go from a blank canvas to a masterpiece in a few clicks."</li>
          <li><strong>CTA:</strong> "Create Your Website Now" is good. For a softer sell, you could test "See it in action."</li>
        </ul>
      `;
      isGenerating = false;
    }, 1500);
  }

  function getKeywords() {
    isGeneratingKeywords = true;
    setTimeout(() => {
      if (industry.toLowerCase().includes('coffee')) {
        keywords = [
          'specialty coffee',
          'local coffee shop',
          'best espresso near me',
          'fair trade coffee beans',
          'cold brew delivery'
        ];
      } else if (industry.toLowerCase().includes('tech')) {
        keywords = [
          'SaaS solutions for small business',
          'cloud-based CRM',
          'AI-powered analytics',
          'custom software development',
          'IT consulting services'
        ];
      } else {
        keywords = [
          'local business marketing',
          'how to grow my small business',
          'digital marketing services',
          'social media for business',
          'online advertising'
        ];
      }
      isGeneratingKeywords = false;
    }, 1500);
  }

  function analyzeSeo() {
    isGeneratingKeywords = true;
    setTimeout(() => {
      keywords = [
        '<strong>Analysis:</strong> The page is missing a meta description. Adding one can improve click-through rates from search results.',
        '<strong>Recommendation:</strong> Add a meta description of 150-160 characters that summarizes the page content and includes the primary keyword.',
        '<strong>Opportunity:</strong> The page could target long-tail keywords like "all-in-one website builder for small business" to capture more specific search intent.'
      ];
      isGeneratingKeywords = false;
    }, 1500);
  }

  let visualSuggestions = [];
  let isGeneratingVisuals = false;

  function getVisualSuggestions() {
    isGeneratingVisuals = true;
    setTimeout(() => {
      visualSuggestions = [
        {
          title: 'Cool Blues Palette',
          description: 'A modern and professional color scheme that evokes trust and calmness.',
          action: { type: 'change_palette', primary: '#3b82f6', secondary: '#60a5fa' }
        },
        {
          title: 'Serif Font',
          description: 'A classic and elegant font that can give your site a more traditional and trustworthy feel.',
          action: { type: 'change_font', font: 'Georgia, serif' }
        },
        {
          title: 'Reset to Default',
          description: 'Return to the original visual style.',
          action: { type: 'reset_visuals' }
        }
      ];
      isGeneratingVisuals = false;
    }, 1500);
  }

  function applyVisualSuggestion(action) {
    if (action.type === 'change_palette') {
      document.documentElement.style.setProperty('--primary-color', action.primary);
      document.documentElement.style.setProperty('--secondary-color', action.secondary);
    } else if (action.type === 'change_font') {
      document.documentElement.style.setProperty('--main-font', action.font);
    } else if (action.type === 'reset_visuals') {
      document.documentElement.style.setProperty('--primary-color', '#f48c06');
      document.documentElement.style.setProperty('--secondary-color', '#ffbb33');
      document.documentElement.style.setProperty('--main-font', 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif');
    }
  }
</script>

<!-- 1) Interactive Hero Section -->
<section class="w-full bg-[#0B0B0B]">
  <div class="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
    <!-- Text Content & Form -->
    <div class="md:w-1/2" in:fade={{ delay: 100 }}>
      <h1
        class="text-4xl md:text-5xl font-light leading-tight mb-4 transition-250"
        in:slide={{ delay: 200, easing: quintOut }}
      >
        Your Website, CRM, and SEO.
        <br class="hidden md:block" />
        <span class="text-[#f48c06]">Done in Seconds.</span>
      </h1>

      <p class="mt-2 text-gray-300 max-w-xl font-light">
        Go from idea to live website, complete with a customer management system and SEO tools, faster than ever before.
      </p>

      <div class="mt-8 space-y-4">
        <div>
          <label for="companyName" class="text-sm font-light text-gray-400">Company Name</label>
          <input
            type="text"
            id="companyName"
            bind:value={companyName}
            class="w-full bg-[#1a1a1a] border border-[#2f2f2f] rounded-md px-3 py-2 text-white focus:ring-[#f48c06] focus:border-[#f48c06]"
          />
        </div>
        <div>
          <label for="colorScheme" class="text-sm font-light text-gray-400">Color Scheme</label>
          <select
            id="colorScheme"
            bind:value={colorScheme}
            class="w-full bg-[#1a1a1a] border border-[#2f2f2f] rounded-md px-3 py-2 text-white focus:ring-[#f48c06] focus:border-[#f48c06]"
          >
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>

      <a
        href="/contact"
        class="inline-block bg-[#f48c06] text-white font-semibold py-3 px-6 rounded-md mt-8 hover-scale transition-250"
        in:fade={{ delay: 400 }}
      >
        Start Your Free Trial
      </a>
    </div>

    <!-- Live Preview -->
    <div class="md:w-1/2 flex justify-center" in:fade={{ delay: 500 }}>
      <div class="w-full max-w-md h-80 bg-[#1a1a1a] rounded-lg shadow-lg p-4 border border-[#2f2f2f]">
        <div class="h-full border-2 border-dashed border-gray-600 rounded-md p-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold" style="color: {colorScheme === 'orange' ? '#f48c06' : colorScheme === 'blue' ? '#3b82f6' : '#10b981'}">{companyName}</h2>
            <div class="flex space-x-2">
              <div class="w-12 h-4 bg-gray-500 rounded-full"></div>
              <div class="w-12 h-4 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <div class="mt-4 h-32 bg-gray-700 rounded-md"></div>
          <div class="mt-4 grid grid-cols-3 gap-4">
            <div class="h-16 bg-gray-600 rounded-md"></div>
            <div class="h-16 bg-gray-600 rounded-md"></div>
            <div class="h-16 bg-gray-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 2) Features Section -->
<section class="w-full py-20 bg-[#111111]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-12 text-center">Everything you need, in one place.</h2>
    <div class="grid md:grid-cols-3 gap-12 text-center">
      <!-- Feature 1: Website Builder -->
      <div class="flex flex-col items-center" in:fade={{ delay: 150 }}>
        <div class="w-16 h-16 rounded-full bg-[#f48c06] flex items-center justify-center text-white mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {@html icons.development}
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Instant Website Builder</h3>
        <p class="text-gray-400 font-light">Create a professional, stunning website in seconds. No code required.</p>
      </div>
      <!-- Feature 2: CRM -->
      <div class="flex flex-col items-center" in:fade={{ delay: 300 }}>
        <div class="w-16 h-16 rounded-full bg-[#f48c06] flex items-center justify-center text-white mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {@html icons.consultation}
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Integrated CRM</h3>
        <p class="text-gray-400 font-light">Manage your customers, leads, and projects from a single, intuitive dashboard.</p>
      </div>
      <!-- Feature 3: SEO -->
      <div class="flex flex-col items-center" in:fade={{ delay: 450 }}>
        <div class="w-16 h-16 rounded-full bg-[#f48c06] flex items-center justify-center text-white mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {@html icons.launch}
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Automated SEO</h3>
        <p class="text-gray-400 font-light">Climb the search rankings with powerful, automated SEO tools built right in.</p>
      </div>
    </div>
  </div>
</section>

</section>

<!-- 3) AI Content Agent Section -->
<section class="w-full py-20 bg-[#0B0B0B]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-12 text-center">Your AI Content Assistant</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Agent Interaction -->
      <div>
        <p class="text-gray-400 font-light mb-4">
          Stuck on what to write? Let our AI agent craft compelling content for you. Just provide a topic, and watch the magic happen.
        </p>
        <div class="space-y-4">
          <textarea
            bind:value={prompt}
            placeholder="e.g., 'Write a blog post about the benefits of drinking coffee'"
            class="w-full h-24 bg-[#1a1a1a] border border-[#2f2f2f] rounded-md px-3 py-2 text-white focus:ring-[#f48c06] focus:border-[#f48c06]"
          ></textarea>
          <div class="flex space-x-4">
            <button
              on:click={generateContent}
              disabled={isGenerating}
              class="w-full bg-[#f48c06] text-white font-semibold py-3 px-6 rounded-md hover-scale transition-250 disabled:opacity-50"
            >
              {isGenerating ? 'Generating...' : 'Generate Content'}
            </button>
            <button
              on:click={critiqueContent}
              disabled={isGenerating}
              class="w-full border border-[#f48c06] text-[#f48c06] font-semibold py-3 px-6 rounded-md hover:bg-[#f48c06] hover:text-white transition-250 disabled:opacity-50"
            >
              Critique Page Content
            </button>
          </div>
        </div>
      </div>
      <!-- Generated Content -->
      <div class="h-80 bg-[#1a1a1a] border border-[#2f2f2f] rounded-lg p-6 overflow-y-auto">
        {#if generatedContent}
          {@html generatedContent}
        {:else}
          <div class="text-gray-500">Your generated content will appear here...</div>
        {/if}
      </div>
    </div>
  </div>
</section>

</section>

<!-- 4) AI SEO Agent Section -->
<section class="w-full py-20 bg-[#111111]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-12 text-center">Dominate Search with AI Keywords</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Keyword Display -->
      <div class="h-80 bg-[#1a1a1a] border border-[#2f2f2f] rounded-lg p-6 overflow-y-auto">
        {#if keywords.length}
          <ul class="space-y-2">
            {#each keywords as keyword}
              <li class="bg-[#0B0B0B] p-2 rounded-md text-white font-light">{keyword}</li>
            {/each}
          </ul>
        {:else}
          <div class="text-gray-500">Your suggested keywords will appear here...</div>
        {/if}
      </div>
      <!-- Agent Interaction -->
      <div>
        <p class="text-gray-400 font-light mb-4">
          Not sure what keywords to target? Our AI agent will analyze your industry and suggest high-impact keywords to improve your search ranking.
        </p>
        <div class="space-y-4">
          <input
            type="text"
            bind:value={industry}
            placeholder="e.g., 'Coffee Shop'"
            class="w-full bg-[#1a1a1a] border border-[#2f2f2f] rounded-md px-3 py-2 text-white focus:ring-[#f48c06] focus:border-[#f48c06]"
          />
          <div class="flex space-x-4">
            <button
              on:click={getKeywords}
              disabled={isGeneratingKeywords}
              class="w-full bg-[#f48c06] text-white font-semibold py-3 px-6 rounded-md hover-scale transition-250 disabled:opacity-50"
            >
              {isGeneratingKeywords ? 'Analyzing...' : 'Get Keywords'}
            </button>
            <button
              on:click={analyzeSeo}
              disabled={isGeneratingKeywords}
              class="w-full border border-[#f48c06] text-[#f48c06] font-semibold py-3 px-6 rounded-md hover:bg-[#f48c06] hover:text-white transition-250 disabled:opacity-50"
            >
              Analyze Page SEO
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</section>

<!-- 5) AI Visual Designer Section -->
<section class="w-full py-20 bg-[#0B0B0B]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-12 text-center">Your AI Design Consultant</h2>
    <div class="text-center">
      <p class="text-gray-400 font-light mb-4">
        Let our AI design agent suggest visual improvements to make your site truly stand out.
      </p>
      <button
        on:click={getVisualSuggestions}
        disabled={isGeneratingVisuals}
        class="bg-[#f48c06] text-white font-semibold py-3 px-6 rounded-md hover-scale transition-250 disabled:opacity-50"
      >
        {isGeneratingVisuals ? 'Analyzing...' : 'Suggest Visual Improvements'}
      </button>
    </div>
    {#if visualSuggestions.length}
      <div class="mt-12 grid md:grid-cols-3 gap-8">
        {#each visualSuggestions as suggestion}
          <div class="bg-[#1a1a1a] border border-[#2f2f2f] rounded-lg p-6 text-center">
            <h3 class="text-lg font-semibold text-white mb-2">{suggestion.title}</h3>
            <p class="text-gray-400 font-light mb-4">{suggestion.description}</p>
            <button
              on:click={() => applyVisualSuggestion(suggestion.action)}
              class="w-full bg-transparent border border-[#f48c06] text-[#f48c06] font-semibold py-2 px-4 rounded-md hover:bg-[#f48c06] hover:text-white transition-250"
            >
              Apply
            </button>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- 6) CTA Section -->
<section class="w-full py-20" style="background-color: #111111;">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <h2 class="text-4xl md:text-5xl font-light mb-6" in:fade>Start Your Project Today</h2>
    <p class="text-gray-300 font-light mb-8 text-lg md:text-xl">
      Let’s create something amazing, together.
    </p>
    <a
      href="/contact"
      class="inline-block bg-[#f48c06] text-white font-bold py-4 px-8 rounded-md hover-scale transition-250 text-lg"
      in:fade
    >
      Create Your Website Now
    </a>
  </div>
</section>

<style>
  :global(img) {
    transition: transform 250ms ease-out;
  }

  @keyframes stepPop {
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); }
  }

  .animate-step {
    animation: stepPop 600ms ease-out forwards;
  }

  .delay-\[150ms\] {
    animation-delay: 150ms;
  }

  .delay-\[300ms\] {
    animation-delay: 300ms;
  }

  .dotted-bg {
    background-color: #0b0b0b;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 18px 18px;
  }

  .blob {
    width: 400px;
    height: 400px;
    filter: drop-shadow(0 0 20px rgba(244, 140, 6, 0.5));
    animation: morph 10s ease-in-out infinite;
  }

  .blob path {
    stroke: url(#glowGradient);
    stroke-width: 4;
    fill: #0B0B0B;
  }

  .spikes {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @keyframes morph {
    0% { transform: translate(100 100) scale(1) rotate(0deg); }
    25% { transform: translate(110 90) scale(1.05) rotate(5deg); }
    50% { transform: translate(90 110) scale(0.95) rotate(-5deg); }
    75% { transform: translate(105 95) scale(1.1) rotate(3deg); }
    100% { transform: translate(100 100) scale(1) rotate(0deg); }
  }

  @media (max-width: 768px) {
    .blob {
      width: 300px;
      height: 300px;
    }
  }
</style>

<svg>
  <defs>
    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f48c06;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ffbb33;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>