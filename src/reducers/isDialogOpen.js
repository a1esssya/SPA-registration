export default function isDialogOpen(state = false, action) {
  switch (action.type) {
    case 'open-dialog':
      return true;
    case 'close-dialog':
      return false;
    default:
      return state;
  }
}
