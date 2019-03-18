import * as request from 'request';

class GithubApiService {
  getUserInfo(userName: string) {
    request.get("https://api.github.com/users/" + userName, (error: any, response: any, body: any) => {
      console.log(body);
    })
  }
}