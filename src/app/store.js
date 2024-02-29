import { configureStore } from '@reduxjs/toolkit'
import editorSlice from '../features/editor/editorSlice'
export default configureStore({
  reducer: {
    editor: editorSlice
  },
})