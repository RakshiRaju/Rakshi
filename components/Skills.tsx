import profile from "@/data/profile";

export default function Skills() {
  if (profile.skills.length === 0) return null;

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-black/10 px-3 py-1 text-sm text-neutral-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
