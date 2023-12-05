import { Handler, HandlerContext, HandlerEvent } from '@netlify/functions';
import translations from './data/translations.json';

/* eslint-disable @typescript-eslint/no-unused-vars */
const handler: Handler = async (
  _event: HandlerEvent,
  _context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(translations),
  };
};

export { handler };
