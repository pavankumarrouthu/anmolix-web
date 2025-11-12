'use server';

/**
 * @fileOverview A flow for dynamically suggesting Anmolix features based on a generative AI model.
 *
 * - dynamicallySuggestFeatures - A function that returns a list of dynamically suggested Anmolix features.
 * - DynamicallySuggestedFeaturesOutput - The return type for the dynamicallySuggestFeatures function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicallySuggestedFeaturesOutputSchema = z.array(z.string().describe('A suggested feature for Anmolix')).describe('A list of dynamically suggested Anmolix features.');
export type DynamicallySuggestedFeaturesOutput = z.infer<typeof DynamicallySuggestedFeaturesOutputSchema>;

export async function dynamicallySuggestFeatures(): Promise<DynamicallySuggestedFeaturesOutput> {
  return dynamicallySuggestFeaturesFlow();
}

const prompt = ai.definePrompt({
  name: 'dynamicallySuggestFeaturesPrompt',
  output: {schema: DynamicallySuggestedFeaturesOutputSchema},
  prompt: `You are an expert in productivity and collaboration software. Suggest a list of features for Anmolix, a platform designed to redefine productivity and collaboration for modern teams through intelligent automation, data-driven insights, and a unified workspace. Focus on innovative and impactful features that would appeal to enterprises, startups, and growing teams. Return a list of 5 features.`,
});

const dynamicallySuggestFeaturesFlow = ai.defineFlow(
  {
    name: 'dynamicallySuggestFeaturesFlow',
    outputSchema: DynamicallySuggestedFeaturesOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
