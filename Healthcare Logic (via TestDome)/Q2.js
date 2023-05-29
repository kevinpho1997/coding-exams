function numberOfItems(arr, item) {
    // Write the code that goes here
    let count = 0;
    if (arr.filter(ele => ele === item)) {
        count++;
        for (i in arr) {
            // console.log(arr[i]);
            if (arr[i] instanceof Array) {
                if (arr[i].filter(ele => ele === item)){
                    count++;  
                }
            }
            i++;
        }
    }
    return count;
  }
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25],
    ["banana", "strawberry", "apple", 25],
    ["banana", "3", "apple"]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));