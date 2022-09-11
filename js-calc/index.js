function biggerNumber() {
    let value1 = document.querySelector('.value1').value
    let value2 = document.querySelector('.value2').value
    let biggerValue;
    let result = document.querySelector('.result')
    result.innerHTML = 'Result: '
    if (value1 - value2 > 0) {
        biggerValue = value1
        console.log(biggerValue)
    } else if (value1 - value2 < 0) {
        biggerValue = value2
        console.log(biggerValue)
    } else if (value1 - value2 == 0) {
        biggerValue = 'Numbers are the same'
    } else {
        biggerValue = 'invalid value'
    }
    result.innerHTML += biggerValue
}

function rectangleArea() {
    let sideA = document.querySelector('.sideA').value
    let sideB = document.querySelector('.sideB').value
    let areaValue = document.querySelector('.areaValue')
    areaValue.innerHTML = 'Result: '
    let area = sideA * sideB
    areaValue.innerHTML += area
}

function circleArea () {
    let radius = document.querySelector('.radius').value
    let circleArea = document.querySelector('.circleArea')
    circleArea.innerHTML = 'Result: '
    let circleAreaResult = Math.PI * Math.sqrt(radius)
    circleArea.innerHTML += circleAreaResult
}

function cylinderArea() {
    let cylinderRadius = document.querySelector('.cylinderRadius').value
    let cylinderHeight = document.querySelector('.cylinderHeight').value
    let cylinderArea = document.querySelector('.cylinderArea')
    cylinderArea.innerHTML = 'Result: '
    let cylinderAreaResult = 2*Math.PI * cylinderRadius * cylinderHeight
    cylinderArea.innerHTML += cylinderAreaResult;
}
