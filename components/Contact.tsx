import profile from "@/data/profile";

export default function Contact() {
  const { email, phone, linkedin, github } = profile.contact;
  const links = [
    email && { label: "Email", href: `mailto:${email}` },
    phone && { label: "Phone", href: `tel:${phone}` },
    linkedin && { label: "LinkedIn", href: linkedin },
    github && { label: "GitHub", href: github },
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) return null;

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-xl font-semibold">Contact</h2>
      <ul className="mt-3 flex flex-wrap gap-4 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-neutral-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
