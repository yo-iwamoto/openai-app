import { ExternalLink } from '@/components/ExternalLink';
import { LoadingCircle } from '@/components/LoadingCircle';
import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';

export default function Page() {
  const [text, setText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [urls, setUrls] = useState<string[]>([]);

  const getData = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const res = await axios.post<{ urls: string[] }>('/api/gen', { text });
        setUrls(res.data.urls);
      } catch (err) {
        console.error(err);
        alert('エラーが発生しました');
      }
      setIsLoading(false);
    },
    [text]
  );

  return (
    <>
      <div className='my-40 flex flex-col items-center gap-12 font-mono'>
        <form onSubmit={getData} className='flex flex-col items-center gap-12'>
          <textarea
            rows={3}
            className='min-w-[320px] rounded-lg border p-2'
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />

          <button
            disabled={isLoading}
            type='submit'
            className='rounded-lg bg-blue-700 p-2 text-white shadow-xl transition-colors hover:bg-blue-600 disabled:bg-blue-300'
          >
            <span className='flex h-8 w-32 items-center justify-center'>
              {isLoading ? <LoadingCircle /> : '画像を生成'}
            </span>
          </button>
        </form>

        <ul className='flex flex-wrap items-center justify-center gap-8'>
          {urls.map((url) => (
            <a key={url} href={url} target='_blank' rel='noreferrer'>
              <img
                src={url}
                alt={text}
                className='h-64 w-64 rounded-md shadow-xl transition-transform hover:scale-105'
              />
            </a>
          ))}
        </ul>
      </div>

      <section className='flex flex-col items-center gap-4 text-center'>
        <p className='text-sm'>
          このアプリケーションは
          <ExternalLink href='https://www.deepl.com/ja/docs-api'>DeepL API</ExternalLink>
          および
          <ExternalLink href='https://beta.openai.com/docs/guides/images/introduction'>
            OpenAI の Image generation
          </ExternalLink>
          を使用しています
        </p>

        <p className='text-sm'>
          developed by
          <ExternalLink href='https://twitter.com/yoiwamoto'>@yoiwamoto</ExternalLink>
        </p>
      </section>
    </>
  );
}
