export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  hero: string;
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "herringbone-parquet-residence",
    title: "Herringbone Parquet Residence",
    category: "Residential Renovation",
    description:
      "Interior renovation featuring herringbone and plank parquet flooring, refined finishes and bright, uncluttered spaces.",
    hero: "/projects/herringbone-parquet-residence/01.jpg",
    gallery: [
      { src: "/projects/herringbone-parquet-residence/01.jpg", width: 1599, height: 899 },
      { src: "/projects/herringbone-parquet-residence/02.jpg", width: 899, height: 1599 },
      { src: "/projects/herringbone-parquet-residence/03.jpg", width: 899, height: 1599 },
      { src: "/projects/herringbone-parquet-residence/04.jpg", width: 899, height: 1599 },
      { src: "/projects/herringbone-parquet-residence/05.jpg", width: 1599, height: 899 },
      { src: "/projects/herringbone-parquet-residence/06.jpg", width: 899, height: 1599 },
      { src: "/projects/herringbone-parquet-residence/07.jpg", width: 899, height: 1599 },
      { src: "/projects/herringbone-parquet-residence/08.jpg", width: 1200, height: 1600 },
      { src: "/projects/herringbone-parquet-residence/09.jpg", width: 1200, height: 1600 },
      { src: "/projects/herringbone-parquet-residence/10.jpg", width: 1200, height: 1600 },
      { src: "/projects/herringbone-parquet-residence/11.jpg", width: 1200, height: 1600 },
    ],
  },
  {
    slug: "stone-and-marble-bathrooms",
    title: "Stone & Marble Bathrooms",
    category: "Bathrooms",
    description:
      "Bathrooms finished with large-format porcelain slabs, marble surfaces, designer sanitaryware and warm timber floors.",
    hero: "/projects/stone-and-marble-bathrooms/01.jpg",
    gallery: [
      { src: "/projects/stone-and-marble-bathrooms/01.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/02.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/03.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/04.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/05.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/06.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/07.jpg", width: 768, height: 1024 },
      { src: "/projects/stone-and-marble-bathrooms/08.jpg", width: 768, height: 1024 },
      { src: "/projects/stone-and-marble-bathrooms/09.jpg", width: 768, height: 1024 },
      { src: "/projects/stone-and-marble-bathrooms/10.jpg", width: 768, height: 1024 },
      { src: "/projects/stone-and-marble-bathrooms/11.jpg", width: 1200, height: 1600 },
      { src: "/projects/stone-and-marble-bathrooms/12.jpg", width: 768, height: 1024 },
      { src: "/projects/stone-and-marble-bathrooms/13.jpg", width: 768, height: 1024 },
    ],
  },
  {
    slug: "bespoke-staircases",
    title: "Bespoke Staircases",
    category: "Staircases",
    description:
      "Sculptural staircases in stone, marble and tile, combined with glass, steel and integrated lighting.",
    hero: "/projects/bespoke-staircases/01.jpg",
    gallery: [
      { src: "/projects/bespoke-staircases/01.jpg", width: 1600, height: 1580 },
      { src: "/projects/bespoke-staircases/02.jpg", width: 1600, height: 1200 },
      { src: "/projects/bespoke-staircases/03.jpg", width: 1600, height: 1200 },
      { src: "/projects/bespoke-staircases/04.jpg", width: 1201, height: 1600 },
      { src: "/projects/bespoke-staircases/05.jpg", width: 1599, height: 1096 },
    ],
  },
  {
    slug: "private-villa-design",
    title: "Private Villa Design",
    category: "3D Design",
    description:
      "Architectural visualisations of contemporary villas: facades, pools, outdoor living and interiors in natural stone, timber and marble.",
    hero: "/projects/private-villa-design/01.jpg",
    gallery: [
      { src: "/projects/private-villa-design/01.jpg", width: 1080, height: 608 },
      { src: "/projects/private-villa-design/02.jpg", width: 1080, height: 608 },
      { src: "/projects/private-villa-design/03.jpg", width: 1080, height: 608 },
      { src: "/projects/private-villa-design/04.jpg", width: 787, height: 551 },
      { src: "/projects/private-villa-design/05.jpg", width: 1260, height: 945 },
      { src: "/projects/private-villa-design/06.jpg", width: 1260, height: 1069 },
      { src: "/projects/private-villa-design/07.jpg", width: 630, height: 394 },
      { src: "/projects/private-villa-design/08.jpg", width: 1260, height: 945 },
      { src: "/projects/private-villa-design/09.jpg", width: 1509, height: 1134 },
      { src: "/projects/private-villa-design/10.jpg", width: 1200, height: 900 },
    ],
  },
  {
    slug: "facade-renovation",
    title: "Facade Renovation",
    category: "Exterior Works",
    description:
      "Exterior renovation of residential buildings, from scaffolded works in progress to the restored facade of a classic villa.",
    hero: "/projects/facade-renovation/01.jpg",
    gallery: [
      { src: "/projects/facade-renovation/01.jpg", width: 1290, height: 860 },
      { src: "/projects/facade-renovation/02.jpg", width: 1188, height: 803 },
      { src: "/projects/facade-renovation/03.jpg", width: 870, height: 651 },
      { src: "/projects/facade-renovation/04.jpg", width: 1041, height: 696 },
      { src: "/projects/facade-renovation/05.jpg", width: 1024, height: 683 },
      { src: "/projects/facade-renovation/06.jpg", width: 783, height: 875 },
      { src: "/projects/facade-renovation/07.jpg", width: 1600, height: 1200 },
      { src: "/projects/facade-renovation/08.jpg", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "designer-interiors",
    title: "Designer Interiors",
    category: "Interior Design",
    description:
      "Furnished living spaces with designer lighting, sculptural furniture and a warm, layered palette.",
    hero: "/projects/designer-interiors/01.jpg",
    gallery: [
      { src: "/projects/designer-interiors/01.jpg", width: 1200, height: 1600 },
      { src: "/projects/designer-interiors/02.jpg", width: 1200, height: 1600 },
      { src: "/projects/designer-interiors/03.jpg", width: 1200, height: 1600 },
    ],
  },
];
