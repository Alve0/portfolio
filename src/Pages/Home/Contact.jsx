import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_l58rl96",
        "template_cccujmh",
        formRef.current,
        "m4imLpqGKDYapn2nH"
      )
      .then(
        (result) => {
          setSending(false);
          setSuccess(true);
          formRef.current.reset();
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          setSending(false);
          setSuccess(false);
          console.error("Email sending error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-gray-300">
          Want to work together or just say hi? Reach me here.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 text-gray-400 text-2xl">
          <a
            href="https://github.com/Alve0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/iftekherhossainalve"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-gray-300">
            <h4 className="font-semibold">Email</h4>
            <a
              href="mailto:gamingalve@gmail.com"
              className="block mt-2 text-sm opacity-90 hover:underline break-all"
            >
              gamingalve@gmail.com
            </a>

            <h4 className="font-semibold mt-4">Phone</h4>
            <a
              href="tel:+8801849120445"
              className="block mt-2 text-sm opacity-90 hover:underline"
            >
              +880 1849-120445
            </a>

            <h4 className="font-semibold mt-4">WhatsApp</h4>
            <a
              href="https://wa.me/8801849120445"
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-sm opacity-90 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white/5 p-4 rounded-xl border border-white/5 text-gray-300 flex flex-col"
          >
            <label className="text-sm">Your name</label>
            <input
              name="name"
              required
              className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />

            <label className="text-sm mt-3 block">Subject</label>
            <input
              name="subject"
              required
              className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Subject"
            />

            <label className="text-sm mt-3 block">Your email</label>
            <input
              name="mail"
              type="email"
              required
              className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />

            <label className="text-sm mt-3 block">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/10 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Tell me about the project..."
            />

            <button
              type="submit"
              disabled={sending}
              className={`mt-3 px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold transition-colors hover:bg-indigo-700 ${
                sending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "Sending..." : "Send message"}
            </button>

            {success === true && (
              <p className="mt-4 text-green-400 font-medium">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="mt-4 text-red-400 font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
