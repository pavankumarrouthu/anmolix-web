import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">We’re building the future of productivity — one intelligent step at a time.</Heading>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-border/40" />
          <div className="relative grid grid-cols-2 gap-8">
            
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-6 h-6 rounded-full bg-primary ring-4 ring-background z-10" />
                <Card className="shadow-lg bg-secondary/50 border-0 w-full">
                  <CardHeader>
                    <CardTitle className="font-headline">Pilot Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Getting Ready</p>
                  </CardContent>
                </Card>
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center">
               <div className="w-6 h-6 rounded-full bg-muted ring-4 ring-background z-10" />
               <Card className="shadow-lg bg-secondary/50 border-0 w-full">
                    <CardHeader>
                      <CardTitle className="font-headline">Beta Launch</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">Coming Soon</p>
                    </CardContent>
                  </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
