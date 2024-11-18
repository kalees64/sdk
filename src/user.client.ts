import axios from "axios";
import { sdkConfig } from ".";

export class UserClient {
  async getUsers() {
    const res = await axios.get(`${sdkConfig?.apiUrl}/users`);
    console.log(res.data);
    return res.data;
  }
}
