'use client';

import { useEffect, useState } from 'react';
import { dynamicallySuggestFeatures } from '@/ai/flows/dynamically-suggest-features';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function DynamicFeatures() {
  const [features, setFeatures] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFeatures() {
      try {
        setLoading(true);
        const result = await dynamicallySuggestFeatures();
        setFeatures(result);
      } catch (e) {
        setError('Failed to load suggested features.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadFeatures();
  }, []);

  return (
    <Card className="bg-background/70">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Lightbulb className="h-6 w-6 text-accent" />
          <span>AI-Suggested Innovations</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
         <p className="text-muted-foreground mb-4 text-sm">
            Powered by our own AI, here are some innovative features we are exploring:
        </p>
        {loading && (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        )}
        {error && (
            <div className="text-sm text-destructive flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span>{error}</span>
            </div>
        )}
        {!loading && !error && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-3 mt-1">&#10022;</span>
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
