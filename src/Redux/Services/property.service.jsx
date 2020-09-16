import { authHeader } from '../Helpers';

export const propertyService = {
  create,
  getAll,
  delete: _delete,
};

let user = JSON.parse(localStorage.getItem('user'));

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(
    `https://treasure-homes.herokuapp.com/api/v1/properties?status=available`,
    requestOptions
  ).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`https://treasure-homes.herokuapp.com/api/v1/properties/${id}`, requestOptions).then(
    handleResponse
  );
}

function create(property) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(property),
  };

  return fetch(`https://treasure-homes.herokuapp.com/api/v1/properties`, requestOptions).then(
    handleResponse
  );
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return fetch(`https://treasure-homes.herokuapp.com/api/v1/properties/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = data.error;
      return Promise.reject(error);
    }

    return data.data;
  });
}
