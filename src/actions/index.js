export const SearchMoviesSuccess = ({ Search }) => ({
  type: 'SEARCH_MOVIES_SUCCESS',
  payload: Search,
});

export const SearchMoviesRequest = () => ({
  type: 'SEARCH_MOVIES_REQUEST',
});

export const SearchMoviesFailure = ({ Error }) => ({
  type: 'SEARCH_MOVIES_FAILURE',
  error: Error,
});
