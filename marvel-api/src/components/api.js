import md5 from 'md5';

const publicKey = 'c127b162c95928ba720756004c70e218';
const privateKey = '65565dd1bef88f2390f5fef64c56ebb2682e65f8';

export const getCharactersByLetter = async (letter) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${letter}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  const data = await response.json();
  return data.data.results;
};

export const getCharacterById = async (id) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${publicKey}`);

  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  const data = await response.json();
  return data.data.results[0];
};

export const getPublicComics = async () => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${publicKey}`);

  const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
  const data = await response.json();
  return data.data.results;
};
