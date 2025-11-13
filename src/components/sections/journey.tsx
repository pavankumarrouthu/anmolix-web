import { Heading, Subheading } from "@/components/ui/heading";

export function FounderNote() {
  return (
    <section id="founder-note" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-4">
            A Note from the Founder
          </Heading>
          <blockquote className="mt-6">
            <p className="text-xl italic text-muted-foreground">
              “We started Anmolix to redefine how people and organizations experience productivity. Intelligence shouldn’t replace human potential, it should elevate it.”
            </p>
            <footer className="mt-6">
              <p className="font-bold text-foreground">Routhu Pavan Kumar</p>
              <p className="text-sm text-primary">Founder & Vision Architect, Anmolix</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}