import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'


const AllArtworks = () => {

 const [allArtworks, setAllArtworks] = useState([])
 const dispatch = useDispatch()
 const {addToFaves, removeFromFaves} = bindActionCreators(actionCreators, dispatch)



 const artworks = useSelector((state) => state.artworks)
//  console.log(artworks)



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
        //    return <li>{a.title}</li>
        const url = `https://www.artic.edu/iiif/2/${a.image_id}/full/843,/0/default.jpg`
    return (
    <div key={a.id}>
    <button onClick={() => addToFaves(a.id)}>add to faves</button>
    <button onClick={() => removeFromFaves(a.id)}>no thanks</button>
    <h2>{a.title} by {a.artist_title}</h2>
    
    <img src={url}/>
    </div>
    )
})
setAllArtworks(arts)
   })
   .catch(err => {
       console.error(err);
   })
    }


    return (
        <div>
            {artworks.artworks.map((a) => <h1>{a}</h1>)}
            <ul>{allArtworks}
            </ul>
        </div>
    )
}


export default AllArtworks

