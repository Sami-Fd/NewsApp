import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardColumns } from 'react-bootstrap';
import axios from 'axios'
import FetchNews from './fetchNews'
import NavBar from './navBar'
function App() {
  const [news, setNews] = useState([])
  const [geoInfo, setGeoInfo] = useState('')
  const [search, setSearch] = useState('')
  const [sortby, setSortby] = useState('')
  const [language, setLanguage] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const getUrl = () => {
      if (search && sortby && language) {
        console.log(search, sortby, language)
        setUrl(`http://newsapi.org/v2/everything?
          q=${search}&from=2020-10-30&sortBy=${sortby}&
          language=${language}&apiKey=381d77fc8c54462d811bb6f41ef57603`)
      }
      else {
        (geoInfo && setUrl(`http://newsapi.org/v2/top-headlines?country=${geoInfo}&apiKey=381d77fc8c54462d811bb6f41ef57603`))
      }
    }
    const fetchNews = async () => {
      const { data } = await axios.get(url)
      setNews(data.articles)
      console.log(data)
    }
    const getGeoInfo = async () => {
      const url = 'https://ipapi.co/json/'
      const { data } = await axios.get(url)
      setGeoInfo(data.country)
      console.log(data.country)
    }
    getGeoInfo()
    getUrl()
    fetchNews()
  }, [search, url, sortby, language, geoInfo])


  return (
    <div className="App">
      <Container>
        <NavBar getSearch={(text) => setSearch(text)} getlanguage={(lang) => setLanguage(lang)} getsortby={(sort) => setSortby(sort)} />
        {/* {news && <FetchNews news={news} />} */}
        <CardColumns>
          {news && news.map(article => {
            return <FetchNews key={article.url} article={article} />
          })}
        </CardColumns>
      </Container>
    </div>
  );
}

export default App;
