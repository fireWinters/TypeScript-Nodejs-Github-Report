import * as request from 'request';
import { User } from './User';

const options = {
  headers: {
    'User-Agent': 'request'
  },
  json: true
};

export class GithubApiService {
  getUserInfo(userName: string) {
    request.get("https://api.github.com/users/" + userName, options, (error: any, response: any, body: any) => {
      console.log(typeof body);
      // let user = new User(JSON.parse(body));
      let user: User = new User(body);
      console.log(user);
    })
  }
}