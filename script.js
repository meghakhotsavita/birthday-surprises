
function openGift(){

const lid=document.querySelector('.lid')
const cat=document.querySelector('.cat')

lid.style.transform="translateY(-60px) rotate(-10deg)"
cat.style.opacity=1

startConfetti()

setTimeout(()=>{
window.location.href="memories.html"
},2000)

}

/* confetti */

function startConfetti(){

const canvas=document.getElementById("confetti")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let pieces=[]

for(let i=0;i<150;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+4,
d:Math.random()*10
})
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="rgba(255,255,255,0.8)"

for(let i=0;i<pieces.length;i++){
let p=pieces[i]
ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()
}

update()

requestAnimationFrame(draw)
}

function update(){

for(let i=0;i<pieces.length;i++){
let p=pieces[i]
p.y+=Math.cos(p.d)+1

if(p.y>canvas.height){
p.y=0
}
}

}

draw()

}
