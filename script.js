/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  
  function addData() {
    const newEmployee = { id: 4, name: "kajal", age: "22", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "pramila", age: "27", profession: "designer" },
      { id: 5, name: "raj", age: "31", profession: "engineer" },
      { id: 6, name: "rahul", age: "18", profession: "analyst" }
    ];
  
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }