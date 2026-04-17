const teamMembers = [
  {
    name: "Ayesha Khan",
    role: "Product Lead",
    bio: "Guiding the product vision and keeping the team aligned on mission-first experiences.",
    initials: "AK",
    color: "bg-amber-300 text-amber-950",
  },
  {
    name: "Marcus Lee",
    role: "Engineering Manager",
    bio: "Building reliable systems and helping the team ship scalable features together.",
    initials: "ML",
    color: "bg-sky-300 text-sky-950",
  },
  {
    name: "Nina Patel",
    role: "Design Strategist",
    bio: "Crafting interfaces that feel intuitive, polished, and delightful across every screen.",
    initials: "NP",
    color: "bg-fuchsia-300 text-fuchsia-950",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Team introduction
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Meet the people shaping our product.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              A short demo page to introduce team members, highlight roles, and share what each person brings to the project.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl bg-zinc-100 p-6 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50 sm:w-[300px]">
            <p className="text-sm uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">Fast facts</p>
            <div className="space-y-3 text-sm leading-6">
              <p>
                <span className="font-semibold">3 team members</span> collaborating across product, engineering, and design.
              </p>
              <p>
                <span className="font-semibold">Shared goal:</span> make every experience clear, useful, and memorable.
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
              <div className={`flex h-24 w-24 items-center justify-center rounded-3xl ${member.color}`}>
                <span className="text-2xl font-semibold">{member.initials}</span>
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                  {member.role}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{member.name}</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
