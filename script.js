/* ========= DATA ========= */

const store = {
  name:"RAJAPEKOB NEON STORE",
  desc:"Jual Script Game Free & Premium ⚡"
};

const scripts = [
  {
    type:"free",
    title:"Auto Farm",
    desc:"Farm otomatis cepat",
    color:"#121826",
    glow:"#00ffff",
    badge:"FREE",
    btn1:"Download",
    link1:"#",
    btn2:"Copy ID",
    copy:"AUTO_FARM_01"
  },
  {
    type:"premium",
    title:"Ultra Bot Pro",
    desc:"Bot fitur lengkap",
    color:"#1b0f0f",
    glow:"gold",
    badge:"HOT",
    btn1:"Buy",
    link1:"#",
    btn2:"Copy ID",
    copy:"BOT_PRO_99"
  }
];


/* ========= SYSTEM ========= */

storeName.innerText = store.name;
storeDesc.innerText = store.desc;

freeTitle.innerText="FREE SCRIPT";
premiumTitle.innerText="PREMIUM SCRIPT";

const freeList=document.getElementById("freeList");
const premiumList=document.getElementById("premiumList");

let freeCount=0, premiumCount=0;

function ripple(card,e){
  const r=document.createElement("span");
  r.className="ripple";
  r.style.left=e.offsetX+"px";
  r.style.top=e.offsetY+"px";
  card.appendChild(r);
  setTimeout(()=>r.remove(),500);
}

function createCard(item){
  const card=document.createElement("div");
  card.className="card";
  card.style.setProperty('--bg',item.color);
  card.style.setProperty('--glow',item.glow);

  card.innerHTML=`
    <div class="badge">${item.badge||""}</div>
    <h
