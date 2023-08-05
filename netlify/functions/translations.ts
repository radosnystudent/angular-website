/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handler, HandlerContext, HandlerEvent } from '@netlify/functions';
import translations from './data/translations.json';

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  return {
    statusCode: 200,
    body: JSON.stringify(translations),
  };
};

export { handler };
