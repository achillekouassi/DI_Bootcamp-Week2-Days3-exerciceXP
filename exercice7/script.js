const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym = ""
NomEntreprise = names.sort()
for (const name of NomEntreprise){
    console.log(name)
    acronym = acronym + name[0]
    console.log(acronym)
}