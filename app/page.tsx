"use client";
import { useEffect, useState } from "react";

type Lang = "en" | "fa";
const T = ({ lang, en, fa }: { lang: Lang; en: string; fa: string }) => (
  <>{lang === "fa" ? fa : en}</>
);

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("fa", lang === "fa");
  }, [lang]);
  useEffect(() => {
    const root = document.documentElement,
      body = document.body;
    const c = document.querySelector<HTMLElement>(".cursor"),
      d = document.querySelector<HTMLElement>(".cursor-dot");
    const move = (e: MouseEvent) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
      if (c && d) {
        c.style.left = d.style.left = e.clientX + "px";
        c.style.top = d.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    const hoverEls = [...document.querySelectorAll(".hoverable,a,button")];
    const enter = () => body.classList.add("hover"),
      leave = () => body.classList.remove("hover");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    const bar = document.querySelector<HTMLElement>(".progress i");
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.width = (scrollY / max) * 100 + "%";
    };
    window.addEventListener("scroll", scroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade").forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", scroll);
      io.disconnect();
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
  const youtube = "http://www.youtube.com/@Aka_Tizz";
  const soundcloud = "https://on.soundcloud.com/Ym9js8aEDgBSGJ3as6";
  const instagram = "https://www.instagram.com/aka.tizz?igsi=MWdpaXNldW9raGYwZQ==";
  const applemusic = "https://music.apple.com/us/artist/akatizz/6791118112";
  const spotify = "https://open.spotify.com/artist/5rFnIrFnpqWpLFaDaD6i6s?si=ioJyMxGrS7GLvcEhpzhuvw&utm_source=copy-link"

  return (
    <>
      <div className="progress">
        <i />
      </div>
      <div className="noise" />
      <div className="spot" />
      <div className="cursor" />
      <div className="cursor-dot" />
      <header className="header">
        <a className="logo hoverable" href="#top">
          AKATIZZ<b>.</b>
        </a>
        <nav className="nav">
          <a href="#identity">
            <T lang={lang} en="Identity" fa="هویت" />
          </a>
          <a href="#music">
            <T lang={lang} en="Music" fa="موسیقی" />
          </a>
          <a href="#visuals">
            <T lang={lang} en="Visuals" fa="تصویر" />
          </a>
          <a href="#connect">
            <T lang={lang} en="Connect" fa="ارتباط" />
          </a>
        </nav>
        <div className="tools">
          <button
            className="lang hoverable"
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            aria-label="Switch language"
          >
            <span className={lang === "en" ? "on" : ""}>EN</span>
            <span>/</span>
            <span className={lang === "fa" ? "on" : ""}>FA</span>
          </button>
          <a className="listen hoverable" target="_blank" href={soundcloud}>
            <T lang={lang} en="Listen ↗" fa="شنیدن ↗" />
          </a>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-media">
            <img src="/images/akatizheader.jpg" alt="AkaTiz" />
          </div>
          <div className="hero-grid">
            <div className="side">
              <span>RAP ARTIST · MASHHAD</span>
            </div>
            <div className="hero-top">
              <span>36.2605° N / 59.6168° E</span>
              <span>KHORASAN · IRAN</span>
              <span>EST. EAST</span>
            </div>
            <div className="side right">
              <span>INDEPENDENT / 2026</span>
            </div>
            <div className="hero-copy">
              <div className="hero-kicker">
                <i />
                <span>
                  <T lang={lang} en="Sound from the east" fa="صدایی از شرق" />
                </span>
              </div>
              <h1>AKATIZZ</h1>
              <div className="hero-bottom">
                <p className="hero-fa">از خراسان</p>
                <div className="hero-index">
                  <span>SCROLL TO ENTER</span>
                  <a className="scroll-orb hoverable" href="#identity">
                    ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="shell">
          <section className="section" id="identity">
            <div className="linehead fade">
              <span>
                <T lang={lang} en="001 / IDENTITY" fa="۰۰۱ / هویت" />
              </span>
              <span>MASHHAD / KHORASAN</span>
            </div>
            <div className="manifesto">
              <div className="label fade">
                <T lang={lang} en="Independent rap artist" fa="رپر مستقل" />
              </div>
              <h2 className="fade">
                {lang === "fa" ? (
                  <>
                    از
                    <br />
                    <em>خراسان.</em>
                  </>
                ) : (
                  <>
                    FROM
                    <br />
                    <em>TRAP.</em>
                  </>
                )}
              </h2>
              <div className="manifesto-copy fade">
                <p>
                  {/* <T
                    lang={lang}
                    en="AKATIZZ builds his world around rap, visual tension and the identity of Mashhad — raw energy presented with a colder, cinematic language."
                    fa="هارب جهان خودش را با رپ، تنش تصویری و هویت مشهد می‌سازد؛ انرژی خام با یک زبان سرد و سینمایی."
                  /> */}
                </p>
                <small>
                  <T
                    lang={lang}
                    en="akatizz is the voice of the streets and the outskirts of the city; a journey that began with freestyles, street gatherings, and tracks like “Bararom,” “Yere,” and more.
In 2025, he began the professional chapter of his artistic career by participating in the “Azmayeshgah” program, and his story continues…
Throughout this journey, akatizz has collaborated with producers and composers such as HATAM, MMRZ ST, and Sajjad Search.
Director B has also been responsible for the artistic direction and visual identity of akatizz’s work."
                    fa="هارب صدای خیابان و حاشیه شهر است؛ مسیری که با فری‌استایل، میتینگ و ترک‌هایی مثل «براروم» و «یره» و … آغاز شد. از سال ۱۴۰۴ با حضور در برنامه «آزمایشگاه» فصل حرفه‌ای فعالیت هنری خود را شروع کرد و داستانش همچنان ادامه دارد آهنگساز ها و تنظیم کننده هایی همچون حاتم، ممرضا ST و سجاد سرچ در این مسیر با هارب همکاری داشته اند همچنین Director B کارگردانی هنری و تصویر هارو بر عهده داشته"
                  />
                </small>
              </div>
            </div>
          </section>
          <section className="release-wrap" id="music">
            <div className="linehead fade" style={{ marginBottom: "2.5rem" }}>
              <span>
                <T
                  lang={lang}
                  en="002 / LATEST RELEASE"
                  fa="۰۰۲ / آخرین انتشار"
                />
              </span>
              <span>2026</span>
            </div>
            <a
              className="release hoverable fade"
              target="_blank"
              href={`${youtube}/videos`}
            >
              <img
                src="https://i.ytimg.com/vi/tibuL7E2R2g/maxresdefault.jpg"
                alt="Citalopram"
              />
              <div className="release-inner">
                <div className="release-top">
                  <span className="badge">
                    <T lang={lang} en="NEW RELEASE" fa="انتشار جدید" />
                  </span>
                  <span>AKATIZZ / 2026</span>
                </div>
                <div>
                  <div className="release-title">
                    <h3>CITALOPRAM</h3>
                    <span className="release-cta">↗</span>
                  </div>
                  <div className="release-meta">
                    <span>AKATIZZ</span>
                    <span>
                      <T
                        lang={lang}
                        en="OFFICIAL MUSIC AUDIO"
                        fa="موزیک رسمی"
                      />
                    </span>
                    <span>
                      <T
                        lang={lang}
                        en="WATCH / LISTEN ↗"
                        fa="تماشا / شنیدن ↗"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </section>
          <section className="works" id="visuals">
            <div className="linehead fade">
              <span>
                <T lang={lang} en="003 / SELECTED WORK" fa="۰۰۳ / آثار منتخب" />
              </span>

              <span>
                <T lang={lang} en="VIDEO / AUDIO" fa="ویدیو / صدا" />
              </span>
            </div>

            <div className="works-list">
              {[

[
  "01",
  "Criminal",
  "Official Music Video",
  "موزیک ویدیوی رسمی",
  "NihssJ1i4CU",
  "/images/akatizheader.jpg",
],

                [
                  "02",
                  "Bussit",
                  "Official Music Video",
                  "موزیک ویدیوی رسمی",
                  "yEGAKjf6Fb8",
                  "/images/bussit.jpg",
                ],

                [
                  "03",
                  "LemOon",
                  "Official Music Audio",
                  "موزیک رسمی",
                  "G9WaDCMLzOY",
                  "/images/lemoon.jpg",
                ],

                [
                  "04",
                  "Bluff",
                  "Freestyle / Music Video",
                  "فری‌استایل / موزیک ویدیو",
                  "diLbWyVML54",
                  "/images/bluff.webp",
                ],

                [
                  "05",
                  "Holdup",
                  "Official Music Audio",
                  "موزیک رسمی",
                  "M_U4cwWeC9A",
                  "/images/holdup.bmp",
                ],

                  // [
                  //   "06",
                  //   "COMBATIVE",
                  //   "Official Music Video",
                  //   "موزیک ویدیوی رسمی",
                  //   "TQ6R9IEnfEQ",
                  //   "/images/combative.jpg",
                  // ],
              ].map(([n, title, kindEn, kindFa, id, image]) => (
                <a
                  key={title}
                  className="work hoverable fade"
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                >
                  <span className="num">{n}</span>

                  <div>
                    <h4>{title}</h4>

                    <div className="kind">
                      <T lang={lang} en={kindEn} fa={kindFa} />
                    </div>
                  </div>

                  <div className="thumb">
                    <img src={image} alt={title} />
                  </div>

                  <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          </section>
          <section className="quote">
            {/* <p className="fade">
              {lang === "fa" ? (
                <>
در خیابان ها 
                  <br />
زاده شدم و تاج                  <br /> 
<br /><span> Getto را بر سر گذاشتم</span>
                </>
              ) : (
                <>
                  Born in the streets
                  <br />
                  Crowned 
                  <br />
                  <span>By The Getto</span>
                </>
              )}
            </p> */}
            {/* <p className="fa-line fade">هارب / مشهد / خراسان</p> */}
          </section>
          <div className="ticker">
            <div className="ticker-track">
              <span>
                AKATIZZ <i>✦</i> MASHHAD <i>✦</i> KHORASAN <i>✦</i> EAST <i>✦</i>{" "}
                RAP <i>✦</i> AKATIZZ <i>✦</i> MASHHAD <i>✦</i> KHORASAN <i>✦</i> PERSIAN <i>✦</i>{" "}
                EAST <i>✦</i> RAP <i>✦</i> 
              </span>
              <span>
                AKATIZZ <i>✦</i> MASHHAD <i>✦</i> KHORASAN <i>✦</i> EAST <i>✦</i> PERSIAN <i>✦</i>{" "}
                RAP <i>✦</i> AKATIZZ <i>✦</i> MASHHAD <i>✦</i> KHORASAN <i>✦</i>{" "}
                EAST <i>✦</i> RAP <i>✦</i>
              </span>
            </div>
          </div>
          <section className="connect" id="connect">
            <div className="connect-top">
            <h2 className="fade">
  {lang === "fa" ? (
    <>
      <span className="city-highlight">
        مشهد
      </span>
      <br />
      دِرِه میه.
    </>
  ) : (
    <>
      <span className="city-highlight">
        MASHHAD
      </span>
      <br />
      IS COMING ...
    </>
  )}
</h2>
              <div className="connect-copy fade">
                <T
                  lang={lang}
                  en="Music, visuals and new releases. Follow AKATIZZ on the official platforms."
                  fa="موسیقی، تصویر و انتشارهای تازه. هارب را در پلتفرم‌های رسمی دنبال کن."
                />
              </div>
            </div>
            <div className="socials fade">
              <a className="hoverable" href={soundcloud} target="_blank">
                <span className="snum">01</span>
                <strong>SoundCloud</strong>
                <span className="go">↗</span>
              </a>
              <a className="hoverable" href={youtube} target="_blank">
                <span className="snum">02</span>
                <strong>YouTube</strong>
                <span className="go">↗</span>
              </a>
              <a className="hoverable" href={instagram} target="_blank">
                <span className="snum">03</span>
                <strong>Instagram</strong>
                <span className="go">↗</span>
              </a>

              <a className="hoverable" href={applemusic} target="_blank">
                <span className="snum">04</span>
                <strong>Apple Music</strong>
                <span className="go">↗</span>
              </a>

              <a className="hoverable" href={spotify} target="_blank">
                <span className="snum">05</span>
                <strong>Spotify</strong>
                <span className="go">↗</span>
              </a>

            </div>
          </section>
          <footer className="footer">
            <a className="logo hoverable" href="#top">
              AKATIZZ<b>.</b>
            </a>
            <span>MASHHAD / KHORASAN</span>
            <span>
            <T
  lang={lang}
  en="Design & Development by "
  fa="طراحی و توسعه توسط "
/>

<a
  href="https://mehrdadseif.ir"
  target="_blank"
  rel="noopener noreferrer"
>
  Mehrdadseif.ir
</a>
            </span>
            <span>© 2026</span>
          </footer>
        </div>
      </main>
    </>
  );
}
