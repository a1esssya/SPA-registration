export default function isSignUp(state = false, action) {
  switch (action.type) {
    case 'signUp':
      return true;
    case 'editSignUp':
      return false;
    default:
      return state;
  }
}
