import { createSlice } from '@reduxjs/toolkit'

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        text: `
# Header (H1 size)

## Sub Header (H2 size)

[Link Example](https://example.com)

\`Inline Code Example\`

\`\`\`
// Code Block Example
function exampleFunction() {
    return "Hello, World!";
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> Blockquote Example

![Image Example](https://example.com/image.jpg)

**Bolded Text Example**
    `
    },
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        },
    },
})

export const { changeText } = editorSlice.actions

export default editorSlice.reducer

