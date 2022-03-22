// importing employee constructor 
const Employee = require('./Employee');


// manager constructor extends employee construtor
class Manager extends Employee {
    constructor (name, id, email, officeNumber){

        // calling emloyee constructor 
        super (name, id, email);

        this.officeNumber = officeNumber;
    }


    // override employee role to manager
    getRole () {
        return "Manager";
    }
}

// to be exported
module.exports = Manager;