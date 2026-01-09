import { Heading, Subheading } from "@/components/ui/heading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Subheading className="font-semibold text-primary">The Anmolix Way</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            From Static Plans to Living Schedules
          </Heading>
          <p className="text-lg text-muted-foreground">
            Most project tools track tasks. None of them manage what happens when reality changes. Anmolix exists to eliminate the manual work of rescheduling, updating tickets, and chasing down updates, so your team can focus on shipping code.
          </p>
        </div>
      </div>
    </section>
  );
}
