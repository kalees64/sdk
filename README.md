# My SDK

## Installation

```bash
npm install @kalees64/vk-sdk
```

## Usage

```typescript
import { UserClient } from "@kalees64/vk-sdk";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  constructor() {
    initializeSdk({ apiUrl: "https://dummyjson.com" });
  }

  userClient = new UserClient();

  users: any[] = [];

  ngOnInit(): void {
    this.userClient
      .getUsers()
      .then((res: any) => {
        console.log(res);
        this.users = res.users;
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
}
```
