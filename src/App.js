import React, { useEffect, useState } from "react";
import './App.css';
import TopNav from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Top from './components/Category/Top';
import Biz from './components/Category/Biz';
import Campus from './components/Category/Campus';
import Corona from './components/Category/Corona';
import English from './components/Category/English';
import Games from './components/Category/Games';
import Hobbies from './components/Category/Hobbies';
import Intermezzo from './components/Category/Intermezzo';
import KataGaul from './components/Category/KataGaul';
import Life from './components/Category/Life';
import Movie from './components/Category/Movie';
import Music from './components/Category/Music';
import News from './components/Category/News';
import Otomotif from './components/Category/Otomotif';
import Parenting from './components/Category/Parenting';
import Regional from './components/Category/Regional';
import SciTech from './components/Category/SciTech';
import Showbiz from './components/Category/Showbiz';
import Sport from './components/Category/Sports';
import Story from './components/Category/Story';
import Trending from './components/Category/Trending';
import Videos from './components/Category/Videos';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "./actions/news";
import { getBookmarkItems } from "./actions/bookmarks";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [loading, setLoading] = useState(true);
  const news = useSelector((state) => state.news);
  console.log(news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(getBookmarkItems());
  }, []);

  return (
    <BrowserRouter>
    {news?.length !== 0 ? (
      <div className="App mx-auto" style={{ maxWidth: "800px" }}>
      <TopNav />
      <Switch>
      <Route exact path="/" component={Top} />
      <Route path="/Biz" component={Biz} />
      <Route path="/Campus" component={Campus} />
      <Route path="/Corona" component={Corona} />
      <Route path="/English" component={English} />
      <Route path="/Games" component={Games} />
      <Route path="/Hobbies" component={Hobbies} />
      <Route path="/Intermezzo" component={Intermezzo} />
      <Route path="/KataGaul" component={KataGaul} />
      <Route path="/Life" component={Life} />
      <Route path="/Movie" component={Movie} />
      <Route path="/Music" component={Music} />
      <Route path="/News" component={News} />
      <Route path="/Otomotif" component={Otomotif} />
      <Route path="/Parenting" component={Parenting} />
      <Route path="/Regional" component={Regional} />
      <Route path="/SciTech" component={SciTech} />
      <Route path="/Showbiz" component={Showbiz} />
      <Route path="/Sports" component={Sport} />
      <Route path="/Story" component={Story} />
      <Route path="/Top" component={Top} />
      <Route path="/Trending" component={Trending} />
      <Route path="/Videos" component={Videos} />
      <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
      </div>
      ) : (
        <div className="App mx-auto" style={{ maxWidth: "800px" }}>
      null
          </div> )}
    </BrowserRouter>
  
  );
}

export default App;
