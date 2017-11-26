import Users from "./Users";
import Tags from "./Tags";

class Context {
  constructor() {
    this.Users = new Users();
    this.Tags = new Tags();
  }
}

export default new Context();
