import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaSnapchat } from "react-icons/fa";
import { Link } from 'react-router-dom';

const social = [{
  id: 1,
  icon: FaSnapchat,
  way: "https://www.snapchat.com/add/ir0_hit?share_id=Qo7WgOKUO4&locale=en-IN"
},
{
  id: 2,
  icon: SlSocialTwitter,
  way: ""
},
{
  id: 3,
  icon: BsInstagram,
  way: "https://instagram.com/ro_hit.v?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D"
},
{
  id: 4,
  icon: BsLinkedin,
  way: "https://www.linkedin.com/in/rohit-valluru-12071a192"
},
{
  id: 5,
  icon: BsWhatsapp,
  way: ""
},
]


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_z536ux8', 'template_4iykb8f',
      {
        from_name: form.name,
        to_name: 'Rohit',
        to_email: 'vallururohit@gmail.com',
        message: form.message
      },
      'dn1tFS8pCVz9_YEwm')

      .then(() => {
        setLoading(false);
        alert('Thank You for sending the message, Rohit will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong.')
      })
  }

  return (
    <>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}> Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Name :</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></input>
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Your Email :</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></input>
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4"> Message :</span>
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></textarea>
            </label>

            <button type="submit" className="bg-green-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {loading ? 'Sending' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>

      </div>
      <div className='flex justify-center items-center text-white gap-12 text-3xl'>
        {social.map((soc) => {
          const IconComponent = soc.icon;
          return (
            <Link to={soc.way} key={soc.id}>
              <IconComponent className='mt-14' />
            </Link>
          );
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")