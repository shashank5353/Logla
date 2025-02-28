console.log("hello");


const l_name=[
  "Know it",
  "Drive Buddy",
  "XoX Max",
  "Water Pussel Game",
  "Rock Paper Scisoors",
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
  2,2,1,1,1,1
  ];

function sugg_fun(){

for(let i=0;i<l_name.length;i++){
const sugg_space=document.querySelector(".sugg_space");

const sugg=document.createElement("div");
sugg.classList.add("sugg");

const sugg_logo=document.createElement("div");
sugg_logo.classList.add("sugg_logo");
/*sugg_logo.style.backgroundImage=`
   url('app_logos/l${l_logos[i]}.jpeg')
 `;*/
  sugg_logo.style.backgroundImage=`url('app_logo.jpeg')`;
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
sugg_visit_btn.innerText="Vist Now"

sugg_dis_space.append(sugg_visit_btn);

sugg.append(sugg_dis_space);

sugg_space.append(sugg);

}

}

sugg_fun();
