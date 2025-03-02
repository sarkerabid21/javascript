let dec = 6;
let incre = 23;

function button(btn) {
    if (dec > 0) { 
        alert("Board updated successfully."); 
        dec--;
        document.getElementById("dec").innerText = dec;
        incre++;
        document.getElementById("incre").innerText = incre;

        if (dec === 0) {
            alert('Congrates! You Have completed all the current task.');
}
        btn.classList.add('bg-slate-600');
        btn.disabled = true;

        const tCard = btn.closest('.task-card');
        const title = tCard.querySelector('h1').textContent;
        const now = new Date();
        const time = now.toLocaleTimeString();

        const msg = `You have completed "${title}" at ${time}.`;
        const msgContainer = document.getElementById('message');
        const msgDiv = document.createElement('div');
        msgDiv.className = 'bg-slate-200 p-4 mt-5';
        msgDiv.textContent = msg;
        msgContainer.appendChild(msgDiv);
    }}
document.getElementById('clear').addEventListener('click', function() {
document.getElementById('message').innerHTML = '';
})