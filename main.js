//Contributors: Chad Dabney, Erick Walker, Chase Patrick
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];


function createHeadingElements(string) {
    const kataHeading = document.createElement('h3')
    kataHeading.append(string)
    parentElement.append(kataHeading)

}
const parentElement = document.querySelector('.katas-list')

//Kata 1
/// Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)

createHeadingElements('Kata 1')

const kata1List = document.createElement('ul')

for (let counter = 1; counter <= 20; counter++) {
    let liElement = document.createElement('li')
    parentElement.append(kata1List)
    kata1List.append(liElement)
    liElement.append(counter)
}



//Kata 2
//Log the even numbers from 1 to 20. (2, 4, 6,...18,20)

createHeadingElements('Kata 2')

const kata2List = document.createElement('ul')
for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata2List)
    kata2List.append(liElement)
    liElement.append(counter2)
}
//Kata 3
//Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
createHeadingElements('Kata 3')
const kata3List = document.createElement('ul')
for (let counter3 = 1; counter3 <= 20; counter3 += 2) {

    let liElement = document.createElement('li')
    parentElement.append(kata3List)
    kata3List.append(liElement)
    liElement.append(counter3)
}


//Kata 4
//Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
createHeadingElements('Kata 4')
const kata4List = document.createElement('ul')
for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    let liElement = document.createElement('li')
    parentElement.append(kata4List)
    kata4List.append(liElement)
    liElement.append(counter4)

}
//Kata 5
//Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
createHeadingElements('Kata 5')
const kata5List = document.createElement('ul')
for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
    if (counter5IsPerfectSquare) {
        let liElement = document.createElement('li')
        parentElement.append(kata5List)
        kata5List.append(liElement)
        liElement.append(counter5)
    }

}
//Kata 6
//Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
createHeadingElements('Kata 6')
const kata6List = document.createElement('ul')
for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    let liElement = document.createElement('li')
    parentElement.append(kata6List)
    kata6List.append(liElement)
    liElement.append(counter6)

}
//Kata 7
//Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
createHeadingElements('Kata 7')
const kata7List = document.createElement('ul')
for (let counter7 = 20; counter7 >= 1; counter7 -= 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata7List)
    kata7List.append(liElement)
    liElement.append(counter7)

}
//Kata 8
//Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
createHeadingElements('Kata 8')
const kata8List = document.createElement('ul')
for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
    let liElement = document.createElement('li')
    parentElement.append(kata8List)
    kata8List.append(liElement)
    liElement.append(counter8)

}
//Kata 9
//Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
createHeadingElements('Kata 9')
const kata9List = document.createElement('ul')
for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    let liElement = document.createElement('li')
    parentElement.append(kata9List)
    kata9List.append(liElement)
    liElement.append(counter9)

}
//Kata 10
//Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
createHeadingElements('Kata 10')
const kata10List = document.createElement('ul')
for (let counter10 = 100; counter10 >= 1; counter10 -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter10))
    if (counter10IsPerfectSquare) {
        let liElement = document.createElement('li')
        parentElement.append(kata10List)
        kata10List.append(liElement)
        liElement.append(counter10)
    }
}
//Kata 11
//Kata 12
//Kata 13
//Kata 14
//Kata 15
//Kata 16
//Kata 17
//Kata 18
//Display the largest element in sampleArray.
createHeadingElements('Kata 18')
const kata18List = document.createElement('ul')
let max = sampleArray.reduce(function (a, b) {
    return Math.max(a, b);

});
let liElement = document.createElement('li')
parentElement.append(kata18List)
kata18List.append(liElement)
liElement.append(max)