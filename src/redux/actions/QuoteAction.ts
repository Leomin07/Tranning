import { Dispatch } from 'redux';
import { QuoteType } from '../types/QuoteType';

export const getQuoteFetchAction = () => {
  return (dispatch: Dispatch) => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: QuoteType.GET_QUOTE_DONE,
          payload: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getQuoteXMLAction = () => {
  return (dispatch: Dispatch) => {
    const request = new XMLHttpRequest();
    request.responseType = 'json';
    request.onreadystatechange = e => {
      if (request.status === 200) {
        dispatch({
          type: QuoteType.GET_QUOTE_DONE,
          payload: request.response.data,
        });
      } else {
        console.log('error');
      }
    };
    request.open('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes');
    request.send();
  };
};
