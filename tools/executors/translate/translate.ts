// Imports the Google Cloud client library
import { v2 } from '@google-cloud/translate';

// Creates a client
// To create one follow https://cloud.google.com/translate/docs/setup
const translate = new v2.Translate({
  projectId: 'ngneat-falso',
  keyFilename: './tools/executors/translate/files/google-cloud-secret.json',
});

export async function translateText(
  text: string,
  language: string
): Promise<string> {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  // Un-comment below once you have google-cloud-secret.json file ready
  // let [translations] = await translate.translate(text, target);

  // Comment below once you have google-cloud-secret.json file ready
  const translation = language + '-' + text;
  return translation;
}

export async function translateJSON(
  jsonData: { data: any[] },
  language: string
): Promise<{ data: any[] }> {
  let updatedJSON: { data: any[] } = { data: [] };

  const data = jsonData.data;

  if (data) {
    const updatedData = await translateElement(data, language);

    updatedJSON.data = updatedData;

    return updatedJSON;
  }

  throw new Error(`JSON's data must be present under root-level "data" key`);
}
function translateDataArray(data: any[], language: string): Promise<any[]> {
  if (Array.isArray(data)) {
    return Promise.all(
      data.map(async (d): Promise<any> => {
        return translateElement(d, language);
      })
    );
  }
}
async function translateDataObject(data: any, language: string): Promise<any> {
  const updatedData: any = {};

  for (const key in data) {
    const element = data[key];
    let value = await translateElement(element, language);
    updatedData[key] = value;
  }

  return updatedData;
}
async function translateElement(element: any, language: string) {
  switch (typeof element) {
    case 'string':
      return await translateText(element, language);
    case 'object':
      if (Array.isArray(element)) {
        return await translateDataArray(element, language);
      } else {
        return await translateDataObject(element, language);
      }
    default:
      return element;
  }
}
