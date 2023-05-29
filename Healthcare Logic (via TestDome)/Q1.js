function findAllHobbyists(hobby, hobbies) {
    let namesArray = [];
    // console.log(hobbies);
    for (person in hobbies) {
        // console.log(person);
        for (personalHobby in person) {
            if (person.personalHobby === hobby) {
                namesArray.push(person);
            }
            personalHobby++;
            // console.log(personalHobby);
        }
        person++;
    };

    // console.log("namesArray", namesArray);
    return [namesArray];
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));