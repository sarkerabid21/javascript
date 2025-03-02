function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
        weekday: 'short',  month: 'short',   
        day: 'numeric',  year: 'numeric'  
    });

    document.getElementById('date').innerText = date;
}

updateTime();
setInterval(updateTime,1000);
