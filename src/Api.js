
import Config from "./Config";

class Api {

  getRooms() {
    return fetch('http://localhost:3001/api/room?city=paris')
      .then((res) => res.json());
  }
}
export default new Api();