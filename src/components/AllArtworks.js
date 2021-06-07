import React, {useState, useEffect} from 'react'


const AllArtworks = () => {

 const [allArtworks, setAllArtworks] = useState([])



 useEffect(() => {
 getAllArtworks()
 })


 const getAllArtworks = () => {

    fetch("https://api.artic.edu/api/v1/artworks")
   .then(response => {
     return response.json()
   })
   .then((data) => {
       console.log('YO', data)
       const arts = data.data.map((a) => {
    return <li key={a.id}>{a.title}</li>
})
setAllArtworks(arts)
   })
   .catch(err => {
       console.error(err);
   })
    }


    return (
        <div>
            <ul>{allArtworks}</ul>
        </div>
    )
}


export default AllArtworks

