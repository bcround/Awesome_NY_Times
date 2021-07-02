import { Multimedia } from '@/types';

export const getSrcOfImage = (multimedia: Multimedia[]) => {
  return multimedia.find((media) => media.subtype === 'mediumThreeByTwo440')?.url;
};

export const convertDate = (date: string) => {
  return date.slice(0, date.indexOf('T'));
};

export const limitWordsTo30 = (paragraph: string) => {
  const words = paragraph.split(' ');

  if (words.length > 30) {
    return `${words.slice(0, 29).join(' ')} ...more`;
  }

  return paragraph;
};
