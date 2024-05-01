import{r as t,h,H as e}from"./p-51b35e0b.js";const a=':host{--color-player-1:blue;--color-player-2:red;display:block;height:100%;width:100%}:host .game{display:flex;flex-direction:column;height:100%;align-content:space-between;justify-content:space-between}:host .game .player{display:flex;align-items:center;padding:15px;gap:5px}:host .game .player .ring::after{content:attr(data-number)}:host .game .board{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}:host .game .board .rings{position:relative;width:100px;height:100px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex:0 0 calc(33.3333% - 2px);border:1px solid white;padding:30px 0}:host .game .board .rings::after{content:attr(data-max);position:absolute}:host .game .board .rings.dropable{background-color:rgba(0, 0, 0, 0.034)}:host .game .board .rings:nth-child(3n){border-left:1px solid grey}:host .game .board .rings:nth-child(3n+1){border-right:1px solid grey}:host .game .board .rings:nth-child(n+4){border-top:1px solid grey}:host .game .board .rings .ring{position:absolute}:host .game .ring{border:2px solid;border-radius:50%;display:flex;justify-content:center;align-items:center}:host .game .ring.draggable{cursor:grab}:host .game .ring:hover::after{content:attr(data-number)}:host .game .ring[data-number="1"]{width:6px;height:6px}:host .game .ring[data-number="2"]{width:12px;height:12px}:host .game .ring[data-number="3"]{width:18px;height:18px}:host .game .ring[data-number="4"]{width:24px;height:24px}:host .game .ring[data-number="5"]{width:30px;height:30px}:host .game .ring[data-number="6"]{width:36px;height:36px}:host .game .ring[data-number="7"]{width:42px;height:42px}:host .game .ring[data-number="8"]{width:48px;height:48px}:host .game .ring[data-number="9"]{width:54px;height:54px}:host .game .ring[data-number="10"]{width:60px;height:60px}:host .game .ring[data-number="11"]{width:66px;height:66px}:host .game .ring[data-number="12"]{width:72px;height:72px}:host .game .ring[data-number="13"]{width:78px;height:78px}:host .game .ring[data-number="14"]{width:84px;height:84px}:host .game .ring[data-number="15"]{width:90px;height:90px}:host .game .ring[data-number="16"]{width:96px;height:96px}:host .game .ring[data-number="17"]{width:102px;height:102px}:host .game .ring[data-number="18"]{width:108px;height:108px}:host .game .ring[data-number="19"]{width:114px;height:114px}:host .game .ring[data-number="20"]{width:120px;height:120px}:host .game .ring[data-number="21"]{width:126px;height:126px}:host .game .ring[data-number="22"]{width:132px;height:132px}:host .game .ring[data-number="23"]{width:138px;height:138px}:host .game .ring[data-number="24"]{width:144px;height:144px}:host .game .ring[data-number="25"]{width:150px;height:150px}:host .game .ring[data-number="26"]{width:156px;height:156px}:host .game .ring[data-number="27"]{width:162px;height:162px}:host .game .ring[data-number="28"]{width:168px;height:168px}:host .game .ring[data-number="29"]{width:174px;height:174px}:host .game .ring[data-number="30"]{width:180px;height:180px}:host .game .ring[data-number="31"]{width:186px;height:186px}:host .game .ring[data-number="32"]{width:192px;height:192px}:host .game .ring[data-number="33"]{width:198px;height:198px}:host .game .ring[data-number="34"]{width:204px;height:204px}:host .game .ring[data-number="35"]{width:210px;height:210px}:host .game .ring[data-number="36"]{width:216px;height:216px}:host .game .ring[data-number="37"]{width:222px;height:222px}:host .game .ring[data-number="38"]{width:228px;height:228px}:host .game .ring[data-number="39"]{width:234px;height:234px}:host .game .ring[data-number="40"]{width:240px;height:240px}:host .game .ring[data-number="41"]{width:246px;height:246px}:host .game .ring[data-number="42"]{width:252px;height:252px}:host .game .ring[data-number="43"]{width:258px;height:258px}:host .game .ring[data-number="44"]{width:264px;height:264px}:host .game .ring[data-number="45"]{width:270px;height:270px}:host .game .ring[data-number="46"]{width:276px;height:276px}:host .game .ring[data-number="47"]{width:282px;height:282px}:host .game .ring[data-number="48"]{width:288px;height:288px}:host .game .ring[data-number="49"]{width:294px;height:294px}:host .game .ring[data-number="50"]{width:300px;height:300px}:host .game .ring[data-number="51"]{width:306px;height:306px}:host .game .ring[data-number="52"]{width:312px;height:312px}:host .game .ring[data-number="53"]{width:318px;height:318px}:host .game .ring[data-number="54"]{width:324px;height:324px}:host .game .ring[data-number="55"]{width:330px;height:330px}:host .game .ring[data-number="56"]{width:336px;height:336px}:host .game .ring[data-number="57"]{width:342px;height:342px}:host .game .ring[data-number="58"]{width:348px;height:348px}:host .game .ring[data-number="59"]{width:354px;height:354px}:host .game .ring[data-number="60"]{width:360px;height:360px}:host .game .ring[data-number="61"]{width:366px;height:366px}:host .game .ring[data-number="62"]{width:372px;height:372px}:host .game .ring[data-number="63"]{width:378px;height:378px}:host .game .ring[data-number="64"]{width:384px;height:384px}:host .game .ring[data-number="65"]{width:390px;height:390px}:host .game .ring[data-number="66"]{width:396px;height:396px}:host .game .ring[data-number="67"]{width:402px;height:402px}:host .game .ring[data-number="68"]{width:408px;height:408px}:host .game .ring[data-number="69"]{width:414px;height:414px}:host .game .ring[data-number="70"]{width:420px;height:420px}:host .game .ring[data-number="71"]{width:426px;height:426px}:host .game .ring[data-number="72"]{width:432px;height:432px}:host .game .ring[data-number="73"]{width:438px;height:438px}:host .game .ring[data-number="74"]{width:444px;height:444px}:host .game .ring[data-number="75"]{width:450px;height:450px}:host .game .ring[data-number="76"]{width:456px;height:456px}:host .game .ring[data-number="77"]{width:462px;height:462px}:host .game .ring[data-number="78"]{width:468px;height:468px}:host .game .ring[data-number="79"]{width:474px;height:474px}:host .game .ring[data-number="80"]{width:480px;height:480px}:host .game .ring[data-number="81"]{width:486px;height:486px}:host .game .ring[data-number="82"]{width:492px;height:492px}:host .game .ring[data-number="83"]{width:498px;height:498px}:host .game .ring[data-number="84"]{width:504px;height:504px}:host .game .ring[data-number="85"]{width:510px;height:510px}:host .game .ring[data-number="86"]{width:516px;height:516px}:host .game .ring[data-number="87"]{width:522px;height:522px}:host .game .ring[data-number="88"]{width:528px;height:528px}:host .game .ring[data-number="89"]{width:534px;height:534px}:host .game .ring[data-number="90"]{width:540px;height:540px}:host .game .ring[data-number="91"]{width:546px;height:546px}:host .game .ring[data-number="92"]{width:552px;height:552px}:host .game .ring[data-number="93"]{width:558px;height:558px}:host .game .ring[data-number="94"]{width:564px;height:564px}:host .game .ring[data-number="95"]{width:570px;height:570px}:host .game .ring[data-number="96"]{width:576px;height:576px}:host .game .ring[data-number="97"]{width:582px;height:582px}:host .game .ring[data-number="98"]{width:588px;height:588px}:host .game .ring[data-number="99"]{width:594px;height:594px}:host .game .ring[data-number="100"]{width:600px;height:600px}:host .game .ring[data-player="1"]{border-color:var(--color-player-1)}:host .game .ring[data-player="2"]{border-color:var(--color-player-2)}';const i=a;const r=class{constructor(h){t(this,h);this.draggingItem=0;this.gameBoard=new Array(9).fill({pos:0,rings:[]}).map(((t,h)=>({pos:h+1,rings:[]})));this.playItem=[...Array(20).keys()].map((t=>t+5)).reverse();this.turn=1}checkBoard(){const t=this.gameBoard.map((({pos:t,rings:h})=>{let e;const a=Math.max(0,...h);if(a){e=Math.max(0,...h)%2===0?2:1}return{pos:t,winner:e}}));const h=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];const e=h.map((h=>{let e=0;let a=0;h.map((h=>{const i=t.find((({pos:t})=>h===t)).winner;if(i===1){e++}if(i===2){a++}}));if(e===3){return 1}if(a===3){return 2}})).filter((t=>t!==undefined));if(e.length){setTimeout((()=>{alert(`PLAYER ${e[0]} WIN`)}),150)}}dropHandler(t,h){t.preventDefault();const e=t.dataTransfer.getData("ring");this.addToBoard(Number(e),h)}dragOver(t,h){if(this.checkDraggable(h)){t.preventDefault();t.dataTransfer.dropEffect="move"}}checkDraggable(t){return this.draggingItem&&this.checkTurn()&&this.draggingItem>Math.max(0,...t)}checkTurn(){if(this.turn%2===0&&this.draggingItem%2===0){return true}if(this.turn%2!==0&&this.draggingItem%2!==0){return true}}dragStart(t,h){t.dataTransfer.clearData();t.dataTransfer.setData("ring",h.toString());this.draggingItem=h}dragEnd(){this.draggingItem=null}renderRings({rings:t,pos:e}){return h("div",{class:`rings ${this.checkDraggable(t)?"dropable":""}`,"data-max":Math.max(0,...t)>0?Math.max(0,...t):"",onDrop:t=>this.dropHandler(t,e),onDragOver:h=>this.dragOver(h,t)},t.map((t=>this.renderRing(t))))}renderRing(t,e=false){return h("div",{class:`ring ${e?"draggable":""}`,key:t,"data-player":t%2==0?1:2,"data-number":t,draggable:e,onDragStart:h=>this.dragStart(h,t),onDragEnd:()=>this.dragEnd()})}renderBoard(){return h("div",{class:"board"},this.gameBoard.sort(this.sortPos).map((t=>this.renderRings(t))))}addToBoard(t,h){this.gameBoard=this.gameBoard.map((e=>{if(e.pos===h){e.rings.push(t)}return e}));this.playItem=this.playItem.filter((h=>h!==t));this.turn++}sortPos(t,h){if(t.pos<h.pos){return-1}else if(t.pos>h.pos){return 1}return 0}renderPLayer(t){const e=this.playItem.filter((h=>{if(t%2===0){return h%2===0}return h%2!==0}));let a=false;if(this.turn%2===0&&t%2===0){a=true}if(this.turn%2!==0&&t%2!==0){a=true}return h("div",{class:"player","data-player":t},e.map((t=>this.renderRing(t,a))))}render(){return h(e,{key:"049ead70783f1fb267d9762f05639ab03ab87dd0"},h("div",{key:"10960cb802afe83acd465e579537dc302c2af712",class:"header"}),h("div",{key:"2a262e1c51548556bfa40d632f749b5f495ffd1b",class:"game"},this.renderPLayer(1),this.renderBoard(),this.renderPLayer(2)))}static get watchers(){return{gameBoard:["checkBoard"]}}};r.style=i;export{r as ring_component};
//# sourceMappingURL=p-601123f2.entry.js.map