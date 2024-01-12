import React  from 'react'

const NewsItem =(props)=>{

    
        let { title, description, imgurl, newsUrls, author, date ,source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'85%',zindex:'1'}} >
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    <img src={!imgurl ? "https://images.indianexpress.com/2023/11/Webb-telescope-milky-way-20231122.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text text-info"><small>By {author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrls}  className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem


// import React, { Component } from 'react'

// export class NewsItem extends Component {

//     render() {
//         let { title, description, imgurl, newsUrls, author, date ,source} = this.props;
//         return (
//             <div className='my-3'>
//                 <div className="card">
//                     {/* <div style={{
//                         // display:'flex',
//                         // justifyContent:'flex-end',
//                         // position:'absolute',
//                         // right:0
//                         // style={{left:'90%',zindex:'1'}}
//                         left:'50%',
//                         zIndex:'1'
//                     }} */}
//                    {/* ></div> */}
//                     <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'85%',zindex:'1'}} >
//                             {source}
//                             <span className="visually-hidden">unread messages</span>
//                         </span>
//                     <img src={!imgurl ? "https://images.indianexpress.com/2023/11/Webb-telescope-milky-way-20231122.jpg" : imgurl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                             <h5 className="card-title">{title} </h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text text-info"><small>By {author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsUrls}  className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem
