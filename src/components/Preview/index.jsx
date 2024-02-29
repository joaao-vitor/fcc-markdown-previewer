import { useEffect, useState } from 'react'
import './preview.scss'
import { useSelector } from 'react-redux'
import { marked } from 'marked'
import parse from 'html-react-parser';

export default function Preview() {
    const [preview, setPreview] = useState('')
    const text = useSelector(state => state.editor.text)
    return (
        <div className='row justify-content-center mt-2'>
            <div className='col-8' >
                <div className="navbar bg-body-tertiary">
                    <div className="container-fluid ">
                        <h3 className="navbar-brand fw-bold fs-6">Preview</h3>
                    </div>
                </div>
                <div className='bg-body-tertiary preview container p-3' id='preview'>
                    {parse(marked.parse(text))}
                </div>
            </div>
        </div>
    )
}
