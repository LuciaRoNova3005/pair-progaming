// login

const getMoviesFromApi = (params) => {
  console.log(params);

  // Añadimos en el fecth los query params a la url//
  const queryParams = `?gender=${params.gender}&sort=${params.sort}`;
  console.log(queryParams);
  console.log("Se están pidiendo las películas de la app");

  return fetch("//localhost:4000/users/" + queryParams, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
