import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";
import { Linkedin, Mail, Users } from "lucide-react";
import Link from "next/link";

export function Cta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4">
          Join the Movement
        </Heading>
        <Subheading className="mx-auto mb-8">
          Want to collaborate, invest, or participate in our beta testing?
          Let’s shape the future of intelligent work — together.
        </Subheading>
        
        <div className="mb-8">
          <a href="mailto:contact@anmolix.com" className="text-lg font-medium text-primary hover:underline flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />
            contact@anmolix.com
          </a>
          <p className="text-muted-foreground mt-1">Hyderabad, India</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              <Users className="mr-2" /> Join the Waitlist
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:contact@anmolix.com">
              <Mail className="mr-2" /> Contact Us
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
