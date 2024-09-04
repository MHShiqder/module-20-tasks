let str='If a given string has either x, replace x by y. if the given string has X, replace it by Y.';
let strArr= str.split("");
for(let i=0;i<strArr.length;i++)
{
    if(strArr[i]=='x')
    {
        strArr[i]='y';
    }
    if(strArr[i]=='X')
    {
        strArr[i]='Y';
    }
}
console.log(strArr.join(""));