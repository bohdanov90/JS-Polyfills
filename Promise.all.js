function PROMISEALL(arrayOfPromises) {

	return new Promise((resolve, reject) => {

    const finalArray = [];
    
		let okay = function() { 
      if (!(--arrayOfPromises.length)) resolve(finalArray) 
    }

		arrayOfPromises.forEach((item, index) => {
      item
      .then(result => finalArray[index] = result, reject)
      .then(okay)
    });
    
  });

}