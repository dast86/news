import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"
import { useAppSelector } from "./store"

function App() {

  const news = useAppSelector( state => state.news.news)

  console.log(news)

  return (
    <>
      <Header />
      <div className="conteiner">
        <Main/>
      </div>
    </>
  )
}

export default App
