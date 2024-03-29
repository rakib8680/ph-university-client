import {
  TCourse,
  TQueryParam,
  TResponseRedux,
  TSemester,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
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
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["semesters"],
    }),
    addRegisteredSemester: builder.mutation({
      query: (payload) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["semesters"],
    }),
    updateRegisteredSemester: builder.mutation({
      query: (payload) => ({
        url: `semester-registrations/${payload.id}`,
        method: "PATCH",
        body: payload.updatedData,
      }),
      invalidatesTags: ["semesters"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/courses",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["courses"],
    }),
    addCourse: builder.mutation({
      query: (payload) => ({
        url: "/courses/create-course",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["courses"],
    }),
    assignFaculties: builder.mutation({
      query: (payload) => ({
        url: `/courses/${payload.courseId}/assign-faculties`,
        method: "PUT",
        body: payload.facultyIds,
      }),
    }),
    getCourseFaculties: builder.query({
      query: (id) => {
        return {
          url: `/courses/${id}/get-faculties`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createOfferedCourse: builder.mutation({
      query: (payload) => ({
        url: "/offered-courses/create-offered-course",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useAddRegisteredSemesterMutation,
  useGetAllRegisteredSemesterQuery,
  useUpdateRegisteredSemesterMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAssignFacultiesMutation,
  useGetCourseFacultiesQuery,
  useCreateOfferedCourseMutation
} = courseManagementApi;
