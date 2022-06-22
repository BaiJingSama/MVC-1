import './app3.css'
import $ from 'jquery'
console.log(3);

const $square = $('#app3 .square')

$square.on('click', () => {
    $square.toggleClass('active') //如果没有就加上 如果有就删掉
})
localStorage