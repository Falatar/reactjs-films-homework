const key = '0f3cfa59da5e9c54b4eebea803330d71';
const language = 'language=en-US';

const download = async (url) => {
  const promise = await fetch(url);
  const result = await promise.json();
  return result;
};

const convertProps = (props) => {
  const result = ''.concat(Object.entries(props[0]).map((item) => `${item[0]}=${item[1]}`).join('&'));
  return result;
};

const makeRequest = async (type, category, ...rest) => {
  let searchParam = [`api_key=${key}`, language].join('&');
  if (rest.length !== 0) searchParam += `&${convertProps(rest)}`;
  const url = `https://api.themoviedb.org/3/${type}/${category}?${searchParam}`;
  const result = await download(url);
  return result;
};

export default makeRequest;
