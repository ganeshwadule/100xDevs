import Button from "./components/Button"
import ShareIcon from "./icons/ShareIcon"
import PlusIcon from "./icons/PlusIcon"
import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <Button text="Share Brain" variant="primary" size="sm" onClick={()=>console.log("Primary")} startIcon={<ShareIcon/>}  />
      <Button text="Add Content" variant="secondary" size="sm" onClick={()=>console.log("Primary")} startIcon={<PlusIcon/>}/>
      <div className="flex gap-3 items-stretch">
        <Card title="Shubh Song" link="" type="twitter"/>
        <Card title="X Post" link="" type="youtube"/>
      </div>
    </div>
  )
}

export default App