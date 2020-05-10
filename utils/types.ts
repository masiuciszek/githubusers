export interface UserProfile {
  avatar_url: string | undefined;
  bio: string;
  blog: string;
  company: string;
  created_at: Date;
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: any;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at: Date;
  url: string;
}
export interface UserInfo {
  avatar_url: string;
  name: string;
  login: string;
}

export type RootStackParamList = {
  MainApp: undefined;
  DashBoard: { user: UserProfile };
  Profile: { userData: UserProfile };
  Repos: { repos: Array<any>; userData: UserProfile } | undefined;
  RepoViewWeb: { url: string } | undefined;
  Notes: undefined;
};
