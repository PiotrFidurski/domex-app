import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { House, ListResults, Result } from "../types";

const HOUSES_API_URI = "http://mobile-reality-backend.sadek.usermd.net/";

export const houseApiSlice = createApi({
  reducerPath: "houseApi",
  // tagType helps us do optimistic updates later
  tagTypes: ["House"],
  baseQuery: fetchBaseQuery({
    baseUrl: HOUSES_API_URI,
  }),
  endpoints(builder) {
    return {
      fetchHouses: builder.query<ListResults<House[]>, void>({
        query() {
          return `/houses/all`;
        },
        providesTags: (result) =>
          result
            ? [
                ...result.results.map(({ _id }) => ({
                  type: "House" as const,
                  _id,
                })),
                { type: "House", id: "LIST" },
              ]
            : [{ type: "House", id: "LIST" }],
      }),
      fetchHouse: builder.query<Result<House>, string | void>({
        query(houseId: string) {
          return `/houses/${houseId}`;
        },
      }),
      createHouse: builder.mutation<House, Partial<House>>({
        query: (body) => ({
          url: `houses`,
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: "House", id: "LIST" }],
      }),
      deleteHouse: builder.mutation<
        { success: boolean; houseId: string },
        string
      >({
        query(houseId) {
          return {
            url: `houses/${houseId}`,
            method: "DELETE",
          };
        },
        // invalidating House query similiar to react-query
        invalidatesTags: (result, error, houseId) => [
          { type: "House", houseId },
        ],
      }),
    };
  },
});

export const {
  useFetchHousesQuery,
  useFetchHouseQuery,
  useCreateHouseMutation,
  useDeleteHouseMutation,
} = houseApiSlice;
