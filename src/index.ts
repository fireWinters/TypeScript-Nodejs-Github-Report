import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc: GithubApiService = new GithubApiService();
svc.getUserInfo("hfpp2012", (user: User) => {
  console.log(user);
});

svc.getRepos("hfpp2012", (repos: Repo[]) => {
  console.log(repos);
})