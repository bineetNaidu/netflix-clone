import React, { useState, useEffect } from "react";
// import MainSidebar from "./MainSidebar";
import { getApiData, requests } from "./helpers";
import MoviesLists from "./MoviesLists";
import Banner from "./Banner";

function Main() {
  const {
    Trending,
    NetflixOriginals,
    TopRated,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = requests;

  // states
  const [trend, setTrend] = useState([]);
  const [netOrgins, setNetOrgins] = useState([]);
  const [toprates, setToprates] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);
  const [documentary, setDocumentary] = useState([]);

  useEffect(() => {
    const datas = async () => {
      // trending API
      const trends = await getApiData(`http://api.themoviedb.org/3${Trending}`);
      setTrend(trends);

      // top rated API
      const topsrates = await getApiData(
        `http://api.themoviedb.org/3${TopRated}`
      );
      setToprates(topsrates);

      // NetFlix Orginals API
      const netflixOrigins = await getApiData(
        `http://api.themoviedb.org/3${NetflixOriginals}`
      );
      setNetOrgins(netflixOrigins);

      // Actions API
      const actions = await getApiData(
        `http://api.themoviedb.org/3${ActionMovies}`
      );
      setAction(actions);

      // comedy API
      const comedies = await getApiData(
        `http://api.themoviedb.org/3${ComedyMovies}`
      );
      setComedy(comedies);

      // horros API
      const horrors = await getApiData(
        `http://api.themoviedb.org/3${HorrorMovies}`
      );
      setHorror(horrors);

      // romance API
      const romances = await getApiData(
        `http://api.themoviedb.org/3${RomanceMovies}`
      );
      setRomance(romances);

      // Documenttary API
      const docs = await getApiData(
        `http://api.themoviedb.org/3${Documentaries}`
      );
      setDocumentary(docs);
    };
    datas();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#111" }}>
        <Banner link={Trending} />
        <MoviesLists movies={netOrgins} label="NETFLIX ORIGINALS" highlights />
        <MoviesLists movies={trend} label="Trending Now" highlights={false} />
        <MoviesLists movies={toprates} label="Top Rated" highlights={false} />
        <MoviesLists movies={action} label="Action Movies" highlights={false} />
        <MoviesLists movies={comedy} label="Comedy Movies" highlights={false} />
        <MoviesLists movies={horror} label="Horror Movies" highlights={false} />
        <MoviesLists
          movies={romance}
          label="Romance Movies"
          highlights={false}
        />
        <MoviesLists
          movies={documentary}
          label="Documentaries"
          highlights={false}
        />
      </div>
    </>
  );
}

export default Main;
