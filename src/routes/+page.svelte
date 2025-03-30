<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Some sample data for "Advanced Services"
  const services = [
    {
      title: "Leverage the Latest LLMs",
      description: "Incorporate advanced language models to deliver natural, engaging responses.",
      image: "https://images.unsplash.com/photo-1581091012184-6f1ebb9f95fb?auto=format&fit=crop&w=800"
    },
    {
      title: "Import All Your Knowledge Sources",
      description: "Integrate info from docs, PDFs, or entire websites for comprehensive coverage.",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800"
    },
    {
      title: "Build Your AI Development Portfolio",
      description: "Showcase your AI projects, stand out in the cutting-edge field of intelligent solutions.",
      image: "https://images.unsplash.com/photo-1637754105163-c1359ebaa112?auto=format&fit=crop&w=800"
    },
    {
      title: "Automatically Sync with Your Databases",
      description: "Capture user inputs in a vector DB and seamlessly sync with third-party systems.",
      image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=800"
    }
  ];

  // Some sample data for "Recent Projects"
  const projects = [
    {
      title: "Portfolio Platform",
      description: "Modern portfolio for creative professionals",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800"
    },
    {
      title: "E-commerce Store",
      description: "Fully featured online clothing store",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800"
    }
  ];
</script>

<!-- 1) Hero Section -->
<section class="w-full bg-[#0B0B0B]">
  <div class="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
    <!-- Text Content -->
    <div class="md:w-1/2" in:fade={{ delay: 100 }}>
      <span
        class="inline-flex items-center mb-4 bg-[#f48c06]/20 text-[#f48c06] font-light px-3 py-1 rounded-full transition-250 hover-scale"
      >
        <span class="w-2 h-2 bg-[#f48c06] rounded-full inline-block mr-2"></span>
        Available for New Projects
      </span>

      <h1
        class="text-4xl md:text-5xl font-light leading-tight mb-4 transition-250"
        in:slide={{ delay: 200, easing: quintOut }}
      >
        Helping you turn <br class="hidden md:block" />
        <span class="text-[#f48c06]">ideas</span> into reality
      </h1>

      <p class="mt-2 text-gray-300 max-w-xl font-light">
        We help you build and develop websites, web apps, mobile apps, and more.
        Trusted for years in providing reliable digital solutions.
      </p>

      <!-- Stats -->
      <div class="flex space-x-8 mt-8" transition:slide={{ delay: 300 }}>
        <div class="text-white">
          <p class="text-2xl font-light">250+</p>
          <p class="text-sm text-gray-400">Projects Delivered</p>
        </div>
        <div class="text-white">
          <p class="text-2xl font-light">99%</p>
          <p class="text-sm text-gray-400">Client Satisfaction</p>
        </div>
        <div class="text-white">
          <p class="text-2xl font-light">24/7</p>
          <p class="text-sm text-gray-400">Support Available</p>
        </div>
      </div>

      <a
        href="/contact"
        class="inline-block bg-[#f48c06] text-white font-semibold py-3 px-6 rounded-md mt-8 hover-scale transition-250"
        in:fade={{ delay: 400 }}
      >
        Get Your Free Project Estimate
      </a>
    </div>

    <!-- Hero Image -->
    <div class="md:w-1/2 flex justify-center" in:fade={{ delay: 500 }}>
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
        alt="Web development"
        class="rounded-lg shadow-xl hover-scale transition-250"
      />
    </div>
  </div>
</section>

<!-- 2) Advanced Services Section with dotted background -->
<section class="w-full py-16 relative overflow-hidden">
  <!-- Static dotted background -->
  <div class="absolute inset-0 -z-10 dotted-bg"></div>

  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-8 text-center" in:fade>
      Our Advanced Services
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each services as feat, i (feat.title)}
        <div
          class="relative overflow-hidden rounded-lg border border-[#2f2f2f] hover-scale transition-250"
          style="min-height: 280px;"
          in:slide={{ delay: 150 * (i + 1) }}
        >
          <!-- Background image with dark overlay -->
          <div
            class="absolute inset-0 bg-center bg-cover"
            style="background-image: url({feat.image}); filter: brightness(0.5);"
          ></div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

          <!-- Content -->
          <div class="relative p-6 flex flex-col justify-end h-full">
            <h3 class="text-xl font-semibold mb-2 text-white">{feat.title}</h3>
            <p class="text-sm text-gray-300">{feat.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 3) "How It Works" Section - Creative Timeline Style -->
