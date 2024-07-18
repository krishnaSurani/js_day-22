function capitalizeWords(sentence) {
    let b="";
    for(let i=0; i<sentence.length; i++)
        {
            if(i==0 || sentence[i-1]==" ")
            {
              return  b+=sentence[i].toUpperCase()
            }
            else{
              return  b+=sentence[i]
            }
        }
}
let sentence="hello world";


console.log(capitalizeWords(sentence));
