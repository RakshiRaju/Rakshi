import profile from "@/data/profile";

export default function ForgeSection() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-xl font-semibold">About FORGE</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        FORGE is Zephvion&apos;s apprenticeship program, pairing new engineers with
        real-world projects and hands-on mentorship to build practical software
        skills outside the traditional classroom setting.
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-neutral-400">Track</dt>
          <dd className="font-medium">{profile.role}</dd>
        </div>
        <div>
          <dt className="text-neutral-400">Cohort</dt>
          <dd className="font-medium">{profile.forgeCohort}</dd>
        </div>
      </dl>
    </section>
  );
}
