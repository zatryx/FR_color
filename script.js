import {ColorManager} from './colors.js';
const btn = document.getElementById('btn');
const inputElement = document.getElementById('user-input');

btn.addEventListener('click', () => {
    // 1. Принимаем значение из HTML-инпута
    //const color_name = inputElement.value; 
    
    // 2. Передаем его в вашу библиотеку (приводим к числу через Number)
    const color_index = ColorManager.get_color_index(inputElement.value);
    title.textContent = color_index
});