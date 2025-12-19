<script>
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { icons, services, projects, testimonials } from '$lib/data';

  export const prerender = true;
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

    <!-- Animated Blob with Spikes -->
    <div class="md:w-1/2 flex justify-center" in:fade={{ delay: 500 }}>
      <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#0B0B0B"
          d="M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z"
          transform="translate(100 100)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z;
              M50.3,-78.2C65.1,-69.5,77.5,-54.8,82.7,-38.2C87.9,-21.6,85.9,-3.2,80.5,14.7C75.1,32.6,66.3,49.4,53.2,62.7C40.1,76,22.7,85.8,4.2,84.5C-14.3,83.2,-34.6,70.8,-49.2,57.2C-63.8,43.6,-72.7,28.8,-76.5,12.3C-80.3,-4.2,-79,17.8,-72.5,36.7C-66,55.6,-54.3,71.4,-39.5,80.2C-24.7,89,-12.3,90.8,1.5,89.7C15.3,88.6,30.6,84.5,50.3,-78.2Z;
              M46.2,-74.5C60.1,-66.8,71.8,-54.2,78.3,-39.2C84.8,-24.2,86.1,-6.8,82.7,9.7C79.3,26.2,71.2,41.8,58.5,55.2C45.8,68.6,28.5,79.8,10.2,82.5C-8.1,85.2,-27.3,79.4,-42.5,69.2C-57.7,59,-68.9,44.4,-74.5,28.2C-80.1,12,-80.1,-5.8,-74.5,-22.2C-68.9,-38.6,-57.7,-53.4,-43.5,-64.2C-29.3,-75,-14.6,-81.8,0.5,-82.5C15.6,-83.2,31.2,-77.8,46.2,-74.5Z;
              M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z"
          />
        </path>
        <!-- Spikes as a separate path -->
        <path
          fill="none"
          stroke="url(#glowGradient)"
          stroke-width="4"
          d="M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z"
          transform="translate(100 100)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z;
              M50.3,-78.2C65.1,-69.5,77.5,-54.8,82.7,-38.2C87.9,-21.6,85.9,-3.2,80.5,14.7C75.1,32.6,66.3,49.4,53.2,62.7C40.1,76,22.7,85.8,4.2,84.5C-14.3,83.2,-34.6,70.8,-49.2,57.2C-63.8,43.6,-72.7,28.8,-76.5,12.3C-80.3,-4.2,-79,17.8,-72.5,36.7C-66,55.6,-54.3,71.4,-39.5,80.2C-24.7,89,-12.3,90.8,1.5,89.7C15.3,88.6,30.6,84.5,50.3,-78.2Z;
              M46.2,-74.5C60.1,-66.8,71.8,-54.2,78.3,-39.2C84.8,-24.2,86.1,-6.8,82.7,9.7C79.3,26.2,71.2,41.8,58.5,55.2C45.8,68.6,28.5,79.8,10.2,82.5C-8.1,85.2,-27.3,79.4,-42.5,69.2C-57.7,59,-68.9,44.4,-74.5,28.2C-80.1,12,-80.1,-5.8,-74.5,-22.2C-68.9,-38.6,-57.7,-53.4,-43.5,-64.2C-29.3,-75,-14.6,-81.8,0.5,-82.5C15.6,-83.2,31.2,-77.8,46.2,-74.5Z;
              M44.7,-76.5C58.2,-69.8,70,-56.6,77.6,-41.7C85.2,-26.8,88.6,-10.2,86.7,5.7C84.8,21.6,77.6,36.8,65.7,48.7C53.8,60.6,37.2,69.2,19.7,74.5C2.2,79.8,-16.2,81.8,-33.5,77.2C-50.8,72.6,-67,61.4,-76.5,46.7C-86,32,-88.8,13.6,-86.7,-3.7C-84.6,-21,-77.6,-37,-66.7,-50.7C-55.8,-64.4,-41,-75.6,-25.5,-80.2C-10,-84.8,6.2,-82.8,22.5,-77.2C38.8,-71.6,55.2,-62.4,44.7,-76.5Z"
          />
        </path>
        <!-- Spikes -->
        <path
          class="spikes"
          fill="none"
          stroke="url(#glowGradient)"
          stroke-width="2"
          d="M0,100 L10,90 L20,100 L30,110 L40,100 L50,90 L60,100 L70,110 L80,100 L90,90 L100,100 L110,110 L120,100 L130,90 L140,100 L150,110 L160,100 L170,90 L180,100 L190,110 L200,100"
          transform="translate(0 0)"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,100 L10,90 L20,100 L30,110 L40,100 L50,90 L60,100 L70,110 L80,100 L90,90 L100,100 L110,110 L120,100 L130,90 L140,100 L150,110 L160,100 L170,90 L180,100 L190,110 L200,100;
              M0,100 L10,95 L20,100 L30,105 L40,100 L50,95 L60,100 L70,105 L80,100 L90,95 L100,100 L110,105 L120,100 L130,95 L140,100 L150,105 L160,100 L170,95 L180,100 L190,105 L200,100;
              M0,100 L10,92 L20,100 L30,108 L40,100 L50,92 L60,100 L70,108 L80,100 L90,92 L100,100 L110,108 L120,100 L130,92 L140,100 L150,108 L160,100 L170,92 L180,100 L190,108 L200,100;
              M0,100 L10,90 L20,100 L30,110 L40,100 L50,90 L60,100 L70,110 L80,100 L90,90 L100,100 L110,110 L120,100 L130,90 L140,100 L150,110 L160,100 L170,90 L180,100 L190,110 L200,100"
          />
        </path>
      </svg>
    </div>
  </div>
