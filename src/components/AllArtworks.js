import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'


const AllArtworks = () => {

 const [allArtworks, setAllArtworks] = useState([])
 const dispatch = useDispatch()
 const {addToFaves} = bindActionCreators(actionCreators, dispatch)



 const state = useSelector((state) => state)
 console.log(state)



 useEffect(() => {
 getAllArtworks()
 }, [])


 const getAllArtworks = () => {

        
    fetch("https://api.artic.edu/api/v1/artworks")
   .then(response => {
     return response.json()
   })
   .then((data) => {
       console.log('YO', data)
       const arts = data.data.map((a) => {
        //    return <li>{a.title}</li>
    return (
    <div key={a.id}>
    <button onClick={addToFaves}>add to faves</button>
    <li>{a.title} by {a.artist_title}</li>
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
            <ul>{allArtworks}</ul>
        </div>
    )
}


export default AllArtworks

