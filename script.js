const endDate= ". . . . 30 september 2024 04:00 PM . . . ."

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock=()=>{}

function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const gap = (end-now) / 1000;
    if (gap < 0) return;

    // here 3600 sec in 1 min  60 min in 1 hour and 24 hour in a day.........
    inputs[0].value = Math.floor(gap / 3600 / 24)
    inputs[1].value = Math.floor((gap / 3600) % 24)
    inputs[2].value = Math.floor((gap / 60) % 60)
    inputs[3].value = Math.floor(gap % 60)
}
clock()
setInterval(
    () => {
        clock()
    },1000
);




