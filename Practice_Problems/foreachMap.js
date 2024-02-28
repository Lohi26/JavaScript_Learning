const map=new Map([
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10]
]);
map.forEach(function(value,key,maps){
    console.log(`key: ${key}  value: ${value}`);
    console.log(maps);
});