console.log("hello");


const l_name=[
  "Know it",
  "Drive Buddy",
  "XoX Max",
  "Water Puzzle Game",
  "Rock Paper Scissors",
  "XoX Game"
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

const sugg_name=document.createElement("div");
sugg_name.classList.add("sugg_name");
sugg_name.innerText=`${l_name[i]}`;

sugg_dis_space.append(sugg_name);

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
