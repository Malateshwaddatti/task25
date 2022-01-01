
function foo(){
    var cc=document.getElementById("text").value;
    console.log(cc);

    async function getdata(){
       // let data=await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);
       let data=await fetch('https://api.abuseipdb.com/api/v2/check/:&{cc}')
        let datares=await data.json();
        console.log(datares);
        for (var i =0;i<datares.length;i++) {
           // console.log(datares[i].Confirmed+" "+datares[i].Active+" "+datares[i].Deaths+" "+datares[i].Date);
            //console.log(datares[i].name);
        }
             
        }
    
      
  getdata();


    
      
    }


