import { Handler } from '@netlify/functions';
import translations from './data/translations.json';

/* eslint-disable @typescript-eslint/no-unused-vars */
const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(translations),
  };
};

export { handler };
