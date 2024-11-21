import Apt from "./comp/ApiCall"
import "./app.css"
function App() {
  return (
    <><div className="sun" ><p className="im">⛅</p>
      <p className="heading" >Weather forecast app</p></div>
      <Apt></Apt>
    </>
  )
}

export default App
