import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../../features/editor/editorSlice"

export default function Editor() {
    const text = useSelector(state => state.editor.text)
    const dispatch = useDispatch()

    const updatePreview = (e) => {
        dispatch(changeText(e.target.value))
    }
    return (
        <div className="row justify-content-center">
            <div className="col-4 mt-4">
                <div className="navbar bg-body-tertiary">
                    <div className="container-fluid ">
                        <h3 className="navbar-brand fw-bold fs-6">Editor</h3>
                    </div>
                </div>
                <div className="form-floating bg-body-tertiary">
                    <textarea className="form-control" style={{ height: '200px' }} id="editor" value={text} onChange={updatePreview} />
                    <label htmlFor="editor">Markdown content</label>
                </div>
            </div>
        </div>
    )
}
