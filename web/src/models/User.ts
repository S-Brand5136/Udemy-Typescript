import axios, { AxiosResponse } from "axios";

interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
