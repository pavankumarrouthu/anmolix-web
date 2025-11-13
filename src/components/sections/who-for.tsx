import { Heading, Subheading } from "@/components/ui/heading";
import { Users, Rocket, Building, Briefcase, User, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Organize studies, manage projects, and track progress with AI assistance.",
  },
  {
    icon: User,
    title: "Individuals",
    description: "Plan goals, stay consistent, and understand your productivity patterns.",
  },
  {
    icon: Briefcase,
    title: "Founders",
    description: "Lead teams, measure performance, and make data-driven decisions.",
  },
  {
    icon: Users,
    title: "Teams",
    description: "Collaborate in real time, automate routine tasks, and stay aligned.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Accelerate execution, manage workflows, and optimize team output.",
  },
  {
    icon: Building,
    title: "MSMEs",
    description: "Gain intelligent visibility into operations, performance, and growth.",
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built for Every Visionary</Heading>
          <Subheading className="mt-4">From learners to leaders — Anmolix adapts to how you work.</Subheading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
             const Icon = audience.icon;
            return(
            <div key={index} className="text-center p-6 bg-card/50 border border-border rounded-2xl shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-sans text-lg font-bold mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          )})}
        </div>
        <p className="text-center mt-12 text-muted-foreground">Whatever your goal — Anmolix grows with you.</p>
      </div>
    </section>
  );
}
