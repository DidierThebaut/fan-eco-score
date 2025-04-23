
import { Car, Earth, Trophy } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Connect With Fans",
      description: "Find or offer rides with fellow sports enthusiasts going to the same events.",
      icon: <Trophy className="h-10 w-10 text-primary" />,
    },
    {
      title: "Share the Ride",
      description: "Travel together in comfort while splitting costs and reducing emissions.",
      icon: <Car className="h-10 w-10 text-primary" />,
    },
    {
      title: "Track Your Impact",
      description: "See exactly how much CO2 you've saved by choosing to share rides.",
      icon: <Earth className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How CLEAN AIR Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="rounded-full bg-secondary p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
