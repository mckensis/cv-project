// Check that an object isn't empty
// Ignores the id field
// Used for deleting empty CV sections upon saving
const checkPopulated = (obj) => {

  for (const [key, value] of Object.entries(obj)) {
    if ((key !== 'id') && (key !== 'display')) {
      if (typeof value === 'string' && value) return true; 
      if (typeof value === 'object' && value.length !== 0) return true;
    }
  }
  return false;
}

export default checkPopulated;