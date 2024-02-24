const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);


//1.
const arrSet=[...new Set(gameEvents.values())];
console.log(arrSet);


//2.
gameEvents.delete(64);
console.log(gameEvents);


//3.
console.log(`An event happened, on every average, every ${90/gameEvents.size} minutes`);


//4.
for(const [key,value] of gameEvents)
{
    const sen=key<=45?"FIRST":"SECOND";
    console.log(`[${sen} HALF] ${key} : ${value}`);
}