import { Heading } from "@/components/ui/heading";

export function FounderNote() {
  return (
    <section id="founder-note" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-4">
            Why We Built This
          </Heading>
          <blockquote className="mt-6">
            <p className="text-xl italic text-muted-foreground">
              “Modern engineering teams are overloaded with tools — yet still trapped doing manual coordination. We built Anmolix to remove that burden entirely. Not by adding more dashboards, but by letting an intelligent system manage coordination the way humans actually work.”
            </p>
            <footer className="mt-6">
              <p className="font-bold text-foreground">The Anmolix Team</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
