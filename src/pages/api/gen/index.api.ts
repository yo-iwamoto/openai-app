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

  const { data } = await openai.createImage({
    size: '512x512',
    n: 3,
    prompt: translatedText,
  });

  res.json({
    urls: data.data.map((i) => i.url),
  });
};

export default handler;
