import { QuoteAction, QuoteType } from '../types/QuoteType';

export interface IQuote {
  quote: string;
  // name: string;
  character: string;
  image: string;
  characterDirection: string;
  // quotes: [];
}

export interface QuoteState {
  quotes: IQuote[];
}
// const data: IQuote = {
//   quote: 's',
//   character: 'f',
// };

// const initQuote: QuoteState = {
//   quotes: {
//     quote: '',
//     character: '',
//   },
// };
const initQuote: QuoteState = {
  quotes: [],
};

export const quoteReducer = (
  // state = initQuote,
  state: QuoteState = initQuote,
  action: QuoteAction
) => {
  switch (action.type) {
    case QuoteType.GET_QUOTE_DONE:
      return {
        ...state,
        quotes: action.payload,
      };
    default:
      return state;
  }
};
