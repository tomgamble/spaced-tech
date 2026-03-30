export default function Home() {
  const navItems = ["Vision", "Products", "Technology", "Founder", "Contact"];

  return (
    <main className="bg-black text-white scroll-smooth selection:bg-white selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#hero" className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.38em] text-white/90">MIRAI</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/45">
              Technology for Tomorrow
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/65 transition duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:scale-[1.03]"
          >
            Contact
          </a>
        </div>
      </header>

      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center md:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(88,120,255,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_20%_80%,rgba(60,90,180,0.12),transparent_24%),linear-gradient(to_bottom,#000000,#05070d_55%,#000000)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:92px_92px] opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute right-[4%] top-[22%] hidden h-[520px] w-[300px] rotate-[12deg] rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.65)] xl:block">
          <div className="rounded-[2.6rem] border border-white/10 bg-black p-4">
            <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/10" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(to_bottom,#07090f,#020305)] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.32em] text-white/35">SPACED</div>
                  <div className="mt-2 text-2xl font-semibold">Fine Arts Lot</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Live
                </div>
              </div>

              <div className="mt-10">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Available Spots</div>
                <div className="mt-3 text-7xl font-semibold tracking-tight">48</div>
                <div className="mt-3 text-sm text-white/50">Real-time availability</div>
              </div>

              <div className="mt-10">
                <div className="mb-3 flex items-center justify-between text-sm text-white/55">
                  <span>Occupancy</span>
                  <span>76%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[76%] rounded-full bg-white" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs text-white/45">Trend</div>
                  <div className="mt-2 text-lg font-medium">Peak 11:20</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs text-white/45">Circling</div>
                  <div className="mt-2 text-lg font-medium">7 est.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[8%] top-[34%] hidden h-[240px] w-[240px] rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl xl:block">
          <div className="text-xs uppercase tracking-[0.28em] text-white/40">First Product</div>
          <div className="mt-4 text-3xl font-semibold">SPACED</div>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Intelligent parking and mobility infrastructure for real-world systems.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/72 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white/85" />
            Technology for Tomorrow
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[6.4rem]">
            Building the systems
            <span className="block text-white/72">that power tomorrow.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/62 md:text-2xl md:leading-9">
            Mirai builds intelligent systems for the future of infrastructure,
            mobility, and the physical world — designed to help society operate smarter,
            faster, and more efficiently.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#vision"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03]"
            >
              Explore the Vision
            </a>
            <a
              href="#products"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="relative flex min-h-screen items-center border-t border-white/10 bg-[#04070d] px-6 py-24 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Vision</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Build the systems that move society forward.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-white/62">
            <p>
              Society depends on intelligent infrastructure — movement, access, logistics,
              and the systems that connect them. Mirai exists to build better technology
              for that future.
            </p>
            <p>
              The goal is not to be a single-purpose company. It is to build premium,
              category-defining products that improve how the real world functions at scale.
            </p>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="relative flex min-h-screen items-center border-t border-white/10 bg-[#05070a] px-6 py-24 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Products</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              SPACED is our first product.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              SPACED is an intelligent parking and mobility platform designed to reduce congestion,
              improve navigation, and help institutions manage infrastructure with real-time visibility.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
                <div className="text-2xl font-semibold">Real-time</div>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Live lot awareness, occupancy visibility, and faster decisions.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
                <div className="text-2xl font-semibold">Predictive</div>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Demand forecasting built from historical and active movement patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle,rgba(88,120,255,0.18),transparent_60%)] blur-2xl" />

            <div className="relative mx-auto w-full max-w-sm rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
              <div className="rounded-[2.6rem] border border-white/10 bg-black p-4">
                <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-white/10" />

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(to_bottom,#07090f,#020305)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-white/35">SPACED</div>
                      <div className="mt-2 text-2xl font-semibold">Fine Arts Lot</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Live Demo
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/35">Available Spots</div>
                    <div className="mt-3 text-7xl font-semibold tracking-tight">48</div>
                    <div className="mt-3 text-sm text-white/50">Updated live</div>
                  </div>

                  <div className="mt-10">
                    <div className="mb-3 flex items-center justify-between text-sm text-white/55">
                      <span>Occupancy</span>
                      <span>76%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div className="h-3 w-[76%] rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs text-white/45">Trend</div>
                      <div className="mt-2 text-lg font-medium">Peak 11:20</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs text-white/45">Circling</div>
                      <div className="mt-2 text-lg font-medium">7 est.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:block">
              <div className="text-xs uppercase tracking-[0.25em] text-white/40">First Product</div>
              <div className="mt-2 text-xl font-semibold">Built for real infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="technology"
        className="relative flex min-h-screen items-center border-t border-white/10 bg-black px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Technology</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Premium design. Real-world systems. Scalable execution.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Mirai combines real-time data, predictive intelligence, and clean user experience
              into products that feel premium while solving practical, high-impact problems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
              <div className="text-lg font-semibold">Infrastructure Intelligence</div>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Systems built to understand movement, capacity, demand, and efficiency.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
              <div className="text-lg font-semibold">Predictive Products</div>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Technology that anticipates pressure before it becomes friction.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
              <div className="text-lg font-semibold">Category Vision</div>
              <p className="mt-3 text-sm leading-7 text-white/55">
                A long-term platform company, not a one-product business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="relative flex min-h-screen items-center border-t border-white/10 bg-[#030406] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Founder</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Tom Gamble</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/62">
            Building Mirai around a bigger vision: create future-focused technology
            that helps society operate with more intelligence, better design, and stronger systems.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="relative border-t border-white/10 bg-[#05070a] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-[rgba(70,110,220,0.10)] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/40">Contact</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Build with us.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                For partnerships, pilots, product conversations, or long-term opportunities,
                Mirai is building toward a much larger future.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href="mailto:hello@mirai.tech"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03]"
              >
                hello@mirai.tech
              </a>
              <div className="text-sm text-white/40">Replace with your real email before launch.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

