document.addEventListener("DOMContentLoaded",() =>{
    let img = document.querySelector("#logo")
    let select = document.querySelector("select")
    let movie = document.querySelector("#movie_Info")
    let form = document.querySelector("form")

const getMovie = async() => {
    try{
        
        let res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        let info = res.data.title
        console.log(info);
        
        
        
    }catch(error){
        console.log(error);
        debugger
        }
    select.addEventListener("change",(e)=> {
        getMovie()
            select.value = e.target.value
            select.appendChild(form)
        })
getMovie()
debugger
}
})
