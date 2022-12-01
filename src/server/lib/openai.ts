import { OPENAI_API_KEY } from '@/server/const/env';
import { Configuration, OpenAIApi } from 'openai';

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: OPENAI_API_KEY,
  })
);
