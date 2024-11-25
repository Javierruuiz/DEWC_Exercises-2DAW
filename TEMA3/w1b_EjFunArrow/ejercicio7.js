export function filterByTerm(array, term) {
    return array.filter((ana) => {
        return word
          .toLowerCase()
          .includes(term.toLowerCase())
      });
  }