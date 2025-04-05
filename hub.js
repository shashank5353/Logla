console.log("hello");


const l_name=[
  "Know it",
  "Drive Buddy",
  "XoX Max",
  "Water Puzzle Game",
  "Rock Paper Scissors",
  "XoX Game"
  ];
const l_dis = [
  "Know It is a smart local search app that helps users discover nearby shops and restaurants, view their items with reviews, and find specific products across multiple stores.",
  "DriveBuddy is a driver-hiring app that connects users with skilled drivers based on their needs, offering subscription plans and automatic replacements for premium users.",
  "XoX Max is a grid-based strategy game like SOS, where the player who forms the most 'XOX' patterns wins.",
  "Water Puzzle Game is a color-sorting puzzle where players pour water between bottles to match all colors, using logic and limited moves.",
  "Rock Paper Scissors is a quick decision-making game where you play against the computer by choosing rock, paper, or scissors to win rounds.",
  "XoX Game is a tic-tac-toe style game where players aim to match three Xs or Os anywhere on the grid—not just in a straight line—to win."
];

const l_link=[
  "https://shashank5353.github.io/Know-it/",
  "https://shashank5353.github.io/Drive_Buddy/",
  "https://shashank5353.github.io/XoX_Max/",
  "https://shashank5353.github.io/Water-pussel-game/",
  "https://shashank5353.github.io/Rock_Paper_Scissor/",
  "https://shashank5353.github.io/xox-game/"
  ];

const l_logos=[
  4,3,1,1,1,1
  ];

function toggleDarkMode() {
  const toogle_btn = document.querySelector(".toogle_btn");
  const header_name = document.querySelector(".header_name");
  toogle_btn.addEventListener("click",()=>{
    document.body.classList.toggle('dark-mode');
      const icon = toogle_btn.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
    header_name.style.backgroundImage=`url('logo2.png')`;
        toogle_btn.innerHTML = `<i class="fas fa-sun"></i> `;
      } else {
        header_name.style.backgroundImage=`url('logo1.png')`;
        toogle_btn.innerHTML = `<i class="fas fa-moon"></i>`;
      }
  })
    }
toggleDarkMode();

function sugg_fun(){

for(let i=0;i<l_name.length;i++){
const sugg_space=document.querySelector(".sugg_space");

const sugg=document.createElement("div");
sugg.classList.add("sugg");

const sugg_logo=document.createElement("div");
sugg_logo.classList.add("sugg_logo");
const formats = ["jpeg", "jpg", "png", "webp", "gif"];
const imagePath = `app_logos/l${l_logos[i]}`;
const element = sugg_logo;
for (const format of formats) {
    const img = new Image();
    img.src = `${imagePath}.${format}`;
    img.onload = () => {
        element.style.backgroundImage = `url('${img.src}')`;
    };
}

sugg.append(sugg_logo);

const sugg_dis_space=document.createElement("div");
sugg_dis_space.classList.add("sugg_dis_space");

const sugg_name_dis=document.createElement("div");
sugg_name_dis.classList.add("sugg_name_dis");

const sugg_name=document.createElement("div");
sugg_name.classList.add("sugg_name");
sugg_name.innerText=`${l_name[i]}`;
sugg_name_dis.append(sugg_name);

const sugg_dis_open=document.createElement("div");
sugg_dis_open.classList.add("sugg_dis_open");
sugg_dis_open.innerHTML=`
 <i class="fa-solid fa-chevron-up"></i>
`;
sugg_name_dis.append(sugg_dis_open);

sugg_dis_space.append(sugg_name_dis);

const sugg_dis=document.createElement("div");
sugg_dis.classList.add("sugg_dis");
sugg_dis.innerText=`${l_dis[i]}`;
sugg_dis_space.append(sugg_dis);

sugg_dis_open.addEventListener("click",()=>{
  if(sugg_dis.style.display=="none"){
    sugg_dis.style.display="flex";
    sugg_dis_open.style.rotate=" 180deg";
    setTimeout(()=>{
      sugg_dis.style.fontSize="1.6vh";
    },10)
  }
  else{
  sugg_dis.style.fontSize="1vh";
  sugg_dis_open.style.rotate=" 0deg";
  setTimeout(()=>{
      sugg_dis.style.display="none";
    },50)
  }
  console.log(l_name[i]);
})

const sugg_visit_btn=document.createElement("a");
sugg_visit_btn.classList.add("sugg_visit_btn");
sugg_visit_btn.href=`
${l_link[i]}
`;
sugg_visit_btn.innerText="Visit Now"

sugg_dis_space.append(sugg_visit_btn);

sugg.append(sugg_dis_space);

sugg_space.append(sugg);

}

}

sugg_fun();
