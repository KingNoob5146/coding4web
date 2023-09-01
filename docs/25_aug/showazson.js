let movIndexData = [
  {
    id: "p1",
    show_name: "Breaking Bad",
    prod1: "Crystal Meth Candy",
    prod2: "Los Pollos Hermanos Merchandise",
    prod3: "Saul Goodman's Legal Services",
    prod4: "",
    prod5: "",
    cost1: "2500 / Ounce",
    cost2: "120 / Week",
    cost3: "",
    cost4: "",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p2",
    show_name: "The Office",
    prod1: "Dunder Mifflin A4 Sheet Bundle",
    prod2: "Schrute Farms Beetroot Juice",
    prod3: "Kevins Famous Chilli",
    prod4: "Creeds Mystery Pack",
    prod5: "Serenity by Jan - Candles",
    cost1: "20 / Pack",
    cost2: "10 / Bottle",
    cost3: "15 / Bottle",
    cost4: "75 / Pack",
    cost5: "5 / Candle",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p3",
    show_name: "Modern Family",
    prod1: "Pritchett's Closets & Blinds Merchandise",
    prod2: "Phil's-osophy\" Book",
    prod3: "Phils Head Scratcher TM",
    prod4: "",
    prod5: "",
    cost1: "21 / Pack",
    cost2: "11 / Bottle",
    cost3: "16 / Bottle",
    cost4: "",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p4",
    show_name: "Brooklyn 99",
    prod1: "Nutriboom",
    prod2: "Terrys Greek Yogurts",
    prod3: "Giggle Pig Drug",
    prod4: "SkyFire Books",
    prod5: "",
    cost1: "22 / Pack",
    cost2: "12 / Bottle",
    cost3: "17 / Bottle",
    cost4: "77 / Pack",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p5",
    show_name: "Marvel Universe",
    prod1: "Daily Bugle Newspaper",
    prod2: "Ben & Jerry Ice Cream",
    prod3: "Vibranium (from Wakanda)",
    prod4: "Avengers 1 Shawarma",
    prod5: "",
    cost1: "23 / Pack",
    cost2: "13 / Bottle",
    cost3: "18 / Bottle",
    cost4: "78 / Pack",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p6",
    show_name: "Back To The Future",
    prod1: "Flux Capacitor",
    prod2: "Hoverboard",
    prod3: "",
    prod4: "",
    prod5: "",
    cost1: "24 / Pack",
    cost2: "14 / Bottle",
    cost3: "",
    cost4: "",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p7",
    show_name: "Harry Potter",
    prod1: "The Daily Prophet/ motion newspaper",
    prod2: "Issue of the Quiggle",
    prod3: "Extendable Ears",
    prod4: "Peruvian Instant Darkness Power",
    prod5: "",
    cost1: "25 / Pack",
    cost2: "15 / Bottle",
    cost3: "20 / Bottle",
    cost4: "80 / Pack",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  {
    id: "p8",
    show_name: "The Flash",
    prod1: "CC Jitters Coffee",
    prod2: "Big Belly Burger",
    prod3: "",
    prod4: "",
    prod5: "",
    cost1: "26 / Pack",
    cost2: "16 / Bottle",
    cost3: "",
    cost4: "",
    cost5: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
];

let movIndex = document.getElementById("movIndex");

let generatemovIndex = () => {
  return (movIndex.innerHTML = movIndexData
    .map((x) => {
      let {
        id,
        show_name,
        prod1,
        prod2,
        prod3,
        prod4,
        prod5,
        cost1,
        cost2,
        cost3,
        cost4,
        cost5,
        img1,
        img2,
        img3,
        img4,
        img5,
      } = x;
      return `
  
          <div class="list"  id = ${id}>
            <h3><a href = "" >${show_name}</a></h3>
            <li>
              <a href = "" >${prod1}</a></li>
            <li><a href = "" >${prod2}</a></li>
            <li><a href = "" >${prod3}</a></li>
            <li><a href ="">${prod4}</a><li>
            <br />
          </div>

          
          

      `;
    })
    .join(""));
};

generatemovIndex();

let movIndexData = document.getElementById("movIndex");

let generatemovIndex = () => {
  return (movIndex.innerHTML = movIndexData
    .map((y) => {
      let {
        id,
        show_name,
        prod1,
        prod2,
        prod3,
        prod4,
        prod5,
        cost1,
        cost2,
        cost3,
        cost4,
        cost5,
        img1,
        img2,
        img3,
        img4,
        img5,
      } = y;
      return `
        <div class="info" id = ${id}>
          <div class="image">
            <img
              src="https://media.gettyimages.com/id/1366843909/photo/sandcastle-on-beach-in-weston-super-mare.jpg?s=612x612&w=gi&k=20&c=X_qWCMAQpgYBxSrplosS_0eBp3iapsFanAtiTVuv3wo="
            />
          </div>
          <div class="text-align">
            <div class="title-index">Product Info</div>
            <div class="list">
              <h3>${prod1}</h3>
              <div class="para">
               ${info}
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join(""));
};

generatemov();
