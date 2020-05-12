const key = '0f3cfa59da5e9c54b4eebea803330d71';
const language = 'language=en-US';

const download = async (url) => {
  const promise = await fetch(url);
  const result = await promise.json();
  return result;
};

const convertProps = (props) => {
  const result = ''.concat(Object.keys(props).map((name) => `${name}=${props[name]}`));
  return result;
};

const makeRequest = async (type, category, ...rest) => {
  const searchParam = [`api_key=${key}`, language, convertProps(rest)].join('&');
  const url = `https://api.themoviedb.org/3/${type}/${category}?${searchParam}`;
  const result = await download(url);
  return result;
};

export default makeRequest;
