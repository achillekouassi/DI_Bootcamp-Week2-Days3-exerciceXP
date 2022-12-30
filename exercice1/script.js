const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
console.log(people)

people.splice(2, 1,"Jason")
console.log(people)

people.push("Achille")
console.log(people)

console.log(people.indexOf("Mary"))

const NexPeople = people.slice(0)
console.log(NexPeople)

console.log(people.indexOf("Foo")) // ça renvoie -1 parce que Foo n'est pas dans le tableau

const last = people[people.length -1]
console.log(last)


// PARTY II

for(const nom of people){
    console.log(nom)
    if(nom === "Jason") {break }
}
