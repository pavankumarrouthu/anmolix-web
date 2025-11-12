import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "@/components/ui/heading";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">Product Roadmap</Heading>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              <div className="w-1/2 pr-8 text-right">
                <Card className="shadow-lg inline-block">
                  <CardHeader>
                    <CardTitle className="font-headline">Current Stage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Pilot Testing with select teams and early users</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative flex items-center">
               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary" />
               <div className="w-1/2" />
               <div className="w-1/2 pl-8 text-left">
                <Card className="shadow-lg inline-block">
                    <CardHeader>
                      <CardTitle className="font-headline">Next</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Beta Release → Early Access → Global Rollout</p>
                    </CardContent>
                  </Card>
               </div>
            </div>
          </div>
        </div>
        <Subheading className="text-center mt-12 max-w-3xl mx-auto">
            We’re evolving Anmolix through real-world testing to ensure impact, usability, and measurable performance improvements.
        </Subheading>
      </div>
    </section>
  );
}
