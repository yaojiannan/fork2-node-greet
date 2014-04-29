function greet (name, drunk) {
  if (name == undefined) {
  	return "hello, world"
  }

  if (drunk) {
    return "hello " + name + ", you look sexy today!";
  } else {
    return "hello, " + name;
  }
}


module.exports = greet;