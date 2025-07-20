import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {useForm} from "react-hook-form";

const Contact = () => {
  const { register, trigger, formState: {errors} } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contact" className="py-20">
        {/* ---HEADING--- */}
      <motion.div
          className="flex justify-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.5 }}
          transition={{ delay:0.4, duration:0.5 }}
          variants={{
            hidden: { opacity:0, x:-50 },
            visible: { opacity:1, x:0 }
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-yellow">CONTACT ME</span> TO GET STARTED
            </p>
            <div className="md:flex md:justify-end mt-5">
              <LineGradient width="w-1/2" />
            </div>
          </div>
        </motion.div>

        {/* ---IMAGE & FORM--- */}
        <div className="md:flex md:justify-between md:gap-16 mt-10">
          <motion.div 
            className="basis-1/2 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.5 }}
            transition={{ delay:0.4, duration:0.5 }}
            variants={{
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
            }}
          >
            <img src="https://thumbs.dreamstime.com/b/contact-me-memo-note-22159927.jpg" alt="contact" />
          </motion.div>

          <motion.div
              className="basis-1/2 mt-10 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true, amount:0.5 }}
              transition={{ delay:0.4, duration:0.5 }}
              variants={{
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
            }}
          >
            <form 
              target="_blank" 
              onSubmit={onSubmit} 
              action="https://formsubmit.co/693ef7dcc99692cc3254a07aa86df858" 
              method="POST">
              <input 
                className="w-full bg-blue font-semibold placeholder-opaque-black p-2 border-0 outline-none" 
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max length is 100 char"}
                </p>
              )}

              <input 
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 border-0 outline-none mt-5" 
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea 
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 border-0 outline-none" 
                placeholder="MESSAGE"
                rows='4'
                cols='60'
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" && "This field is required"}
                  {errors.message.type === "maxLength" && "Max length is 2000 char"}
                </p>
              )}

              <button
                type="submit"
                className="bg-yellow mt-5 p-3 text-deep-blue font-semibold hover:bg-red hover:text-white transition duration-500"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
    </section>
  )
}

export default Contact