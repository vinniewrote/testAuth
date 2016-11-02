function entries(state = [], action) {
  console.log('The entries will change');
  console.log('Entries:' + state, action);
  return state;
}

export default entries;
