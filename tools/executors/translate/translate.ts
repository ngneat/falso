// Imports the Google Cloud client library
import { v2 } from '@google-cloud/translate';

// Creates a client
// To create one follow https://cloud.google.com/translate/docs/setup
const translate = new v2.Translate({
  projectId: 'ngneat-falso',
  keyFilename: './tools/executors/translate/files/google-cloud-secret.json',
});

export async function translateText(text: string[], target: string) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  // Un-comment below once you have google-cloud-secret.json file ready
  // let [translations] = await translate.translate(text, target);

  // Comment below once you have google-cloud-secret.json file ready
  const translations = text.map((t) => 'Translated ' + t);
  return translations;
}
