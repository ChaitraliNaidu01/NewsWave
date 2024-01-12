import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {

  const[articles,setArticles]=useState([])
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  // document.title=`${this.capitalizeFirstLetter(props.category)} - DailyNews`


  const capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const Newsupdate =async ()=>{
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e80eee5f9bd43a0aa9a2e7fb679f87b&page=1&pageSize=${props.pageSize}`
      setloading(true)
      const res = await fetch(url);
      props.setProgress(30)
      const data = await res.json();
      props.setProgress(50)
      setArticles(data.articles)
      setTotalResults(data.totalResults)
      setloading(false)
      props.setProgress(100);

    }
    catch (e) {
      console.log("something is not working");
    }
  }

  useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)} - DailyNews`
    Newsupdate();
    // eslint-disable-next-line 
  },[])

 
  
  const fetchMoreData  = async() => {
    // this.setState({page: this.state.page + 1})
    try {
      // setpage(page+1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e80eee5f9bd43a0aa9a2e7fb679f87b&page=${page+1}&pageSize=${props.pageSize}`
      setpage(page+1)
      const res = await fetch(url);
      const data = await res.json();
      setArticles(articles.concat(data.articles))
      setTotalResults(data.totalResults)
    }
    catch (e) {
      console.log("something is not working");
    }
  };


    return (
    
    <>
        <h2 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>Daily New Top-Headlines About {capitalizeFirstLetter(props.category)}</h2>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
          {articles.map((element) => {  
            return <div className='col-md-4' key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsUrls={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
  }



News.defaultProps = {
  country:'in',
  pageSize:9,
  category:'general'
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}


export default News
