import { Middleware } from '@reduxjs/toolkit';

const tShirtMiddleware: Middleware = store => next => action => {
   const result = next(action);

   const storeState = store.getState();

   localStorage.setItem('creatorState', JSON.stringify(storeState));

   return result;
};

export default tShirtMiddleware;
