const items = [
  "Italian Luxury Renovation",
  "Made in Italy",
  "Crafted in Italy, Built in Dubai",
];

function Track({ outline }: { outline?: boolean }) {
  // Two identical halves so the loop is seamless at -50%.
  return (
    <div className={outline ? "marqueeTrack outline" : "marqueeTrack"}>
      {[0, 1].map((half) =>
        items.map((text) => (
          <span key={`${half}-${text}`}>
            {text}
            <i>✦</i>
          </span>
        ))
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" aria-hidden="true">

      <div className="marqueeRow">
        <Track />
      </div>

      <div className="marqueeRow reverse">
        <Track outline />
      </div>

    </section>
  );
}
