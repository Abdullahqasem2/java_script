let example = "I'm the example!";    
console.log(example);                                 
var hello = 'world'; 
console.log(hello);  
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
console.log(food);

var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);
mean();
////////////////////////////////////////////

var genre = "disco";
console.log(genre);

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        let dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));