function longerOf(a, b) {
    return a.length > b.length ? a : b;
}
  
function getLargestString(arr) {
    let largest = "";
    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];
        if (!Array.isArray(currentEle)) {
            largest = longerOf(currentEle, largest);
        } else {
            const currentEleLargest = getLargestString(currentEle);
            largest = longerOf(currentEle, currentEleLargest);
        }
    }
    return largest;
}
  
  const strings = [
    "a",
    "ab",
    [
      "abcd",
      "derfg",
      ["asdasd", "DGdgdfsg", "asdgsdfhsdhf", "sdafsafsadfsadfsdfsadf"],
      "sdfsdfsd",
      "asdfsaf",
    ],
    "sdafasdf",
    "sdfsadf",
    "sadfsafsd",
  ];