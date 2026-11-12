
import {
  Zap,
  BarChart3,
  Users,
  ShieldCheck,
  Workflow,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Automate repetitive tasks and let intelligent workflows handle your daily operations.",
    color: "text-violet-400",
    bg: "bg-violet-500/10"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get actionable insights with real-time analytics and performance tracking.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring your team together with seamless communication and shared workspaces.",
    color: "text-pink-400",
    bg: "bg-pink-500/10"
  },
  {
    icon: Workflow,
    title: "Workflow Management",
    description:
      "Organize projects, automate processes, and manage every task in one place.",
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "Keep your business information protected with secure workspace controls.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description:
      "Save valuable hours by simplifying your daily work and reducing manual effort.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Powerful Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Everything you need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              work smarter
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            One intelligent platform to automate tasks,
            improve productivity, and help your team achieve more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-[#111125] border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm">
                  {feature.description}
                </p>

                <div className="mt-6 text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                  Explore feature →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
