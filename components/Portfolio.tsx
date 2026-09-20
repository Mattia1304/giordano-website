import Image from "next/image";

const projects = [
  {
    title: "Palm Jumeirah Villa",
    category: "Luxury Villa",
    image: "/projects/villa-1.jpg",
    size: "large",
  },
  {
    title: "Downtown Penthouse",
    category: "Penthouse",
    image: "/projects/penthouse.jpg",
    size: "small",
  },
  {
    title: "Luxury Bathroom",
    category: "Interior",
    image: "/projects/bathroom.jpg",
    size: "small",
  },
  {
    title: "Italian Kitchen",
    category: "Kitchen",
    image: "/projects/kitchen.jpg",
    size: "large",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <span className="section-subtitle reveal">SELECTED PROJECTS</span>
      <h2 className="reveal delay-1">Timeless Spaces</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`portfolio-card ${project.size} reveal delay-${(index % 3) + 1}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="portfolio-image"
            />
            <div className="portfolio-overlay">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
