import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Subheading } from "@/components/ui/heading";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">Evolving Through Intelligence. Step by Step.</Heading>
            <Subheading className="mt-4 max-w-2xl mx-auto">We’re continuously testing, learning, and improving to make Anmolix the world’s most adaptive workspace.</Subheading>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              <div className="w-1/2 pr-8 text-right">
                <Card className="shadow-lg inline-block bg-secondary/50 border-0">
                  <CardHeader>
                    <CardTitle className="font-headline">Pilot Testing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Real users, real feedback</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative flex items-center">
               <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-muted" />
               <div className="w-1/2" />
               <div className="w-1/2 pl-8 text-left">
                <Card className="shadow-lg inline-block bg-secondary/50 border-0">
                    <CardHeader>
                      <CardTitle className="font-headline">Beta Launch</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">Coming Soon (Early access program)</p>
                    </CardContent>
                  </Card>
               </div>
            </div>
             <div className="relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-muted" />
              <div className="w-1/2 pr-8 text-right">
                <Card className="shadow-lg inline-block bg-secondary/50 border-0">
                  <CardHeader>
                    <CardTitle className="font-headline">Global Release</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">2025 (Full platform availability)</p>
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
