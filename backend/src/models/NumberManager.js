const AbstractManager = require("./AbstractManager");

class NumberManager extends AbstractManager {
  constructor() {
    super({ table: "number" });
  }

  insert(number) {
    return this.connection.query(
      `insert into ${this.table} (myNumber) values (?)`,
      [number.myNumber]
    );
  }
}

module.exports = NumberManager;
