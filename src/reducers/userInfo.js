export default function userInfo(state = [], action) {
  switch (action.type) {
    case 'push-data':
      return [...state, ...action.items];
    case 'replace-data':
      return [...action.items];
    default:
      return state;
  }
}
