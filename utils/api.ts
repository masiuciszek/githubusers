/* eslint-disable no-param-reassign */
export const getUser = (username: string) => {
  username = username.toLowerCase().trim();
  const url = `https://api.github.com/users/${username}`;
  return fetch(url).then(res => res.json());
};
export const getRepos = (username: string) => {
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url).then(res => res.json());
};

export const getFromApi = (baseUrl: string) => (endPoint: string) => (
  fn: Function
) =>
  fetch(`${baseUrl}${endPoint}`)
    .then(res => res.json())
    .then(data => fn(data))
    .catch(err => {
      console.log(err);
    });
