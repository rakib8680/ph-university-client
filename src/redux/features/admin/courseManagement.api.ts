import { TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/semester-registrations",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (payload) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAddRegisteredSemesterMutation } = courseManagementApi;
