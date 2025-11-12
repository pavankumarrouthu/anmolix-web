import { Heading, Subheading } from "@/components/ui/heading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2" className="mb-4">
              Where Work Meets Intelligence
            </Heading>
            <Subheading className="mb-6">
              Anmolix is building an intelligent productivity and collaboration platform that simplifies how people and teams work, plan, and perform. We bring automation, analytics, and teamwork into a unified ecosystem — so you can focus on what truly matters: <strong>growth, creativity, and results.</strong>
            </Subheading>
          </div>
          <div className="flex flex-col gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">🔹 Pilot Testing in Progress</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">🔹 AI + Productivity + Collaboration Unified</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-semibold text-primary">🔹 Empowering Students to Enterprises</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
