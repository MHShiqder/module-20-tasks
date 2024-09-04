let str='I Am hasibul hAsan .';
let cnt=0;
let smallStr=str.toLowerCase();
for(let i=0;i<smallStr.length;i++)
{
    if(smallStr[i]=='a')
    {
        cnt++;
    }
}
console.log(cnt);