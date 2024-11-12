function deleteElement(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i, 1);
    }
  }
  return arr;