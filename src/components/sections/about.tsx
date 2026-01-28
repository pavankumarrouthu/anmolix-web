import { Heading, Subheading } from "@/components/ui/heading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Subheading className="font-semibold text-primary">The Core Problem</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            Execution Breaks When Reality Changes
          </Heading>
          <p className="text-lg text-muted-foreground">
            Workflows slip. Dependencies break. Priorities shift. When plans meet reality, execution fails. This forces leaders and developers to become human routers—manually re-planning work, chasing context, and fixing schedules across the system.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-16">
          <Heading as="h3" className="mb-6 text-2xl">
            Existing Tools Only Record What's Broken
          </Heading>
          <p className="text-lg text-muted-foreground">
            Modern tools are great for tracking work, but they only record delays after they happen. They are passive databases, not active systems. They don't fix execution; they just create a backlog of what’s already broken, leaving your team to do the manual work of correction.
          </p>
        </div>
      </div>
    </section>
  );
}
