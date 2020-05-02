import newsListInit from '../../state/theater/index.js'
import theaterType from '../../actionType/theater/index.js'
export default function(state=newsListInit,{type,payload}){
	state=JSON.parse(JSON.stringify(state))
	if(type===theaterType.THEATER_LIST){
		state.theater_list=payload
		// console.log(444,state.theater_list)
	}
	return state;
}
