let str='I Am aehasibuol hAsan .';
let cnt=0;
let smallStr=str.toLowerCase();
let check='aeiou'
for(let i=0;i<5;i++)
{
    if(smallStr.includes(check[i]))
    {
        cnt++;
    }
}
if(cnt==5)
console.log('this string contains all the vowels');
else 
console.log('this string does not contain all the vowels');