import { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  href: string;
  children: ReactNode;
};

export const ExternalLink = ({ href, children }: Props) => {
  return (
    <span className='px-1.5 text-blue-500 hover:underline'>
      <a href={href} target='_blank' rel='noreferrer' className='pr-2'>
        {children}
      </a>
      <FaExternalLinkAlt className='inline' />
    </span>
  );
};
