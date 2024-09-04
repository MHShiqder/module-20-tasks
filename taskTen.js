let str='capitalize every first letter of each word in a string';
let strArr= str.split("");
strArr[0]=strArr[0].toUpperCase();
for(let i=0;i<strArr.length;i++)
{
    if(strArr[i]==' ')
    {
        strArr[i+1]=strArr[i+1].toUpperCase();
    }
}
console.log(strArr.join(""));