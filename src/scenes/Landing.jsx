import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";


const Landing = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section 
    id="home" 
    className='md:flex md:justify-between md:items-center md:h-full gap-10 py-8'>
      
      {/* ---IMAGE SECTION--- */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? 
          (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:max-w-[400px] md:before:max-w-[300px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img 
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[300px]"
                src="../assets/profile-image.png"
              />
            </div>
          ) : 
          (
            <div>
              <img 
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[500px]"
                src="../assets/profile-image.jpg"
              />
            </div>
          )
        }
      </div>

      {/* -----MAIN SECTION----- */}
      <div className="z-30 basis-2/5 mt-10 md:mt-28">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5 }}
            transition={{ duration:0.5 }}
            variants={{
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Dipak {""} Das
              {/* <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              xs:before:content-brush before:absolute before:-top-[70px] before:-left-[25px]
              before:z-[-1]"
              >
              </span> */}
              <p className="text-sm mt-10 mb-7 text-center md:text-start">
                Passionate MERN stack developer pursuing B.Tech in Computer Science from Guru Nanak Institute of Technology. 
              </p>
            </p>
          </motion.div>

          {/* ------CALL TO ACTION------ */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5 }}
            transition={{ delay:0.2, duration:0.5 }}
            variants={{
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-sky-400 via-rose-400 to-orange-300 text-white rounded-md py-3 px-7 font-semibold hover:brightness-110 transition duration-500"
            >
              Resume
            </a>
            <AnchorLink
              href="#contact"
              onClick={() => setSelectedPage("contact")}
              className="bg-deep-blue text-white rounded-sm py-3 px-7 ml-4 font-semibold hover:text-red transition duration-500"
            >
              Contact Me
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-0 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5 }}
            transition={{ delay:0.4, duration:0.5 }}
            variants={{
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            <SocialMediaIcons />
          </motion.div>
      </div>
    </section>
  )
}

export default Landing