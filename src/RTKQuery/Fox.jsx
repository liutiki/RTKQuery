import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const Fox = createApi({
  reducerPath: 'FoxApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomfox.ca' }),
  endpoints: (build) => ({
    getRandomFoxPhoto: build.query({
      query: () => `fluf/`,
    }),
  }),
})


   
export const { useGetRandomFoxPhotoQuery } = Fox;