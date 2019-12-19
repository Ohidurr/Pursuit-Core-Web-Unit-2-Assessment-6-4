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

    const populateSelect = async() => {
        let res  = await axios.get("https://ghibliapi.herokuapp.com/films/")
        let info = res.data
        // console.log(res.data[0].title);
        
        for(let i = 0; i < info.length; i++){
    
        let option = document.createElement("option")
        option.innerText = info[i].title
        option.value = i
        select.appendChild(option)
            
        }
    }
    
    populateSelect()
    const postMovie = async() => {
        let res  = await axios.get("https://ghibliapi.herokuapp.com/films/")
        let info = res.data
        // info.forEach(el => {
        //     el.release_date;
        //     console.log(el.release_date);
            
        // })
        let h3 = document.createElement("h3")
        let p  = document.createElement("p")
        select.addEventListener("change",(e)=> {
            select.value = e.target.value
            
            console.log(info[select.value].release_date); 
            console.log(info[select.value].description); 

            document.body.appendChild(h3)

         })
        // select.value  = info[i].release_date;
        // info[i].release_date.appendChild(h3)
               
    }
    postMovie()
})
