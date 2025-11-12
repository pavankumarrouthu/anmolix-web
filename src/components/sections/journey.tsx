import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "@/components/ui/heading";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">We’re building the future of productivity — one intelligent step at a time.</Heading>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              <div className="w-1/2 pr-8 text-right">
                <Card className="shadow-lg inline-block bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="font-headline">Pilot Testing: Getting Ready</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Ongoing (select users & teams)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative flex items-center">
               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-muted" />
               <div className="w-1/2" />
               <div className="w-1/2 pl-8 text-left">
                <Card className="shadow-lg inline-block bg-secondary/50">
                    <CardHeader>
                      <CardTitle className="font-headline">Beta Launch</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">Coming Soon</p>
                    </CardContent>
                  </Card>
               </div>
            </div>
             <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-muted" />
              <div className="w-1/2 pr-8 text-right">
                <Card className="shadow-lg inline-block bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="font-headline">Full Release</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">2025</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
