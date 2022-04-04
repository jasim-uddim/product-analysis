import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Details from "./Components/Details/Details";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import useReviews from "./Components/Hooks/useReviews";
import MyCharts from "./Components/MyCharts/MyCharts";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";
export const ReviewContext = createContext("bb");

function App() {
  const [reviews, setReviews] = useReviews();
  console.log(reviews);
  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<MyCharts></MyCharts>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<Details></Details>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </ReviewContext.Provider>
  );
}

export default App;
