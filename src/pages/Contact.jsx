import Links from "../components/Links"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/EmailConfig";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    // honeypot check
    if (form.company.value) {
      console.log("spam blocked");
      return;
    }

    setSending(true);

    const promise = emailjs.sendForm(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      form,
      EMAIL_CONFIG.publicKey
    );

    toast.promise(promise, {
      loading: "Sending message...",
      success: "Thanks! I’ll get back to you soon.",
      error: "Failed to send message. Try again.",
    });

    try {
      await promise;
      form.reset();
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full px-6 md:px-20 lg:px-36 pt-20 pb-16 bg-black text-white">
      <h2 className="raleway-bold text-center font-extrabold text-3xl lg:text-6xl mb-6 md:mb-12">
        Contact
      </h2>

      <div className="text-center md:flex md:gap-2">
        <div className="md:w-1/2 text-left">
          <p className="work-sans-regular lg:text-lg">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>

          <form onSubmit={sendEmail} ref={formRef} className="mt-10 work-sans-regular">
            <label className="md:text-lg">Name:</label>
            <input
              type="text"
              className="w-full my-4 px-4 py-2 rounded-xl text-black"
              placeholder="Your name"
              name="name"
              required
            />

            <label className="md:text-lg">Email:</label>
            <input
              type="text"
              className="w-full my-4 px-4 py-2 rounded-xl text-black"
              placeholder="Your email address"
              name="email"
              required
            />

            <label className="md:text-lg">Message:</label>
            <textarea
              className="w-full my-4 px-4 py-2 rounded-xl text-black"
              placeholder="Your message"
              name="message"
              required
            />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <div className="absolute -left-[5000px]">
              <input
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="flex justify-end mt-6">
              {/* <button type="submit" className="px-4 py-2 work-sans-regular bg-white text-black rounded-xl hover:bg-gray-500 hover:text-white">
                Send
              </button> */}
              <button
                type="submit"
                disabled={sending}
                className="px-4 py-2 work-sans-regular bg-violet-500 text-white rounded-xl hover:bg-violet-700 disabled:opacity-50 w-full md:w-auto"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 md:text-right">
          <div className="md:text-xl mb-4 mt-8 lg:mt-24 work-sans-regular">Email:</div>
          <div className="text-xl md:text-3xl suse-title">ANIKET.JAS20@GMAIL.COM</div>
          <div className="md:text-xl mb-4 mt-8 lg:mt-12 work-sans-regular">Location:</div>
          <div className="text-xl md:text-3xl suse-title">BENGALURU, KARNATAKA</div>
          <div className="md:flex md:justify-end mt-8 ">
            <Links />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact