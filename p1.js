function calculateVAT(price)
{
  if (typeof price !== "number" || price <= 0)
  {
    return "Invalid";
  }
  let vat = (price * 0.075);

return vat;
}

function  validContact( contact ) {
  if (typeof contact !== "string")
  {
    return "Invalid";
  }
  else{
    if (contact.length === 11 && contact.startsWith("01") && !contact.includes(" ") )
    {return true;}
    
    else{
      return false;
    }
  }
}

function  willSuccess( marks ) {
 if(!Array.isArray(marks))
 {return "Invalid"}
 else
 {
  let passMark = 0;
  let failMark = 0;
  for(let mark of marks)
  {
    if(mark >= 50)
    {passMark++}
    else{
      failMark++;
    }
  }
  if(passMark > failMark)
  {return true;}
  else{return false;}
 }
}

function  validProposal( person1 , person2 ) {
 if(typeof person1 !== "object" || typeof person2 !== "object"){
  return "Invalid";
 }
 else{
  const ageDiff = Math.abs(person1.age - person2.age);
  if(person1.gender !== person2.gender && ageDiff <= 7)
  {
    return true;
  }
  else{return false;}
 }
}


function  calculateSleepTime( times ) {
  let totalS = 0;
  for (let somoy of times )
  {
    if (typeof somoy !== "number")
    {return "Invalid";}
    totalS += somoy;
  }
  const hours = Math.floor(totalS / 3600);
  const minutes = Math.floor((totalS % 3600) / 60);
  const seconds = totalS % 60;
  
  return { hour: hours, minute: minutes, second: seconds };
}



