import {mainQuotes} from "../data/quotes.js"
console.log(mainQuotes)
/*-------------------------------- Constants --------------------------------*/
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const page = document.querySelector("#container")
console.log(page.childNodes)


/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/


let rules = (e)=>{
  
  let p = document.createElement("p");
  p.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit mollitia voluptates inventore veniam odio exercitationem quas. Id recusandae officia commodi? Facere in ipsam magni perferendis repellat eaque consectetur porro quo, cupiditate, fuga quasi atque sequi architecto odio laborum ab."
  page.append(p);
  
  console.log(div.childNodes);
}

