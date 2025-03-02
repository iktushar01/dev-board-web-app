const parent = document.querySelector('.parent_of_all_cards');
let btnClickCount = 0;
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');


parent.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("btn_for_click")) {
        alert("Board Updated Successfully");
        event.target.disabled = true;
        btnClickCount = btnClickCount + 1;
        count1.innerText = parseInt(count1.innerText) + 1;
        count2.innerText = parseInt(count2.innerText) - 1;

        if (btnClickCount === 6) {
            alert("Congratulations, you have completed all the current tasks");
        }
    }
});

document.getElementById('btn_for_click1').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('ShopEase').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl', 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });

document.getElementById('btn_for_click2').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('CloudSync').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl' , 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });
document.getElementById('btn_for_click3').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('SwiftPay').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl' , 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });
document.getElementById('btn_for_click4').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('Meta').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl' , 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });
document.getElementById('btn_for_click5').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('Google').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl' , 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });
document.getElementById('btn_for_click6').addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    const newP = document.createElement('p');
    const taskName = document.getElementById('Glassdoar').innerText;

    newP.textContent = `You have Complete The Task ${taskName} at ${currentTime}`;
    newP.classList.add('bg-blue-100', 'p-3', 'rounded-xl' , 'm-3');
    document.getElementById('history_test').appendChild(newP);
  });


  document.getElementById('clear_history_btn').addEventListener('click', function() {
    document.getElementById('history_test').innerHTML = '';
  });