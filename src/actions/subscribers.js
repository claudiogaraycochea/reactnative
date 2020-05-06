import { ADD_SUBSCRIBER, UPDATE_SUBSCRIBER } from './types';

export const updateSubscriber = (id, amount) => (
  {
    type: UPDATE_SUBSCRIBER,
    id: id,
    amount: amount
  }
);

export const addSubscriber = (newSubscriber) => (
  {
    type: ADD_SUBSCRIBER,
    newSubscriber: newSubscriber
  }
);
