import Image from "next/image";

export default function Luxury() {
  return (
    <section className="luxury">
      <div className="reveal">
        <Image
          src="/images/marble.jpg"
          alt="Italian Marble"
          width={900}
          height={1100}
          className="parallax-bg"
        />
      </div>

      <div>
        <span className="section-subtitle reveal">MADE IN ITALY</span>
        <h2 className="reveal delay-1">
          Exclusive Italian
          <br />
          Materials
        </h2>
        <p className="reveal delay-2">
          Through our partnership with PRIMA HUB, located in JLT Cluster T, we
          provide direct access to premium Italian brands and luxury interior
          materials.
        </p>

        <ul>
          {[
            "Italian Marble",
            "Luxury Porcelain",
            "Parquet Flooring",
            "Designer Bathrooms",
            "Italian Kitchens",
            "Lighting Solutions",
            "Interior Doors",
            "Bespoke Furniture",
          ].map((item, index) => (
            <li key={index} className={`reveal delay-${(index % 3) + 1}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
