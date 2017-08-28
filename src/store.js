const Data = 'data'

export default {
	fetch(){
		return JSON.parse(window.localStorage.getItem(Data)||'[]')
	},
	save(items){
		window.localStorage.setItem(Data,JSON.stringify(items))
	},
}