import profile from "@/data/profile";

export default function About() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-xl font-semibold">About</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">{profile.shortBio}</p>
    </section>
  );
}
