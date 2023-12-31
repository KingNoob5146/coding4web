let gridItemsData = [
    {
        id: "c1",
        img1: "assets/small.png",
        title1: "SMALL",
        hindi1: "छोटा",
        img2: "assets/big.png",
        title2: "BIG",
        hindi2: "बड़ा"
    },
    {
        id: "c2",
        img1: "assets/hard.png",
        title1: "HARD",
        hindi1: "सख्त",
        img2: "assets/soft.png",
        title2: "SOFT",
        hindi2: "कोमल"
    },
    {
        id: "c3",
        img1: "assets/front.png",
        title1: "FRONT",
        hindi1: "सामने का/ अग्र",
        img2: "assets/back.png",
        title2: "BACK",
        hindi2: "पीछे का/ पृष्ठ"
    },
    {
        id: "c4",
        img1: "assets/fair.png",
        title1: "FAIR",
        hindi1: "गोरा",
        img2: "assets/dark.png",
        title2: "DARK",
        hindi2: "सांवला"
    },
    {
        id: "c5",
        img1: "assets/maths1.png",
        title1: "ADD",
        hindi1: "जोड़ना",
        img2: "assets/maths2.png",
        title2: "SUBTRACT",
        hindi2: "घटाना"
    },
    {
        id: "c6",
        img1: "assets/full.png",
        title1: "FULL",
        hindi1: "भरा हुआ",
        img2: "assets/empty.png",
        title2: "EMPTY",
        hindi2: "खाली"
    },
    {
        id: "c7",
        img1: "assets/boy.png",
        title1: "BOY",
        hindi1: "लड़का",
        img2: "assets/girl.png",
        title2: "GIRL",
        hindi2: "लड़की"
    },
    {
        id: "c8",
        img1: "assets/black.png",
        title1: "BLACK",
        hindi1: "काला",
        img2: "assets/white.png",
        title2: "WHITE",
        hindi2: "सफ़ेद"
    },
    {
        id: "c9",
        img1: "assets/fast.png",
        title1: "FAST",
        hindi1: "तेज़",
        img2: "assets/slow.png",
        title2: "SLOW",
        hindi2: "धीमा"
    },
    {
        id: "c10",
        img1: "assets/fat.png",
        title1: "FAT",
        hindi1: "मोटा",
        img2: "assets/lean.png",
        title2: "LEAN",
        hindi2: "दुबला"
    },
    {
        id: "c11",
        img1: "assets/hot.png",
        title1: "HOT",
        hindi1: "गरम",
        img2: "assets/cold.png",
        title2: "COLD",
        hindi2: "ठंडा"
    },
    {
        id: "c12",
        img1: "assets/sharp.png",
        title1: "SHARP",
        hindi1: "धारधार",
        img2: "assets/blunt.png",
        title2: "BLUNT",
        hindi2: "बिना धारवाला"
    },
    {
        id: "c13",
        img1: "assets/awake.png",
        title1: "AWAKE",
        hindi1: "जागना",
        img2: "assets/sleep.png",
        title2: "SLEEP",
        hindi2: "सोना"
    },
    {
        id: "c14",
        img1: "assets/high.png",
        title1: "HIGH",
        hindi1: "ऊँचा",
        img2: "assets/low.png",
        title2: "LOW",
        hindi2: "नीचा"
    },
    {
        id: "c15",
        img1: "assets/day.png",
        title1: "DAY",
        hindi1: "दिन",
        img2: "assets/night.png",
        title2: "NIGHT",
        hindi2: "रात"
    },
    {
        id: "c16",
        img1: "assets/far.png",
        title1: "FAR",
        hindi1: "दूर",
        img2: "assets/near.png",
        title2: "NEAR",
        hindi2: "पास"
    }
];

let grid = document.getElementById('grid');

let generategrid = () => {

    return (grid.innerHTML = gridItemsData.map((x) => {
        let { id, img1, img2, title1, title2, hindi1, hindi2 } = x;
        return `
        <div class="column">
            <div class="container">
                <div class="pair">
                    <!----Sticker Start-->
                    <div class="sticker">
                        <div id="img-1-${id}" class="image">
                            <img  src=${img1} >
                        </div>
                        <div class="caption">
                            <p class="left-caption">${title1}</p>
                            <p class="right-caption">${hindi1}</p>
                        </div>
                    </div>
                    <!---Sticker End-->

                    <!---sticker Start-->
                    <div class="sticker">
                        <div id="img-2-${id}" class="image2">
                            <img  src=${img2}>
                        </div>
                        <div class="caption">
                            <p class="left-caption">${title2}</p>
                            <p class="right-caption">${hindi2}</p>
                        </div>
                    </div>
                    <!--sticker End--->
                </div>
            </div>
        </div>
        `;
    }
    ).join(""))


};


generategrid();