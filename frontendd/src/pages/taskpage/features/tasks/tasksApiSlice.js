import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../../../app/api/apiSlice";


const tasksAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = tasksAdapter.getInitialState()

export const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => '/tasks',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedTasks = responseData.map(task => {
                    task.id  = task._id
                    return task
                })
                return tasksAdapter.setAll(initialState, loadedTasks)
            },
            provideTags: (result, error, arg) => {
                if(result?.ids) {
                    return [
                        { type: 'Task', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'Note', id}))
                    ]
                } else return [{type: 'Note', id:"List"}]
            }
        }),
        addNewTask: builder.mutation({
            query: initialTask => ({
                url: '/tasks',
                method: 'POST',
                body: {
                    ...initialTask,
                }
            }),
            invalidatesTags: [
                { type: 'Task', id:"LIST"}
            ]
        }),
        updateTask: builder.mutation({
            query(data) {
                const {id, ...body} = data
                return {
                url: `/tasks/${id}/edit`,
                method: 'PATCH',
                body
            }
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Task', id: arg.id}
            ]
            }),
            deleteTask: builder.mutation({
                query: ({id}) => ({
                    url: '/tasks',
                    method: 'DELETE',
                    body: {id}
                }),
                invalidatesTags: (result, error, arg) => [
                    {type: 'Task', id: arg.id}
                ]
            }),
           
    }),
    
})


export const {
    useGetTasksQuery,
    useAddNewTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = tasksApiSlice

export const selectTasksResult = tasksApiSlice.endpoints.getTasks.select()

const selectTasksData = createSelector(
    selectTasksResult,
    tasksResult => tasksResult.data
)

export const {
    selectAll: selectAllTasks,
    selectById: selectTaskById,
    selectIds: selectTaskIds
} = tasksAdapter.getSelectors(state => selectTasksData(state) ?? initialState)