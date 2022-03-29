const filterPerson = persons.filter((item) => {
  let year = new Date(item.birthday).getFullYear();
  return new Date().getFullYear() - year > 18;
});

console.log(filterPerson);
