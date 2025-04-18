import Button from "./components/ui/Button"


const App = () => {
  return (
    <div>
      <Button text="Share Brain" variant="primary" size="md" onClick={()=>console.log("Primary")} startIcon="+"/>
      <Button text="Add Content" variant="secondary" size="md" onClick={()=>console.log("Primary")} startIcon="*"/>
    </div>
  )
}

export default App