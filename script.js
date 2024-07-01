document.getElementById('btn').addEventListener('click',async ()=>{
	var txt=document.getElementById('text').value;
	var delay=document.getElementById('delay').value;
	await delayFunction(delay);
	document.getElementById('output').innerText = txt;
});

function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}