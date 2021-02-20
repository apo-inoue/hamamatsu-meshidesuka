/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ?? '',
});
