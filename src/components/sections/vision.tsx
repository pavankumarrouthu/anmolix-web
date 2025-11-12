import { Heading } from "@/components/ui/heading";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-headline mb-8">
            “To become the world’s most adaptive productivity intelligence system — where AI understands, assists, and amplifies human capability.”
          </blockquote>
          <div className="border-t border-primary-foreground/20 pt-8">
            <h3 className="text-xl font-headline font-bold mb-2 text-accent">Our Mission</h3>
            <p className="max-w-3xl mx-auto text-lg text-primary-foreground/80">
              To help individuals and organizations unlock their peak potential through intelligent automation, contextual analytics, and seamless collaboration — transforming how work happens, not just where it happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
