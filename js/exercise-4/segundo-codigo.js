const user = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };
  
  function userName(user) {
    const fullName = `${user.name} ${user.last}`;
  
    return fullName;
  }
  
  function userSalary(user){
    const NUMBER_OF_MONTHS = 12;
    const annualSalary = user.salary * NUMBER_OF_MONTHS;
  
    return annualSalary;
  }
  
  function presentUser(user){
    const namePresentation = "Hola, me llamo";
    const salaryPresentation = "y mi salario es";
    const userFullName = userName(user);
    const userAnnualSalary = userSalary(user);
    const fullPresentation = `${namePresentation} ${userFullName} ${salaryPresentation} ${userAnnualSalary}`;
  
    return fullPresentation;
  }
  
  console.log(presentUser(user));