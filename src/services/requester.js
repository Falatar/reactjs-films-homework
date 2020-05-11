const download = async (url) => {
  const promise = await fetch(url);
  const result = await promise.json();
  return result;
};

const makeRequest = async (type, category, key, ...rest) => {
  let url = `https://api.themoviedb.org/3/${type}/${category}?api_key=${key}`;
  for (let i = 0; i < rest.length; i += 1) {
    url += `&${rest[i]}`;
  }
  const result = await download(url);
  return result;
};

export default makeRequest;
