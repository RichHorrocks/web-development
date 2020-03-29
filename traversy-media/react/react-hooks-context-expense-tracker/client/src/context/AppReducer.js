export default (state, action) => {
  switch (action.type) {
    case 'GET_TX':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case 'DELETE_TX':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    case 'ADD_TX':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'TX_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