</section>

<!-- 2) Advanced Services Section -->
<section class="w-full py-16 relative overflow-hidden">
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
          <div
            class="absolute inset-0 bg-center bg-cover"
            style="background-image: url({feat.image}); filter: brightness(0.5);"
          ></div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          <div class="relative p-6 flex flex-col justify-end h-full">
            <h3 class="text-xl font-semibold mb-2 text-white">{feat.title}</h3>
            <p class="text-sm text-gray-300">{feat.description}</p>
			<div class="mt-4">
				<a href="/services" class="text-sm font-semibold text-[#f48c06] hover:underline">{feat.cta} →</a>
			</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 3) How It Works Section -->
<section class="w-full py-20 bg-[#0B0B0B] min-h-[700px] md:min-h-[850px]">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
    <div class="md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-light mb-4">How It Works</h2>
      <p class="text-gray-300 font-light mb-6">
        Experience a smooth, transparent process for developing powerful digital solutions.
      </p>
      <div class="space-y-14 relative pl-10">
        <div class="absolute top-0 bottom-0 left-4 border-l border-gray-600" style="margin-left: 7px;"></div>
        <div class="relative flex items-start">
          <div 
            class="w-12 h-12 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white animate-step"
            style="margin-left: -2rem;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {@html icons.consultation}
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-[#f48c06] mb-1">Consultation & Planning</h3>
            <p class="text-gray-300 font-light">
              Share your project needs and vision with us. We’ll chart a roadmap tailored to your goals.
            </p>
          </div>
        </div>
        <div class="relative flex items-start">
          <div 
            class="w-12 h-12 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white animate-step delay-[150ms]"
            style="margin-left: -2rem;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {@html icons.development}
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-[#f48c06] mb-1">Design & Development</h3>
            <p class="text-gray-300 font-light">
              Our team crafts intuitive interfaces and solid architectures, ensuring efficiency and scalability.
            </p>
          </div>
        </div>
        <div class="relative flex items-start">
          <div 
            class="w-12 h-12 flex-shrink-0 rounded-full bg-[#f48c06] flex items-center justify-center text-white animate-step delay-[300ms]"
            style="margin-left: -2rem;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {@html icons.launch}
            </svg>
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

<!-- 4) Elevate Your Brand Section -->
<section class="w-full py-16 relative overflow-hidden">
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
    <div class="md:w-1/2">
      <h2 class="text-3xl md:text-4xl font-light mb-4">Elevate Your Brand</h2>
      <p class="text-gray-300 mb-4">
        From personal portfolios to enterprise-level platforms, our marketing expertise helps you stand out in a crowded digital space.
      </p>
      <p class="text-gray-300">
        Gain more leads, optimize conversions, and let your story shine with targeted campaigns backed by data and creativity.
      </p>
    </div>
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
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url({project.image}); filter: brightness(0.6);"
          ></div>
          <div 
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
          ></div>
          <div class="relative p-6 flex flex-col justify-end h-full">
            <h3 class="text-xl font-light text-[#f48c06] mb-2">
              {project.title}
            </h3>
            <p class="text-gray-300 font-light mb-4">
              {project.description}
            </p>
            <a
              href="/case-studies"
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

<!-- 5.5) Testimonials Section -->
<section class="w-full py-16 bg-[#111111]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-light mb-8 text-center" in:fade>What Our Clients Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each testimonials as testimonial, i (testimonial.author)}
        <div
          class="bg-[#0B0B0B] border border-[#2f2f2f] rounded-lg p-6 flex flex-col justify-between hover-scale transition-250"
          in:slide={{ delay: 200 * (i + 1) }}
        >
          <p class="text-gray-300 font-light mb-4">"{testimonial.content}"</p>
          <div>
            <p class="text-white font-semibold">{testimonial.author}</p>
            <p class="text-sm text-[#f48c06]">{testimonial.title}</p>
          </div>
        </div>
      {/each}
    </div>
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
      Get Started Now
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