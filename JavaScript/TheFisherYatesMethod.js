//Used to resuffle or randomly sorting an array
const points = [40,100,10,5,1,25,6,7,9,44,52,20,10];
for (let i=points.length-1; i>0; i--)
{
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}

console.log(points);