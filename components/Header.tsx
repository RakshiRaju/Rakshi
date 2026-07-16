import Image from "next/image";
import profile from "@/data/profile";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="h-32 w-32 overflow-hidden rounded-full border border-black/10 bg-neutral-100">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-neutral-600">{profile.role}</p>
        <p className="mt-1 text-sm text-neutral-400">{profile.apprenticeId}</p>
      </div>
    </header>
  );
}
