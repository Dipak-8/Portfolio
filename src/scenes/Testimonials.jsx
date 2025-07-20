import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const certificateData = [
  {
    title: "Data Structures (Coursera)",
    image: "/assets/certificate1.png",
    link: "https://drive.google.com/file/d/1fAaidFxUynos0xQusHmRgokyu1R88ugI/view?usp=sharing",
  },
  {
    title: "Soft Computing Techniques",
    image: "/assets/certificate2.png",
    link: "https://drive.google.com/file/d/1yBqRQTUFTCJJOYy4twnc_49asp5SKwq1/view?usp=sharing",
  },
  {
    title: "Tech Trivia (TECHVERSE 2.0)",
    image: "/assets/certificate3.png",
    link: "https://drive.google.com/file/d/1ukYd0UZnTfVMnFt_fs5eoP_Iwa7wkS2a/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <section id="testimonials" className="pt-16 pb-16 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-playfair font-semibold text-red mb-4">
          CERTIFICATES
        </h2>
        <LineGradient width="w-1/3 mx-auto" />
        <p className="mt-6 text-white-700">
          A few certifications showcasing my learning milestones.
        </p>
      </motion.div>

      {/* Certificate Grid */}
      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {certificateData.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-deep-blue rounded-xl shadow-lg p-4 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-contain rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold mb-4">{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dark-grey text-white px-4 py-2 rounded-md text-sm hover:bg-deep-blue transition"
            >
              View
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
