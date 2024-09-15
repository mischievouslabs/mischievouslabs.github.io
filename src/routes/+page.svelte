<script>
  import { onMount } from 'svelte';
  import { Card } from 'flowbite-svelte';

  let showWelcomeMessage = false;

  const featuredGame = {
    title: "Quantum Quandary",
    imageUrl: "/api/placeholder/1200/400",
    description: "Dive into the quirky world of quantum mechanics! Can you solve the puzzles and save Schrödinger's cat?"
  };

  const games = [
    { title: "Bubble Blast", imageUrl: "/api/placeholder/300/200", rating: 4.8 },
    { title: "Neon Nexus", imageUrl: "/api/placeholder/300/200", rating: 4.5 },
    { title: "Quantum Quandary", imageUrl: "/api/placeholder/300/200", rating: 4.7 },
    { title: "Gadget Galore", imageUrl: "/api/placeholder/300/200", rating: 4.3 },
    { title: "Zany Zapper", imageUrl: "/api/placeholder/300/200", rating: 4.6 },
    { title: "Pixel Potion", imageUrl: "/api/placeholder/300/200", rating: 4.2 },
  ];

  onMount(() => {
    setTimeout(() => {
      showWelcomeMessage = true;
    }, 3000);
  });
</script>

<div class="min-h-screen bg-[#2b2c37] text-gray-300 font-laboratory relative overflow-hidden">
  <div class="lab-bg-animation"></div>
  
  <header class="bg-gradient-to-r from-[#3d3e4d] to-[#2b2c37] shadow-lg border-b-2 border-[#4a4b5a] relative z-10">
    <div class="container mx-auto px-4 py-6 flex items-center justify-between">
      <div class="flex items-center">
        <img style="max-height: 100px;" src='/logo.svg' alt="Mischievous Labs Logo"/>
        <h1 class="text-2xl font-bold text-blue-400" style="font-family: 'Orbitron', sans-serif;">Mischievous Labs</h1>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#featured" class="text-gray-300 hover:text-blue-400 transition-colors">Featured</a></li>
          <li><a href="#games" class="text-gray-300 hover:text-blue-400 transition-colors">Games</a></li>
          <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8 relative z-10">
    <section class="mb-12">
      <h2 id='featured' class="text-3xl font-bold text-center mb-8 text-blue-400" style="font-family: 'Orbitron', sans-serif;">Featured Experiment</h2>
      <Card class="bg-[#2d2e39] rounded-lg shadow-lg overflow-hidden border-2 border-[#4a4b5a] relative w-90%">
        <img src={featuredGame.imageUrl} alt={featuredGame.title} class="w-full h-80 object-cover opacity-70" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#2d2e39] to-transparent"></div>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <svg class="text-blue-400 animate-spin-slow" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9"></path>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </div>
        <div class="p-6 relative z-10">
          <h3 class="text-2xl font-semibold mb-2 text-blue-300" style="font-family: 'Orbitron', sans-serif;">{featuredGame.title}</h3>
          <p class="text-gray-300 mb-4">{featuredGame.description}</p>
        </div>
      </Card>
    </section>

    <section>
      <h2 id='games' class="text-3xl font-bold text-center mb-8 text-blue-400" style="font-family: 'Orbitron', sans-serif;">More Wacky Inventions</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each games as game}
          <Card class="bg-[#2d2e39] rounded-lg shadow-md overflow-hidden border-2 border-[#4a4b5a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 relative group cursor-pointer">
            <img src={game.imageUrl} alt={game.title} class="w-full h-48 object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#2d2e39] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg class="text-blue-400 animate-bounce" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 2v7.31"></path>
                <path d="M14 9.3V1.99"></path>
                <path d="M8.5 2h7"></path>
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
                <path d="M5.52 16h12.96"></path>
              </svg>
            </div>
            <div class="p-4 relative z-10">
              <h3 class="text-lg font-semibold mb-2 text-blue-300" style="font-family: 'Orbitron', sans-serif;">{game.title}</h3>
              <div class="flex items-center">
                <svg class="text-blue-400 mr-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 3h6v11h2v3h-4v4h-4v-4H5v-3h2V3Z"></path>
                </svg>
                <span class="text-gray-300">{game.rating}/5</span>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </section>
  </main>

  <footer class="bg-gradient-to-r from-[#3d3e4d] to-[#2b2c37] text-gray-300 py-6 mt-12 border-t-2 border-[#4a4b5a] relative z-10">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; 2024 Mischievous Labs. All experiments approved by our definitely real ethics board.</p>
    </div>
  </footer>

  {#if showWelcomeMessage}
    <div class="fixed bottom-4 right-4 bg-[#3d3e4d] text-blue-400 p-4 rounded-lg shadow-lg animate-fade-in-out">
      <p class="font-bold">Welcome to the lab!</p>
      <p>Let's make some scientific mischief!</p>
    </div>
  {/if}
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  :global(body) {
    background-color: #2b2c37;
    color: #d1d5db;
    font-family: 'Arial', sans-serif;
  }

  .font-laboratory {
    font-family: 'Arial', sans-serif;
  }

  .lab-bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
    filter: blur(100px);
    opacity: 0.3;
    animation: bgPulse 10s ease-in-out infinite alternate;
  }

  @keyframes bgPulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  :global(.animate-spin-slow) {
    animation: spin 10s linear infinite;
  }

  @keyframes fadeInOut {
    0%, 100% { opacity: 0; transform: translateY(20px); }
    10%, 90% { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-out {
    animation: fadeInOut 5s ease-in-out;
  }
</style>