<section class="w-full py-20 bg-[#0B0B0B] min-h-[700px] md:min-h-[850px]">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
    <!-- Left Column: Vertical timeline steps -->
    <div class="md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-light mb-4">How It Works</h2>
      <p class="text-gray-300 font-light mb-6">
        Experience a smooth, transparent process for developing powerful digital solutions.
      </p>

      <div class="space-y-14 relative pl-10">
        <!-- Vertical Line -->
        <div class="absolute top-0 bottom-0 left-4 border-l border-gray-600" style="margin-left: 7px;"></div>

        <!-- Step 1 -->
        <div class="relative flex items-start">
          <div 
            class="w-6 h-6 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white text-xs font-bold animate-step"
            style="margin-left: -2rem;"
          >
            1
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-[#f48c06] mb-1">Consultation & Planning</h3>
            <p class="text-gray-300 font-light">
              Share your project needs and vision with us. We’ll chart a roadmap tailored to your goals.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative flex items-start">
          <div 
            class="w-6 h-6 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white text-xs font-bold animate-step delay-[150ms]"
            style="margin-left: -2rem;"
          >
            2
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-[#f48c06] mb-1">Design & Development</h3>
            <p class="text-gray-300 font-light">
              Our team crafts intuitive interfaces and solid architectures, ensuring efficiency and scalability.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative flex items-start">
          <div 
            class="w-6 h-6 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white text-xs font-bold animate-step delay-[300ms]"
            style="margin-left: -2rem;"
          >
            3
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-[#f48c06] mb-1">Launch & Ongoing Support</h3>
            <p class="text-gray-300 font-light">
              We deploy your solution and remain on standby for continuous improvements and updates.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Image with stats card -->
    <div class="md:w-1/2 relative overflow-visible flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800"
        alt="Team Meeting"
        class="rounded-lg shadow-md max-w-full brightness-50"
        style="width: 100%; max-width: 500px; object-fit: cover;"
      />
      <div
        class="absolute bottom-4 left-10 bg-[#f48c06] text-white p-4 rounded-md shadow-xl"
        style="min-width: 200px;"
      >
        <p class="text-xl font-bold mb-1">3+</p>
        <p class="text-xs font-light">Years of Experience</p>
        <p class="text-xl font-bold mt-3">150+</p>
        <p class="text-xs font-light">Projects Delivered</p>
      </div>
    </div>
  </div>
</section>

<!-- 4) Elevate Your Brand Section with dotted background -->
<section class="w-full py-16 relative overflow-hidden">
  <!-- Dotted background -->
  <div
    class="absolute inset-0 -z-10"
    style="
      background-color: #111111; 
      background-image: radial-gradient(
        circle at 1px 1px, 
        rgba(255,255,255,0.03) 1px, 
        transparent 0
      ); 
      background-size: 20px 20px;
    "
  ></div>

  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
    <!-- Text block -->
    <div class="md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-light mb-4">Elevate Your Brand</h2>
      <p class="text-gray-300 mb-4">
        From personal portfolios to enterprise-level platforms, our marketing expertise helps you stand out in a crowded digital space.
      </p>
      <p class="text-gray-300">
        Gain more leads, optimize conversions, and let your story shine with targeted campaigns backed by data and creativity.
      </p>
    </div>

    <!-- Marketing illustration -->
    <div class="md:w-1/2 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800"
        alt="Marketing illustration"
        class="rounded-md shadow-md hover-scale transition-250"
        style="max-height: 300px; object-fit: cover;"
      />
    </div>
  </div>
</section>

<!-- 5) Recent Projects Section -->
<section class="w-full py-16 bg-[#0B0B0B]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-8" in:fade>Recent Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project, i (project.title)}
        <div
          class="relative overflow-hidden rounded-lg border border-[#2f2f2f] hover-scale transition-250"
          style="min-height: 320px;"
          in:slide={{ delay: 200 * (i + 1) }}
        >
          <!-- Background image with a dark overlay -->
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url({project.image}); filter: brightness(0.6);"
          ></div>
          <div 
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
          ></div>

          <!-- Text/CTA content -->
          <div class="relative p-6 flex flex-col justify-end h-full">
            <h3 class="text-xl font-light text-[#f48c06] mb-2">
              {project.title}
            </h3>
            <p class="text-gray-300 font-light mb-4">
              {project.description}
            </p>
            <a
              href="#"
              class="inline-block text-white border border-[#2f2f2f] backdrop-blur font-semibold py-3 px-6 rounded-md hover:bg-black transition-250"
            >
              View Case Study →
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 6) CTA Section (Final) - bigger for emphasis -->
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
      Get Started Now
    </a>
  </div>
</section>

<style>
  /* Minimal local overrides or transitions.
     We rely on Tailwind + your global classes for layout. */
  :global(img) {
    transition: transform 250ms ease-out;
  }

  @keyframes stepPop {
    0% {
      transform: scale(0.6);
      opacity: 0;
    }
    60% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
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
    background-color: #0b0b0b; /* Match your section's base color */
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 18px 18px;
  }
</style>
