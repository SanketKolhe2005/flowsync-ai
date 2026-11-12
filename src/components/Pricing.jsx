
import {
  Check,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
    price: "0",
    period: "forever",
    icon: Zap,
    popular: false,
    features: [
      "Up to 3 projects",
      "Basic workflow automation",
      "Essential analytics",
      "1 team member",
      "Community support"
    ],
    button: "Get Started Free"
  },
  {
    name: "Professional",
    description: "Everything you need to grow faster.",
    price: "19",
    period: "per month",
    icon: Sparkles,
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced AI automation",
      "Detailed analytics",
      "Up to 10 team members",
      "Priority support",
      "Custom workflows"
    ],
    button: "Start Pro Trial"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">

      <div className="absolute top-20 right-0 w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Simple Pricing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Plans that grow with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              your business
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            Start for free and upgrade whenever you're ready.
            No hidden fees, just powerful productivity tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-[#17132b] border-violet-500 shadow-xl shadow-violet-900/20"
                    : "bg-[#111125] border-white/10"
                }`}
              >

                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-violet-500/15 text-violet-400 p-3 rounded-xl">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-2 mt-8 mb-8">
                  <span className="text-5xl font-bold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">
                    / {plan.period}
                  </span>
                </div>

                <a
                  href="#contact"
                  className={`flex justify-center items-center gap-2 w-full py-4 rounded-xl font-semibold transition ${
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-500"
                      : "border border-white/20 hover:bg-white/10"
                  }`}
                >
                  {plan.button}
                  <ArrowRight size={18} />
                </a>

                <div className="border-t border-white/10 mt-8 pt-7">
                  <p className="font-semibold mb-5 text-sm">
                    What's included:
                  </p>

                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <Check
                          size={18}
                          className="text-green-400 shrink-0"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
