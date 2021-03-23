export default function callbackSample() {
  const url = 'https://api.github.com/users/coffmanjrp';

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('callbackSample 01', json);
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const profile = fetchProfile();
  console.log('callbackSample 02', profile);
}
