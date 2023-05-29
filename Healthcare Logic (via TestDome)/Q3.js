function Person(h,w) {
    this.height = h;
    this.weight = w;

  }
  
  function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.
    for (i in data) {
        let data[i] = Person;
    }
  }
  
  var avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
  });
  console.log(avgHeight);