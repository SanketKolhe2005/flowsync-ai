
import {
  ArrowRight, Play, Sparkles, TrendingUp,
  CheckCircle2, Clock
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-20">

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-700/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="inline-flex items-center gap-2 border border-violet-400/30 bg-violet-500/10 rounded-full px-4 py-2 text-violet-300 text-sm mb-8">
            <Sparkles size={15} />
            Introducing smarter workflows
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Work smarter.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Achieve more.
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-7 max-w-xl">
            Automate repetitive tasks, manage your projects, and
            empower your team with one intelligent productivity platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#pricing"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-7 py-4 rounded-xl font-semibold transition">
              Start Free Trial <ArrowRight size={18} />
            </a>

            <a href="#about"
              className="flex items-center gap-2 border border-white/15 hover:bg-white/10 px-7 py-4 rounded-xl transition">
              <Play size={17} /> See How It Works
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={17} />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={17} />
              Easy to get started
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full" />

          <div className="relative bg-[#111125] border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-400 text-sm">Workspace Overview</p>
                <h3 className="text-xl font-bold mt-1">Good morning, Alex 👋</h3>
              </div>
              <div className="bg-violet-500/15 text-violet-300 p-3 rounded-xl">
                <Sparkles />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1b1b34] rounded-2xl p-5">
                <TrendingUp className="text-violet-400 mb-3" />
                <p className="text-gray-400 text-sm">Productivity</p>
                <h2 className="text-3xl font-bold mt-2">94%</h2>
                <p className="text-green-400 text-xs mt-2">↑ 12% this week</p>
              </div>

              <div className="bg-[#1b1b34] rounded-2xl p-5">
                <Clock className="text-blue-400 mb-3" />
                <p className="text-gray-400 text-sm">Time Saved</p>
                <h2 className="text-3xl font-bold mt-2">18h</h2>
                <p className="text-green-400 text-xs mt-2">This week</p>
              </div>
            </div>

            <div className="bg-[#1b1b34] rounded-2xl p-5 mt-4">
              <div className="flex justify-between mb-5">
                <h4 className="font-semibold">Recent Activities</h4>
                <span className="text-violet-400 text-sm">View all</span>
              </div>

              {[
                ["Campaign automation", "Completed", "10:30 AM"],
                ["Team report generated", "Completed", "11:15 AM"],
                ["Project workflow", "In progress", "12:00 PM"],
              ].map(([name, status, time]) => (
                <div key={name}
                  className="flex justify-between items-center border-t border-white/5 py-4 gap-2">
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-gray-500 text-xs mt-1">{time}</p>
                  </div>
                  <span className={`text-xs ${status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
