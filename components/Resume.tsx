import profile from "@/data/profile";

export default function Resume() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-xl font-semibold">Resume</h2>
      
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block rounded-full border border-black/10 px-3 py-1 text-sm text-neutral-700"
      >
        View Resume
      </a>
    </section>
  );
}
