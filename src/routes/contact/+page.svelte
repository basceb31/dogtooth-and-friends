<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    alert(`Thank you, ${name}! We'll get back to you soon.`);
    // Real deployment: integrate a form handler or email service.
  }
</script>

<section class="min-h-screen bg-[#0B0B0B] text-white pt-8 px-4 pb-16">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
    <p class="text-gray-300 font-light mb-6">
      We’d love to hear from you! Fill out the form below or send us an email at 
      <strong>hello@dogtoothandfriends.com</strong>.
    </p>

    <form class="flex flex-col gap-4" on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="name" class="block text-sm font-light mb-1">Name</label>
        <input
          id="name"
          bind:value={name}
          required
          class="w-full p-2 rounded-md bg-[#1b1b1b] border border-[#333] text-white"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-light mb-1">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          class="w-full p-2 rounded-md bg-[#1b1b1b] border border-[#333] text-white"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-light mb-1">Message</label>
        <textarea
          id="message"
          rows="5"
          bind:value={message}
          required
          class="w-full p-2 rounded-md bg-[#1b1b1b] border border-[#333] text-white"
        ></textarea>
      </div>

      <button 
        type="submit"
        class="bg-[#f48c06] text-white px-6 py-2 rounded-md font-light hover-scale transition-250 self-start"
      >
        Send
      </button>
    </form>
  </div>
</section>
