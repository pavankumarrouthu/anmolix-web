import { Heading } from "@/components/ui/heading";
import { Code, UserCog, Users, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Engineering Teams",
    description: "For teams that want to focus on building, not on the overhead of manual coordination and status updates.",
  },
  {
    icon: UserCog,
    title: "IT Leaders",
    description: "For leaders who need to ensure execution integrity without spending their days re-planning and chasing updates.",
  },
  {
    icon: Code,
    title: "Technical Founders",
    description: "For founders scaling fast who need a system that maintains execution velocity as complexity grows.",
  },
  {
    icon: TrendingUp,
    title: "Fast-Growing Teams",
    description: "For organizations where rapid growth creates coordination friction and challenges execution speed.",
  }
];

export function WhoFor() {
  return (
    <section id="who-for" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built for Teams That Build</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
