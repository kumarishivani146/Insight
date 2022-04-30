import { createSlice } from '@reduxjs/toolkit';



export const questionSlice = createSlice({
  name: 'question',
  initialState:{
    questionId: null,
    questionName: null,
  },
  reducers: {
    setQuestionInfo: (state, action)=>{
        state.questionId= action.payload.questionId
        state.questionName= action.payload.questionName
    }
  },
});

export const { setQuestionInfo } = questionSlice.actions;


export const selectQuesionId = (state) => state.question.questionId
export const selectQuesionName = (state) => state.question.questionName

export default questionSlice.reducer;
