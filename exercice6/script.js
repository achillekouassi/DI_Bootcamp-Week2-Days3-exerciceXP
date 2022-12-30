const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'rainder',

}

let sentence = ""
for(const key in details){
    sentence = sentence + " " + key + " " + details[key]
}

console.log(sentence)
    
