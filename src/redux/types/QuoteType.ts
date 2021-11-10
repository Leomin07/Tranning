import { IQuote } from '../reducers/QuoteReducer';

export enum QuoteType {
  GET_QUOTE_DONE = 'GET_QUOTE_DONE',
}

interface GetQuote {
  type: QuoteType.GET_QUOTE_DONE;
  payload: IQuote[];
}

export type QuoteAction = GetQuote;
