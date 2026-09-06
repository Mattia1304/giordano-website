"use client";

import {
  FaComments,
  FaPencilRuler,
  FaCubes,
  FaHardHat,
  FaCheckCircle,
  FaKey,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    text: "Private meeting to understand your vision and project goals.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    text: "Italian-inspired interior planning and space optimization.",
  },
  {
    icon: <FaCubes />,
    title: "Material Selection",
    text: "Premium Italian finishes through our PRIMA HUB partnership.",
  },
  {
    icon: <FaHardHat />,
    title: "Construction",
    text: "Luxury renovation executed by experienced professionals.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Control",
    text: "Every detail is inspected to meet the highest standards.",
  },
  {
    icon: <FaKey />,
    title: "Project Delivery",
    text: "A turnkey solution ready to be enjoyed.",
  },
];

export default function Process() {
  return (
    <section className="process">

      <span className="section-subtitle">
        OUR PROCESS
      </span>

      <h2>
        From Vision to Reality
      </h2>

      <div className="timeline">

        {steps.map((step, index) => (

          <div className="step" key={index}>

            <div className="circle">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}
