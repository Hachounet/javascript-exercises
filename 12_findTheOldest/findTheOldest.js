const findTheOldest = function(input) {
    input.forEach((item) => {
      if (item.yearOfDeath) {
        item.age = item.yearOfDeath - item.yearOfBirth;
      } else {
        let todayYear = 2023;
        item.age = todayYear - item.yearOfBirth;
      }
    });
  
    let oldestPerson = input.reduce((acc, currentPerson) => {
        if (acc.age < currentPerson.age) {
        return { age: currentPerson.age, name: currentPerson.name };
      }
      return acc;
    }, { age: 0, name: '' });
    
    return oldestPerson
  };

// Do not edit below this line
module.exports = findTheOldest;
