// Callback & Higher Order Functions (19–22)

function processData(callback){
    callback();
}

processData(function(){
    console.log("Processing Done");
});

function calculate(a,b,operation){
    return operation(a,b);
}

console.log(calculate(10,5,function(x,y){
    return x+y;
}));

function taskDone(){
    console.log("Task Completed");
}

taskDone();

function userInfo(callback){
    let name="Muthukumar";
    callback(name);
}

userInfo(function(user){
    console.log("User:",user);
});