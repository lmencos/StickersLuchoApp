import { useEffect, useState } from 'react';
import { getStickers } from '../helpers/getStickers';

export const useFectchStickers = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {

    getStickers( category )
      .then( imgs => {

        setTimeout( () => {
          console.log(imgs)
          setState({
            data: imgs,
            loading: false
          });
        }, 1800)
      });


  }, [ category ])

  return state; // { data: [], loading: true }

}
