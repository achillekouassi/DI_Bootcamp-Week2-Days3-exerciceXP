const color = ["blue", "rouge", "vert", "orang", "blanc"]
rang = ["er", "eme", "eme", "eme", "eme"]

for (let i=0; i< color.length; i++){
    console.log(`Mon choix n°${i+1} est ${color[i]}`)
}

for (let i=0; i< color.length; i++){
    console.log(`Mon ${i+1}${rang[i]} choix est ${color[i]}`)
}