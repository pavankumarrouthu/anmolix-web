import { Heading } from "@/components/ui/heading";

export function FounderNote() {
  return (
    <section id="founder-note" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4">A Note from the Founder</Heading>
        <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                <p className="text-lg">"We started Anmolix to redefine how people and organizations experience productivity. Intelligence shouldn’t replace human potential — it should elevate it."</p>
            </blockquote>
            <p className="mt-4 font-semibold text-foreground">– Routhu Pavan Kumar, Founder & Vision Architect, Anmolix</p>
        </div>
      </div>
    </section>
  );
}
