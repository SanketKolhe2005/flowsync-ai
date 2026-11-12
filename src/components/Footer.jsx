
import {
  Zap,
  ArrowUpRight,
  Code2,
  Users,
  MessageCircle,
  Mail,
  Heart,
  MoveUpRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080816] border-t border-white/10 pt-20 pb-8 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top CTA */}
        <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/10 border border-violet-500/20 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
              Ready to get started?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Make your work flow.
              <span className="block text-violet-400">
                Make your goals happen.
              </span>
            </h2>

            <p className="text-gray-400 mt-4">
              Start building smarter workflows with FlowSync AI.
            </p>
          </div>

          <a
            href="#pricing"
            className="shrink-0 flex items-center gap-3 bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-xl font-semibold transition"
          >
            Get Started
            <ArrowUpRight size={19} />
          </a>

        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="bg-violet-600 p-3 rounded-xl">
                <Zap size={23} />
              </div>

              <span className="text-2xl font-bold">
                FlowSync<span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-7 max-w-xs">
              An intelligent productivity platform designed
              to simplify workflows, empower teams and
              help businesses achieve more.
            </p>

            <div className="flex gap-3 mt-7">

              <a href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-white/5 hover:bg-violet-600 transition">
                <Code2 size={19} />
              </a>

              <a href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-white/5 hover:bg-violet-600 transition">
                <Users size={19} />
              </a>

              <a href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-3 rounded-xl bg-white/5 hover:bg-violet-600 transition">
                <MessageCircle size={19} />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-7">Product</h3>

            <div className="space-y-5 text-sm text-gray-400">
              <a href="#features" className="block hover:text-violet-400 transition">Features</a>
              <a href="#about" className="block hover:text-violet-400 transition">How It Works</a>
              <a href="#pricing" className="block hover:text-violet-400 transition">Pricing</a>
              <a href="#contact" className="block hover:text-violet-400 transition">Request a Demo</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-7">Company</h3>

            <div className="space-y-5 text-sm text-gray-400">
              <a href="#home" className="block hover:text-violet-400 transition">About Us</a>
              <a href="#contact" className="block hover:text-violet-400 transition">Contact Us</a>
              <a href="#contact" className="block hover:text-violet-400 transition">Help & Support</a>
              <a href="#home" className="block hover:text-violet-400 transition">Our Mission</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-7">Get In Touch</h3>

            <p className="text-gray-400 text-sm leading-7 mb-6">
              Have a question or want to explore
              FlowSync AI? We'd love to hear from you.
            </p>

            <a href="#contact"
              className="flex items-center gap-3 text-sm text-violet-400 hover:text-violet-300 transition">
              <Mail size={18} />
              Contact our team
              <MoveUpRight size={15} />
            </a>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} FlowSync AI. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Designed with
            <Heart size={15} className="text-violet-400 fill-violet-400" />
            for better productivity.
          </p>

          <a href="#home"
            className="text-gray-400 hover:text-violet-400 text-sm flex items-center gap-2 transition">
            Back to top
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}
