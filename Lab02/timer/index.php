<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Секундомір</title>
</head>
<body>
<h1>Секундомір</h1>
<div id="timer">0:00</div>
<button onclick="startTimer()">Старт</button>
<button onclick="stopTimer()">Стоп</button>
<button onclick="addValue(5)">+5</button>
<button onclick="addValue(10)">+10</button>
<button onclick="addValue(100)">+100</button>
<button onclick="addValue(1000)">+1000</button>
<button onclick="addValue(10000)">+10000</button>
<script>
let timerInterval;
let seconds = 0;
function addValue(value) {
    seconds += value
} 
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    document.getElementById('timer').innerText = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}
</script>
</body>
</html>
