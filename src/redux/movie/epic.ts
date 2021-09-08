import { $axios } from '../../config/api';
import { types, homeAction } from './action';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

export const getALLMovies = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_MOVIE),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/3/movie/${act?.payload?.value || "popular"}?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US&page=1`
        )
        .then((rs: any) => {
          const data = rs.data.results;
          const refesh = act?.payload?.page == 1;
          return homeAction.getALLMoviesSuccess({ data, refesh });
        }).catch((error: any) => {
          return homeAction.getALLMoviesFail(error);
        });
    }),

  );
}
export const getAllNewMovies = ($acton: any) => {
  return $acton.pipe(
    ofType(types.GET_ALL_NEW_MOVIE),
    mergeMap((act: any) => {
      return $axios.api
        .get(
          `/3/movie/${act.payload}?api_key=c55cb28a013ddccfc78f28d3e9f29101&language=en-US`
        )
        .then((rs: any) => {
          const {data} = rs;
          return homeAction.getAllNewMoviesSuccess(data);
        })
        .catch((err: any) => {
          return homeAction.getAllNewMoviesFail(err);
        });
    }),
  );
};