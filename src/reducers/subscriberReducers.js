import { ADD_SUBSCRIBER, UPDATE_SUBSCRIBER } from '../actions/types'
import Assets from '../assets'

const initialState = {
  subscriberList: [
    {
      id: Math.random(),
      name: 'Water',
      amount: '0',
      icon: Assets.images.WATER,
    },
    {
      id: Math.random(),
      name: 'Gas',
      amount: '12',
      icon: Assets.images.GAS,
    },
    {
      id: Math.random(),
      name: 'Energy',
      amount: '20',
      icon: Assets.images.ENERGY,
    },
    {
      id: Math.random(),
      name: 'Oil',
      amount: '15',
      icon: Assets.images.OIL,
    },
    {
      id: Math.random(),
      name: 'Internet',
      amount: '20',
      icon: Assets.images.INTERNET,
    },
    {
      id: Math.random(),
      name: 'Mobile',
      amount: '10',
      icon: Assets.images.MOBILE,
    },
    {
      id: Math.random(),
      name: 'House Insurance',
      amount: '8',
      icon: Assets.images.HOUSE_INSURANCE,
    },
  ]
}

const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      const subscriber = {
        id: Math.random(),
        name: action.newSubscriber.name,
        amount: action.newSubscriber.amount,
        icon: action.newSubscriber.icon, 
      };
      return {
        ...state,
        subscriberList: state.subscriberList.concat(subscriber)
      };
    case UPDATE_SUBSCRIBER:
      const index = state.subscriberList.findIndex((item => item.id === action.id));
      state.subscriberList[index].amount = action.amount;
      return {
        ...state,
        subscriberList: state.subscriberList
      };
    default:
      return state;
  }
}

export default subscriberReducer