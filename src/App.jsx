import Editor from "./components/Editor"
import Preview from "./components/Preview"

function App() {

  return (
    <div className="container-fluid bg-primary-subtle min-vh-100">
      <div className="container">
        <Editor />
        <Preview />
      </div>
    </div>
  )
}

export default App
