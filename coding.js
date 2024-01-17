function processIntegerList(inputList) {

    // Check if the length is a multiple of 10
    if (inputList.length % 10 !== 0) {
      console.error("Error: The list must be a multiple of 10 in length.");
      return;
    }
  
    // Remove items at positions which are a multiple of 2 or 3
    const filteredList = inputList.filter((_, index) => index % 2 !== 0 && index % 3 !== 0);
  
    return filteredList;
  }
  
  
  
  