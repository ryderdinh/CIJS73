// Named export

const newObject = {
  name: 'Nguyen Van A',
  job: 'Front-end developer'
};
const newObject1 = {
  name: 'Nguyen Van B',
  job: 'Back-end developer'
};

const updateObject1 = (name, job) => {
  newObject1.name = name;
  newObject1.job = job;
};

// Cach 1
// export const variable = newObject;
// export const variable1 = newObject1;

// Cach 2
export { newObject, newObject1, updateObject1 };
