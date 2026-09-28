import React, { useState } from "react";

const fieldClass = `
  w-full font-sans text-base sm:text-lg text-white bg-transparent
  placeholder-gray-500 outline-none appearance-none
  px-5 py-3 border-2 border-white/20 rounded-2xl
  transition-all duration-300 ease-in-out
  hover:border-white/30
  focus:border-white/50 focus:border-b-red-300/60 focus:bg-white/5
`;

const labelClass = "flex flex-col gap-2 font-sans text-gray-300 text-lg";

const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const n = name.trim();
        if (!n) {
            setError("Name is required");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        } else if (n.length < 2) {
            setError("Name must be at least 2 characters");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        } else if (n.length > 20) {
            setError("Name length should be less than 20 characters");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }

        const emailId = email.trim();
        if (!emailId) {
            setError("Email is required");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailId)) {
            setError("Enter a valid email address");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }

        console.log("Contact form:", { name, email, message });
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
            setSent(false);
            setError("");
        }, 3000);
    };

    return (
        <section className="w-full px-4 py-10">
            <div
                className="
          w-full md:w-[80%] lg:w-[50%] m-auto p-6 sm:p-8
          bg-white/5 backdrop-blur-md text-white
          border-2 border-white/20 border-b-red-300/60 rounded-2xl
          shadow-[0_8px_12px_-3px_rgba(255,255,255,0.2)]
        "
            >
                <h1 className="text-red-600 font-display font-bold text-3xl mb-6">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <label className={labelClass}>
                        Your Name
                        <input
                            type="text"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setSent(false);
                            }}
                            placeholder="Enter your name"
                            className={fieldClass}
                        />
                    </label>

                    <label className={labelClass}>
                        Your Email
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setSent(false);
                            }}
                            placeholder="example123@gmail.com"
                            className={fieldClass}
                        />
                    </label>

                    <label className={labelClass}>
                        Your Message
                        <textarea
                            name="message"
                            required
                            rows={5}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setSent(false);
                            }}
                            placeholder="Enter your message..."
                            className={`${fieldClass} resize-none`}
                        />
                    </label>

                    <button
                        type="submit"
                        className="
              self-start font-sans text-lg text-white bg-red-600
              px-8 py-3 rounded-full cursor-pointer border-2 border-transparent
              transition-all duration-300 ease-in-out transform
              hover:bg-red-700 hover:translate-x-1
              hover:shadow-[0_5px_10px_rgba(255,255,255,0.3)]
              active:scale-95
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
            "
                    >
                        Send message
                    </button>

                    {error !== " " && (
                        <p role="status" className="font-sans text-red-400">
                            {error}
                        </p>
                    )}
                    {sent && (
                        <p role="status" className="font-sans text-green-400">
                            {alert(
                                " Message sent. We'll get back to you soon.",
                            )}
                            Message sent. We'll get back to you soon.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
