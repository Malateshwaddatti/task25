function foo(){
    var cc=document.getElementById("text").value;
    console.log(cc);

    async function getdata(){
        let data=await fetch(`https://api.jikan.moe/v3/anime/1/episodes/${cc}`);
        let datares=await data.json();
        console.log(datares);
        

    }
    getdata();
}