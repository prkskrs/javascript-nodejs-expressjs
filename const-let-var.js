// const
// Regular const decalartion
const n1 = 20;
console.log(n1)

// Will throw error
// const n2;
// console.log(n2)

if(n1<=20){
    const n3 = 9;
    console.log(`n3 : ${n3}`)
}

console.log(`n1 : ${n1}`)
// console.log(`n3 : ${n3}`)


const movie = {
    "title" : "Avengers"
}
// will throw error
// const movie = 10;

// But changing inside object is fine
movie.title="test"
movie.year=100 
movie.genre="Action"
console.log(movie)

const movies = []
movies.push(movie)
movies.push(20)
console.log(movies)

// will throw error
// for(const i=0 ; i<10 ; i++){
// console.log(i)
// }

// let
let n;
n=10
n=[]
n={}
n="StringHere"
console.log(n)
for(let i=0 ; i<10 ; i++){
console.log(i)
}


// var
var s = 200
if(s<=200)
{
    var t = 300;
    console.log(`t : ${t}`)
}
console.log(`s : ${s}`)
console.log(`t : ${t}`)
