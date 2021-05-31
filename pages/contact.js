import Container from '@/components/Container'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

export default function Contact() {
  const [loading, setLoading] = useState('Send Message')
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const contact = async (e) => {
    e.preventDefault()
    setLoading('Sending')
    const params = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value
    }
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        params,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER
      )

      setLoading('Sent 🚀')
    } catch (err) {
      console.log(err)
    }

    // clear inputs
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <>
      <Container>
        <div className="w-full mx-auto mt-5 md:mt-15 md:mb-20 md:max-w-5xl">
          <div className="w-24 h-1 mb-5 bg-secondary"></div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Contact Me
          </h1>
          <div className="flex flex-col justify-between">
            <div className="mb-10">
              <p className="text-lg">
                You can reach out to me anytime on my social media handles -&gt;
              </p>
              <ul className="grid justify-center grid-cols-5 mt-8 w-80">
                <li>
                  <a
                    href="https://twitter.com/garvnanwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/garvnanwani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Garvnanwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.to/garvnanwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
                  >
                    <FaDev />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/garv_nanwani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-lg">
              <p className="mb-6 ">Or send me a message directly -&gt;</p>
              <form
                className="flex flex-col justify-between"
                onSubmit={contact}
              >
                <input
                  placeholder="Your Name"
                  type="text"
                  required
                  className="max-w-sm mb-7 focus:outline-none"
                  ref={nameRef}
                />
                <input
                  placeholder="Email"
                  type="email"
                  required
                  className="max-w-sm mb-7 focus:outline-none"
                  ref={emailRef}
                />
                <input
                  placeholder="Message"
                  type="textarea"
                  required
                  className="max-w-sm mb-7 focus:outline-none"
                  ref={messageRef}
                />
                <button
                  type="submit"
                  className="max-w-sm px-4 py-2 font-bold text-left text-white bg-gray-600 rounded mb-7 hover:bg-gray-800 "
                >
                  {loading}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
