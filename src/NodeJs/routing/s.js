let people_details = [
    {name: "ABC", age: 18},
    {name: "GeeksforGeeks", age: 30},
    {name: "DEF", age: 50},
  ];
  console.log(people_details);
  
  let data = people_details.filter(
    element => element.age >= 30);
  console.log(data);