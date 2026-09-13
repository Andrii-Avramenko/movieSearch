import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const movieDbAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTE0OTkwZDQ4Njc1MGIzOGJiODMwNDgwZWJlN2RiZCIsIm5iZiI6MTc4OTMwMjg4MS4zNTgsInN1YiI6IjZhYTY5ODYxOTY1ZjVkZjY0N2E5N2YyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XocQLOkd_i9_WiY221LvFtGhNmdw6iPdFfo7cOTGQxk";

export const getTrending = (page) => {
  return axios
    .get(`${baseURL}/trending/all/week`, {
      params: { page },
      headers: {
        Authorization: `bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const searchMovie = (query, page) => {
  return axios
    .get(`${baseURL}/search/movie`, {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieDetails = (id) => {
  return axios
    .get(`${baseURL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieCredits = (id) => {
  return axios
    .get(`${baseURL}/movie/${id}/credits`, {
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

export const getMovieReviews = (id, page) => {
  return axios
    .get(`${baseURL}/movie/${id}/credits`, {
      params: { page },
      headers: {
        Authorization: `Bearer ${movieDbAPI}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
