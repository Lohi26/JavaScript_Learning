const movements=[200,450,-400,3000,-650,-130,70,1300];


//forEach is a higher order function which requires a call back function
//passes the current array as the arguments

movements.forEach(function(movements,i){
    if(movements>0)
    {
        console.log(`You deposited : Rs ${movements} ${i}`);
    }
    else
    {
        console.log(`You Withdrawed : Rs ${Math.abs(movements)} ${i}`);
    }
});

//executes based on the function like

// function(400);
//function(450);
//etc


//forof
for(const [i,move] of movements.entries())
{
    console.log(move+" "+i);
}