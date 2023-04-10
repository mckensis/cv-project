//Check that an object isn't empty
//Ignores the id field
const checkPopulated = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key !== 'id') {
      if (value !== '') {
        return true;
      }
    }
  }
  return false;
}

export default checkPopulated;