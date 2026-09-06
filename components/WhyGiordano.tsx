import {
FaAward,
FaHammer,
FaGem,
FaUserTie
} from "react-icons/fa";

const items = [
  {
    icon: <FaUserTie />,
    title: "Italian Project Management",
  },
  {
    icon: <FaGem />,
    title: "Premium Italian Materials",
  },
  {
    icon: <FaHammer />,
    title: "Luxury Fit-Out",
  },
  {
    icon: <FaAward />,
    title: "Turnkey Excellence",
  },
];

export default function WhyGiordano() {
  return (
    <section className="why">

      <span className="section-subtitle">
        WHY CHOOSE US
      </span>

      <h2>Italian Quality. Dubai Standards.</h2>

      <div className="why-grid">

        {items.map((item) => (

          <div className="why-card" key={item.title}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}
