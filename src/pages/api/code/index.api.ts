import { openai } from '@/server/lib/openai';
import { translateToEnglish } from '@/server/lib/translate';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string') {
    res.status(400).end();
    return;
  }

  const translatedText = await translateToEnglish(text);

  const { data } = await openai.createCompletion({
    prompt: translatedText,
    model: 'text-davinci-003',
    max_tokens: 2000,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.json({
    data,
  });
};

export default handler;
