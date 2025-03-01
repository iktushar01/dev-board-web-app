const parent = document.querySelector('.parent_of_all_cards');
let clickCount = 0;
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');

parent.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("btn_for_click")) {
        alert("Board Updated Successfully");
        event.target.disabled = true;
        clickCount++;
        count1.textContent = parseInt(count1.textContent) + 1;
        count2.textContent = parseInt(count2.textContent) - 1; 

        if (clickCount === 6) {
            alert("Congratulations, you have completed all the current tasks");
        }
    }
});