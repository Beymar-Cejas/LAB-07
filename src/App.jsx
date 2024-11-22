import './App.css'
import { Button } from './components/Button'
import { WapperList } from './components/WrapperLis'
import { List } from './components/List'

function App() {

  const buttonText = "Count :"

  return (
    <>
      <h1>Hi</h1>
      <Button text={buttonText}/>
      <WapperList>
          <List/>
      </WapperList>
    </>
  )
}

export default App
