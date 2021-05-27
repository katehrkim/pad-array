// REMEMBER TO PSEUDOCODE
function pad (array, minSize, value=null) {
  if (array.length < minSize) {
    let count = array.length;
    while (count < minSize) {
      if (!value) {
        array.push('None');
      }
      else {
        array.push(value);
      }
      ++count;
    }
  }
  console.log(array);
  return array;
};
module.exports = pad;
