import './App.css'
import { Button } from './components/Button'
import { WapperList } from './components/WrapperLis'
import { List } from './components/List'
import { RandomComponent } from './components/RandomComponent'

function App() {

  const buttonText = "Count :"

  return (
    <>
      <h1>Hi</h1>
      <Button text={buttonText}/>
      <WapperList>
          <List/>
      </WapperList>
      <RandomComponent/>
    </>
  )
}

export default App
