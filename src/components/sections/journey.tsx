import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "@/components/ui/heading";
import { Rocket } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">Our Journey</Heading>
        </div>
        <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3">
                        <Rocket className="h-6 w-6 text-primary"/>
                        <span>Pilot Testing & Beta Launch</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        We’re in <strong>pilot testing</strong> — refining our platform with real teams to ensure impact, usability, and measurable results.
                    </p>
                    <p className="text-muted-foreground">
                        The <strong>beta launch</strong> is coming soon, and we’re actively partnering with organizations that share our vision for the future of work.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
