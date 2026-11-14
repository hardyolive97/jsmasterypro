export default function IntroPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-cyan-500/30">
      {/* Zero-dependency animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Glowing Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="z-10 max-w-4xl">
          <div className="animate-fade-in mb-6">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-sm">
              Available for SDE Roles
            </span>
          </div>

          <h1 className="animate-fade-in delay-100 mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Scalable Systems.
            </span>
          </h1>

          <p className="animate-fade-in delay-200 mx-auto mb-10 max-w-2xl text-lg text-neutral-400 sm:text-xl">
            I build high-performance web applications and robust backend architectures. 
            Focused on clean code, optimized algorithms, and seamless user experiences. 
            Let&apos;s build something extraordinary.
          </p>

          <div className="animate-fade-in delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-neutral-100 px-8 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95">
              View Projects
            </button>
            <button className="rounded-lg border border-neutral-800 bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95">
              Read the Blog
            </button>
          </div>
        </div>
      </section>

      {/* Additional Info / Technical Stack Section */}
      <section className="border-t border-neutral-900 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Frontend Card */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-neutral-900 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
              {/* Raw SVG for Terminal Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-4 h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              <h3 className="mb-3 text-xl font-bold">Frontend Development</h3>
              <p className="mb-4 text-sm text-neutral-400">
                Crafting responsive, type-safe interfaces with modern React paradigms. 
                Emphasis on Server Components and performance.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-neutral-300">
                <li className="rounded-md bg-neutral-800 px-2 py-1">Next.js</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">TypeScript</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend Card */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-neutral-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">
              {/* Raw SVG for Server Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-4 h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
              <h3 className="mb-3 text-xl font-bold">Backend Engineering</h3>
              <p className="mb-4 text-sm text-neutral-400">
                Designing RESTful APIs and microservices. Implementing rate limiters, 
                job queues, and secure authentication flows.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-neutral-300">
                <li className="rounded-md bg-neutral-800 px-2 py-1">Node.js</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">Express</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">JWT</li>
              </ul>
            </div>

            {/* Database & Architecture Card */}
            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-neutral-900 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]">
              {/* Raw SVG for Database Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-4 h-8 w-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <h3 className="mb-3 text-xl font-bold">Data & Architecture</h3>
              <p className="mb-4 text-sm text-neutral-400">
                Structuring complex data relationships and optimizing query speeds 
                using relational databases alongside caching layers.
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-neutral-300">
                <li className="rounded-md bg-neutral-800 px-2 py-1">PostgreSQL</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">Redis</li>
                <li className="rounded-md bg-neutral-800 px-2 py-1">System Design</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}