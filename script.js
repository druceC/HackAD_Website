let yearSemesterList = ['Spring 2024','Fall 2023','Spring 2023','Fall 2022','Spring 2022','Fall 2021','Spring 2021','Fall 2020','Spring 2020', 'Fall 2019', 'Spring 2019','Fall 2018', 'Spring 2018'];
let count = 0;
let countLeftBtn = 0;
let i = 0;
let txt = 'Past Events'; /* The text */
let contact_txt = 'Be Connected!';
let speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt, elementId) {
    let j = 0;
    let interval = setInterval(() => {
        if (j < txt.length) {
            document.getElementById(elementId).innerHTML += txt.charAt(j);
            j++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

function highlightMenuItem(event) {
    // Remove highlight class from previously clicked menu item
    // / Remove font color from the previously selected menu item
    var previousSelectedItem = document.querySelector('.selected');
    if (previousSelectedItem) {
        previousSelectedItem.classList.remove('selected');
    }

    // Change font color of the newly selected menu item to white
    var selectedItem = event.target;
    selectedItem.classList.add('selected');
}

window.addEventListener('load', () => {
    let rightBtn = document.getElementById('right-arrow-btn');
    let leftBtn = document.getElementById('left-arrow-btn');
    let yearTxt = document.getElementById('year-semester-heading');
    let child = document.getElementById('events-fall2021');
    let parent = child.parentNode;
    let children = parent.children;

    rightBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count++;
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    leftBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count--;
        if (count<0){
            countLeftBtn = yearSemesterList.length;
            count = countLeftBtn-1;
        }
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    // typeWriter();
    typeWriter(txt, "past-event-heading");
    typeWriter(contact_txt, "contact-heading");
})

