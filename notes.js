// var age=24;
// function greeting(){
//     console.log("notes file is running"+age);
// }

// greeting();
// module.exports=age;


// module.exports.age=24;
// greeting();


function makepastry(){
   
        setTimeout(()=>console.log("work done"), 4000);
    
}
function makecake() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve("work done"), 4000);
    })
}

async function run(){
    const result2 = await makepastry();
    console.log(result2);
    const result = await makecake();
    console.log(result);
 
}

run();
