import Header from "./components/Header";
import ListFriends from "./components/ListFriends";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="main">
        <Header />
        <main>
            <ListFriends />
        </main>
        <Footer />
    </div>
  )
}
export default App

// add toastify