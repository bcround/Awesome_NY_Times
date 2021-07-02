import { AsyncActionCreatorBuilder } from 'typesafe-actions';

export interface Article {
  abstract: string;
  web_url: string;
  snippet: string;
  print_section?: string;
  print_page?: number;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[] | [];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: string | null;
}

interface Person {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  role: string;
  organization: string;
  rank: number;
}

interface Headline {
  main: string;
  kicker: string | null;
  content_kicker: string | null;
  print_headline: string | null;
  name: string | null;
  seo: string | null;
  sub: string | null;
}

interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

export type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
