
// background
document.body.style.backgroundColor = "lightgrey";
// div
var div = document.createElement("div");
document.body.append(div);

// h1
var h1 = document.createElement("h1");
h1.innerText = "Nationalize.io";


//styling
h1.style.fontFamily="bold";
h1.style.color = "red";
h1.style.textAlign = "center";
div.append(h1);



// creating input div
var input_div =document.createElement("div")
div.append(input_div);

input_div.style.textAlign="center";

var input=document.createElement("input")
input.setAttribute("id","myInput")
input.setAttribute("placeholder","Type name")
input.setAttribute("class", "input form-control-lg mt-5 mb-5")
input_div.append(input)

input.style.border = "1px solid white";
input.style.borderRadius = "10px 10px 10px 10px";

//creating a button

var search = document.createElement("button");
search.innerText = "Search";
search.setAttribute("onclick", "Click()");
search.setAttribute("class", "btn btn-primary");
search.setAttribute("type", "button");
input_div.append(search);

//styling  button

search.style.marginLeft = "20px";

//creating a div to display the data

var div2 = document.createElement("div");
div2.setAttribute("class", "conatiner-lg");
div2.setAttribute("id", "d2");
div2.style.margin = "-4px";
div2.style.textAlign = "center";
div2.style.fontFamily = "'Comic Neue', cursive";
div2.style.fontSize = "20px";
document.body.append(div2);

//activates once the submit button clicked

function Click() {
  document.getElementById("d2").innerHTML = "";

  var value = document.getElementById("myInput").value;
  if (value == "" || null) {
    alert("Please Enter a Valid Data");
    return false;
  } else {
    getdata();
  }
}


async function getdata() {
    try {
      let value = document.getElementById("myInput").value;
  
      let data = await fetch("https://api.nationalize.io/?name=" + value);
      let res = await data.json();
  
      if (res.country == "" || null) {
        alert("Sorry your name does not exist in our database!"); 
          reload()
        return false;
      } else {
        let name = document.createElement("div");
        name.innerText = "Name : " + value;
        div2.append(name);
  
        let len = res.country.length;
  
        if (len >= 3) {
          len = res.country.length - 1;
          for (let i = 0; i < len; i++) {
            const element = res.country[i];
            country_name(element.probability, element.country_id);
          }
        } else {
          len = res.country.length;
          for (let i = 0; i < len; i++) {
            const element = res.country[i];
            country_name(element.probability, element.country_id);
          }
        }
      }document.getElementById("myInput").value =""
    } catch (error) {
      console.error();
    }
  }
async function country_name(cc,jj) {
   let data= await fetch("https://restcountries.eu/rest/v2/alpha/"+ jj)    // RestCountriesapi
   let res =await data.json()
   let name=res.name
   
  if (cc >= 1) {
    var nation1 = document.createElement("div");
    nation1.innerHTML =
      `Country Name : " ${name} " <br> Probability is : " ${cc}`;
    document.getElementById("d2").append(nation1);
  } else {
    var nation1 = document.createElement("div");
    nation1.innerHTML =
      `Country Name : " ${name} " <br> Probability is : " ${cc} "`;
    document.getElementById("d2").append(nation1);
  }
}























