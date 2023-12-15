const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]



  function getTheTitles(input) {
    return input.reduce((acc, currentValue) => {
        acc.push(currentValue.title);
        return acc;
    }, []);
}

// Do not edit below this line
module.exports = getTheTitles;
