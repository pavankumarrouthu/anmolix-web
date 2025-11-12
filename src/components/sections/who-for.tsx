import { Heading, Subheading } from "@/components/ui/heading";
import { Users, Rocket, Building, Briefcase, User, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Plan your studies, track goals, and learn with clarity.",
  },
  {
    icon: User,
    title: "Individuals",
    description: "Build consistency, focus smarter, and track growth.",
  },
  {
    icon: Briefcase,
    title: "Founders",
    description: "Lead with data-driven insights and alignment.",
  },
  {
    icon: Users,
    title: "Teams",
    description: "Collaborate seamlessly with unified tools.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Simplify execution and scale intelligently.",
  },
  {
    icon: Building,
    title: "MSMEs",
    description: "Optimize operations and improve team performance.",
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built for Everyone Who Builds</Heading>
          <Subheading className="mt-4">Whether you’re studying, creating, leading, or scaling — Anmolix grows with you.</Subheading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
             const Icon = audience.icon;
            return(
            <div key={index} className="text-center p-6 bg-background/50 rounded-2xl shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
