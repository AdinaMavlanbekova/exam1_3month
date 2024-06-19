
const regExp = /^\d$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}
console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false


function getSeconds() {
    setInterval(() => {
        console.log('Прошла секунда');
    }, 1000);
}
getSeconds()


const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i)
       i++
        if (i>10){
            clearInterval(interval)
        }
    },1000);
}
count()



const colorBlock = document.querySelector('.block150')

colorBlock.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'div') {
        if (event.target.classList.contains('red')) {
            event.target.classList.remove('red')
        } else {
            event.target.classList.add('red')
        }
    }
}


const button = document.querySelector('button')
button.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','example.json')
    request.setRequestHeader('Content-type','application/json')
    request.send()

    request.onload = () => {
        console.log(request.response)
    }
}