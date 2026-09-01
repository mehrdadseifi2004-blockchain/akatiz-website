import Image from "next/image";

type Props = {
  title: string;
  type: string;
  videoId: string;
  href: string;
  index: number;
};

export default function ReleaseCard({ title, type, videoId, href, index }: Props) {
  return (
    <a className="release-card" href={href} target="_blank" rel="noreferrer">
      <div className="release-card__image">
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={`${title} artwork`}
          fill
          sizes="(max-width: 800px) 88vw, 40vw"
        />
        <div className="release-card__shade" />
        <span className="release-card__play">PLAY</span>
      </div>
      <div className="release-card__meta">
        <span>0{index + 1}</span>
        <div>
          <h3>{title}</h3>
          <p>{type}</p>
        </div>
        <span className="release-card__arrow">↗</span>
      </div>
    </a>
  );
}
