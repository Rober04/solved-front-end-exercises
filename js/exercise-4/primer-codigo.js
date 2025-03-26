const user = { 
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    profession: "Barro man",
  };
  
  console.log(presentUser(user));
  
  function userName(user) {
    const fullName = `${user.name} ${user.last}`;
  
    return fullName;
  }
  
  function presentUser(user){
    const presentation = "Hola, me llamo";
    const userFullName = userName(user);
    const fullPresentation = `${presentation} ${userFullName}`;
  
    return fullPresentation
  }