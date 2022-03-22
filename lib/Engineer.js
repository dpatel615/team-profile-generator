// importing Employee constructor
const Employee = require("./Employee");

// Engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employe constructor
        super (name, id, email);

        this.github = github;
    }

 // returning github from input 
  getGitHub () {
      return this.github;
  }

  // override employee role to engineer
  getRole () {
      return "Engineer";
  }

}

// to be exported
module.exports = Engineer;