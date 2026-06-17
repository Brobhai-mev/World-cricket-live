/* ===================================
   WORLD CRICKET LIVE
   JAVASCRIPT
=================================== */

console.log("World Cricket Live Loaded");

/* -----------------------------
   EXPLORE BUTTON
------------------------------*/

const exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){

    exploreBtn.addEventListener("click", () => {

        const liveSection =
        document.getElementById("live");

        liveSection.scrollIntoView({
            behavior:"smooth"
        });

    });

}

/* -----------------------------
   DEMO LIVE MATCH DATA
------------------------------*/

const liveMatchesData = [

{
team1:"India",
team2:"Australia",
score:"184/4 (18.3)",
status:"LIVE"
},

{
team1:"England",
team2:"Pakistan",
score:"122/3 (14.0)",
status:"LIVE"
},

{
team1:"South Africa",
team2:"New Zealand",
score:"95/2 (11.2)",
status:"LIVE"
}

];

/* -----------------------------
   RENDER LIVE MATCHES
------------------------------*/

function renderLiveMatches(){

    const container =
    document.getElementById("liveMatches");

    if(!container) return;

    container.innerHTML = "";

    liveMatchesData.forEach(match => {

        const card =
        document.createElement("div");

        card.className =
        "match-card";

        card.innerHTML = `

        <div class="live-badge">
        ${match.status}
        </div>

        <h3>
        ${match.team1}
        vs
        ${match.team2}
        </h3>

        <p>
        ${match.score}
        </p>

        <button>
        View Scorecard
        </button>

        `;

        container.appendChild(card);

    });

}

renderLiveMatches();

/* -----------------------------
   FAKE LIVE SCORE UPDATE
   DEMO PURPOSE ONLY
------------------------------*/

function updateScores(){

    liveMatchesData.forEach(match => {

        let randomRuns =
        Math.floor(
        Math.random()*6
        );

        match.score =
        match.score +
        " +" +
        randomRuns;

    });

    renderLiveMatches();

}

setInterval(updateScores,30000);

/* -----------------------------
   CURRENT YEAR FOOTER
------------------------------*/

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()}
World Cricket Live.
All Rights Reserved.`;

}

/* -----------------------------
   LOADING EFFECT
------------------------------*/

window.addEventListener(
"load",
() => {

document.body.style.opacity="0";

setTimeout(() => {

document.body.style.transition=
"opacity 0.5s";

document.body.style.opacity="1";

},100);

}
);

/* -----------------------------
   API PLACEHOLDER
------------------------------*/

async function fetchLiveMatches(){

/*

Future API Example

const response = await fetch(
"https://YOUR_API_URL"
);

const data =
await response.json();

console.log(data);

Replace demo data
with API response.

*/

console.log(
"API Integration Ready"
);

}

fetchLiveMatches();

/* -----------------------------
   MATCH CARD CLICK EVENT
------------------------------*/

document.addEventListener(
"click",
function(e){

if(
e.target.tagName ===
"BUTTON"
){

alert(
"Scorecard Page Coming Soon!"
);

}

}
);

/* -----------------------------
   NETWORK STATUS
------------------------------*/

window.addEventListener(
"offline",
() => {

alert(
"You are offline"
);

}
);

window.addEventListener(
"online",
() => {

console.log(
"Back Online"
);

}
);

/* -----------------------------
   SIMPLE SEARCH SYSTEM
------------------------------*/

function searchMatch(team){

return liveMatchesData.filter(
match =>

match.team1
.toLowerCase()
.includes(team.toLowerCase())

||

match.team2
.toLowerCase()
.includes(team.toLowerCase())

);

}

/* Example

console.log(
searchMatch("India")
);

*/

/* -----------------------------
   APP READY
------------------------------*/

console.log(
"World Cricket Live Ready"
);
