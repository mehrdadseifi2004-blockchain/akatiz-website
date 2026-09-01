import { socials } from "../data/content";

const items = [
  ["SoundCloud", socials.soundcloud],
  ["YouTube", socials.youtube],
  ["Instagram", socials.instagram]
] as const;

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "socials socials--compact" : "socials"}>
      {items.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">
          {label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
