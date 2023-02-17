
let books = ["у кота 2 сапога ","Мальчик в полосатой пижаме ","у бабули две кострюли ","тёмные начала ","автостопом по галактике ","унесенные ветром ","назови меня своим именем ","узорный покров " ,"уличный кот по имени Боб ","убийство Роджера Экройда ","после "]
let arrTrue=[]
let arrFalse=[]
let superFilter=(books)=> {
    for (i of books) {
        if (i[0] === "у") {
            arrTrue.push(i)
        } else {
            arrFalse.push(i)
        }
    }
}
superFilter(books)
console.log("true arr : " +arrTrue)
console.log("false arr : " +arrFalse)


let str=prompt("Введи словечко, золоце")
function superReverse(str){
    var a=''
    for (i=0 ; i<str.length ; i++){
        a+=str[(str.length-1)-i]
    }
    return a
}

console.log(superReverse(str))

