import { Heading, Subheading } from "@/components/ui/heading";
import { CheckCircle } from "lucide-react";

const highlights = [
  {
    icon: "🚀",
    text: "Unified productivity and collaboration ecosystem",
  },
  {
    icon: "🧠",
    text: "AI-powered insights for modern teams",
  },
  {
    icon: "🌍",
    text: "Built for students, startups, and enterprises",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Subheading className="font-semibold text-primary">About Anmolix</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            Where Productivity Meets Intelligence
          </Heading>
          <p className="text-lg text-muted-foreground">
            Anmolix is building the next-generation workspace — uniting productivity, collaboration, and analytics into one intelligent platform. We help individuals and organizations streamline work, automate repetitive tasks, and make better decisions powered by AI-driven insights.
          </p>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 gap-4 text-left max-w-md mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-xl pt-0.5">{highlight.icon}</span>
                <p className="text-base text-muted-foreground">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg font-semibold text-foreground/80 tracking-wide">
            Work smarter. Collaborate faster. Grow intelligently.
          </p>
        </div>
      </div>
    </section>
  );
}
