document.addEventListener("DOMContentLoaded",() =>{
    let img = document.querySelector("#logo")
    let select = document.querySelector("select")
    let movie = document.querySelector("#movie_Info")
    let form = document.querySelector("form")

const getMovie = async() => {
    try{
        
        let res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
          let info = res.data
        console.log(info); 
        
    }catch(error){
        console.log(error);
        debugger
        }

    

}
getMovie()
select.addEventListener("change",(e)=> {
    select.value = e.target.value
    debugger
 })
    const populateSelect = async() => {
        let res  = await axios.get("https://ghibliapi.herokuapp.com/films/")
        let info = res.data
        console.log(res.data[0].title);
        
        for(let i = 0; i < info.length; i++){
    
        let option = document.createElement("option")
        option.innerText = info[i].title
        option.value = i
        select.appendChild(option)
            
        }
    }
    
    populateSelect()
    const postMovie = () => {
        
        
    }
})
