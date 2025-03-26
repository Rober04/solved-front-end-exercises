const user = {
    name: "Álvaro",
    last: "Morón",
    age: 30,
    nationality: "Moroccan",
  };
  
  function isForeigner(user) {
    const LOCAL_NATIONALITY = "Spanish";
    if(user.nationality === LOCAL_NATIONALITY){
      return false;
    }
    else{
      return true;
    }
  }
  
  function hasRequiredAge(user) {
    const MINIMUM_REQUIRED_AGE = 30;
    if(user.age === MINIMUM_REQUIRED_AGE){
      return true;
    }
    else{
      return false;
    }
  }
  
  function notifyGovernmentAid(user) {
    const NON_ELEGIBLE = "No es elegible para la ayuda del gobierno";
  
    function meetsRequirements(user) {
      return isForeigner(user) && hasRequiredAge(user);
    }
  
    if(meetsRequirements(user)){
      const fullName = `${user.name} ${user.last}`;
      const aid = 2000;
      const notification = `${fullName} se te ha concedido la ayuda de ${aid}€`;
  
      return notification;
    }
    else{
      return NON_ELEGIBLE;
    }
  }
  
  console.log(notifyGovernmentAid(user));