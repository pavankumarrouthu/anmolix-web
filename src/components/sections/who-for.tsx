import { Heading, Subheading } from "@/components/ui/heading";
import { Code, UserCog } from "lucide-react";

const audiences = [
  {
    icon: Code,
    title: "For Developers: The Shield",
    description: "Stop manual status updates. The Agent watches your Git commits and updates the board for you. It protects your focus time by negotiating realistic deadlines.",
  },
  {
    icon: UserCog,
    title: "For Managers: The Co-Pilot",
    description: "Recover the 15 hours/week you lose to 'Coordination Tax.' Let the Agent handle rescheduling and follow-ups while you focus on strategy.",
  },
];

export function WhoFor() {
  return (
    <section id="developers" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built for High-Velocity Engineering</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => {
             const Icon = audience.icon;
            return(
            <div key={index} className="text-center p-8 bg-card/50 border border-border rounded-2xl shadow-sm hover:shadow-primary/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground">{audience.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
