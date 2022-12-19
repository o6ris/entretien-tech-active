const AbstractManager = require("./AbstractManager");

class NumberManager extends AbstractManager {
  constructor() {
    super({ table: "number" });
  }

  findAllInOrder() {
    return this.connection.query(
      `select * from  ${this.table} order by myNumber asc`
    );
  }

  insert(number) {
    return this.connection.query(
      `insert into ${this.table} (myNumber) values (?)`,
      [number.myNumber]
    );
  }
}

module.exports = NumberManager;
