import { DEEPL_API_KEY } from '@/server/const/env';
import axios from 'axios';

export const translateToEnglish = async (text: string) => {
  const res = await axios.post<{
    translations: {
      text: string;
    }[];
  }>(
    'https://api-free.deepl.com/v2/translate',
    {
      text: [text],
      target_lang: 'EN',
    },
    {
      headers: {
        Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
      },
    }
  );

  return res.data.translations.map((t) => t.text).join('');
};
