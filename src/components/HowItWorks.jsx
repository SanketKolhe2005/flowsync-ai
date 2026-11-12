
import {
  UserPlus,
  Workflow,
  Rocket,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Workspace",
    description:
      "Sign up and set up your workspace in minutes. Invite your team and bring everything together.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automate Your Workflow",
    description:
      "Choose your tasks, create smart workflows and let FlowSync handle repetitive operations.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Grow Your Productivity",
    description:
      "Track performance, discover insights and focus your energy on work that matters.",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">

      <div className="absolute top-20 left-0 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            Simple Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Get started in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              three easy steps
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            Transform the way you work with a simple,
            intelligent and efficient workflow platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative bg-[#111125] border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center">
                    <Icon size={28} />
                  </div>

                  <span className="text-4xl font-bold text-white/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 mt-7 text-sm text-green-400">
                  <CheckCircle2 size={17} />
                  Easy to get started
                </div>

                {index !== 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-7 z-10 text-violet-400">
                    <ArrowRight size={22} />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-xl font-semibold transition"
          >
            Explore Our Plans
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
