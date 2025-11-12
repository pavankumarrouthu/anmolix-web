import { Heading, Subheading } from "@/components/ui/heading";

export function FounderNote() {
    return (
        <section id="founder-note" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <Heading as="h3" className="mb-4 text-2xl">A Note from the Founder</Heading>
                <blockquote className="max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl italic text-muted-foreground">
                        “We started Anmolix to redefine how people and organizations experience productivity. Intelligence shouldn’t replace human potential — it should elevate it.”
                    </p>
                    <footer className="mt-6 text-base font-medium text-foreground">
                        — Routhu Pavan Kumar, Founder & Vision Architect, Anmolix
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
