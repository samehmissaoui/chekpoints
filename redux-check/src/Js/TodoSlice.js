import {createSlice} from '@reduxjs/toolkit'


const initialState = {
 TodoList :[
    {    id : Math.random(),
    title : 'todo item 1',
    description : 'description todo item1',
    isDone : false,
}, 
    {    id : Math.random(),
        title : 'todo item 2',
        description : 'description todo item2',
        isDone : true,
    },
        {
            id : Math.random(),
            title : 'todo item 3',
            description : 'description todo item3',
            isDone : false,
        },
 ],
}


export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {

        Addtask :(state,action) => {
            state.TodoList.push(action.payload);
            
        },

        Removetask :(state,action) => {
            state.TodoList = state.TodoList.filter((el) => el.id !==action.payload.id);
        },

        Donetask :(state,action) => {
            let i = state.TodoList.findIndex((el) => el.id === action.payload.id);
           
            state.TodoList[i] ={
                    ...state.TodoList[i], isDone: !state.TodoList[i].isDone,
                }
                
            },

            Updatetask :(state,action) => {

                let i = state.TodoList.findIndex((el) => el.id === action.payload.id);
                state.TodoList[i] = {
                    ...state.TodoList[i], 
                title: action.payload.edited.title,
                description: action.payload.edited.description,
                                    }

            },
        },


     })

export const {Addtask, Removetask ,Donetask ,Updatetask} = todoSlice.actions

export default todoSlice.reducer

