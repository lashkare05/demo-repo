const user = {
  name: "seeta",
  age: 24,
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India"
  },
};

// Object.entries : returns an array of key-value pairs
console.log(Object.entries(user));
//output: [[ 'name', 'Seeta' ],[ 'age', 24 ],['address',{ city: 'Pune', state: 'Maharashtra', country: 'India' } ]]

//Object.keys : returns an array of keys(property names)
console.log(Object.keys(user)); 
//output: [ 'name', 'age', 'address' ]

// Object.values : returns an array of values (prperty values)
console.log(Object.values(user));
// ['Seeta',24,{ city: 'Pune', state: 'Maharashtra', country: 'India' }]

// Object.assign : copies properties from source to target / creates shallow copy
console.log(Object.assign({},user));

const a={}; Object.assign(a,user)
console.log(a); 
//{name: 'Seeta', age: 24, address: { city: 'Pune', state: 'Maharashtra', country: 'India' }}

