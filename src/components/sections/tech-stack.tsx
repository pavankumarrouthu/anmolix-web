import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "@/components/ui/heading";

const techStack = [
  {
    category: "Frontend",
    technologies: ["React.js", "Next.js", "TailwindCSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "FastAPI", "Python"],
  },
  {
    category: "AI Layer",
    technologies: ["OpenAI", "LangChain", "PyTorch"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Vercel", "GitHub Actions"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Technology Stack</Heading>
          <Subheading className="mt-4 mx-auto">
            We’re blending the best of innovation and scalability.
          </Subheading>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((stack) => (
                  <div key={stack.category}>
                    <h3 className="font-headline text-lg font-bold mb-3">{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
