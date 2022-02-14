const uri = 'https://www.healthcare.gov/api/articles.json';

export const getArticles = async (onSuccess, onError) => {
  return fetch(uri)
    .then(response => response.json())
    .then(json => {
      onSuccess(json);
    })
    .catch(error => {
      onError(error);
    });
};
