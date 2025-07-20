import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
//import useMediaQuery from "../hooks/useMediaQuery";

const skills = [
  {
    name: "Node.js",
    image: "https://www.mindrops.com/images/nodejs-image.webp",
  },
  {
    name: "Express.js",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
  },
  {
    name: "React.js",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png",
  },
  {
    name: "MongoDB",
    image: "https://www.gosnowballinvesting.com/content/images/2025/04/Mongodb-logo-v2-2.png",
  },
  {
    name: "MySQL",
    image: "https://www.quadratichq.com/assets/connections/mysql-db/og-image.png",
  },
   {
    name: "Java (Core)",
    image: "https://dac.digital/wp-content/uploads/2023/04/backend-java-optimized.png",
  },
  {
    name: "GitHub",
    image: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
  },
];

const MySkills = () => {
  //const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* -----HEADER SECTION----- */}
      <div className="md:flex md:justify-between md:gap-16 mt-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="bg-red text-white px-2">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            These are the technologies and tools I’ve worked with.
          </p>
        </motion.div>

        {/* -----OPTIONAL ILLUSTRATION IMAGE----- */}
        {/* <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="skills illustration"
                className="z-10"
                src="../assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="skills illustration"
              className="z-10"
              src="../assets/skills-image.png"
            />
          )}
        </div> */}
      </div>

      {/* -----SKILL LOGO GRID----- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 mt-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="h-20 w-30 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
