import axios from 'axios'
import theaterType from '../../actionType/theater/index.js'
function getTheater(payload){
	// console.log("getTheater",payload)
	return{
		type:theaterType.THEATER_LIST,
		payload
	}
}

export default{
	getTheaList(dispatch){
		return async(dispatch)=>{
			const {data}=await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2")
			// console.log(data.theatre_list)
			dispatch(getTheater(data.theatre_list))
			
		}
	}
}


