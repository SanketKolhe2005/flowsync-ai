
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Request a Demo",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "Request a Demo",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Let's build something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              amazing together
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            Have questions or want to see FlowSync AI in action?
            Send us a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Information */}

          <div>
            <h3 className="text-2xl font-bold mb-5">
              We'd love to hear from you.
            </h3>

            <p className="text-gray-400 leading-7 mb-10">
              Whether you need a product demo, have a question,
              or want to explore how FlowSync AI can help your team,
              we're here to help.
            </p>

            <div className="space-y-7">

              <div className="flex items-center gap-4">
                <div className="bg-violet-500/15 text-violet-400 p-4 rounded-xl">
                  <Mail size={23} />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-400 text-sm">
                    hello@flowsync.ai
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/15 text-blue-400 p-4 rounded-xl">
                  <Phone size={23} />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-400 text-sm">
                    +1 (800) 555-0123
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-500/15 text-pink-400 p-4 rounded-xl">
                  <MapPin size={23} />
                </div>
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="text-gray-400 text-sm">
                    San Francisco, California
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="text-violet-400" />
                <h4 className="font-semibold">Need a quick demo?</h4>
              </div>
              <p className="text-gray-400 text-sm leading-6">
                Fill out the form and tell us what you're looking for.
                Our team will be happy to help.
              </p>
            </div>
          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-[#111125] border border-white/10 rounded-3xl p-7 md:p-9 space-y-6"
          >

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                minLength={2}
                className="w-full bg-[#1b1b34] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-[#1b1b34] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#1b1b34] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500 transition"
              >
                <option>Request a Demo</option>
                <option>Pricing Inquiry</option>
                <option>General Question</option>
                <option>Technical Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                minLength={10}
                rows={4}
                className="w-full bg-[#1b1b34] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-violet-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 py-4 rounded-xl font-semibold transition"
            >
              Send Message <Send size={18} />
            </button>

            {success && (
              <div
                role="status"
                className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-sm"
              >
                <CheckCircle2 size={20} />
                Thank you! Your message has been submitted successfully.
              </div>
            )}

            <p className="text-gray-500 text-xs text-center">
              This demo form displays a success message.
              No backend or email delivery is connected.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}
