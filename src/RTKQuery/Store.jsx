   import { configureStore } from '@reduxjs/toolkit';
   import { setupListeners } from '@reduxjs/toolkit/query'
import { Fox } from './Fox';
 

   export const store = configureStore({
     reducer: {
       [Fox.reducerPath]: Fox.reducer,
     },
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(Fox.middleware),
   });

   setupListeners(store.dispatch)
   
