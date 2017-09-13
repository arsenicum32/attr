var ul = document.getElementById("ul");


function ap(html , o){
  if(o){
    ul.innerHTML+=`
      <li>
        <nobr>
          <p contenteditable="true" >${o.name}</p><br/>
          <p contenteditable="true" >${o.ac}</p><br/>
          <img class="i" src="${o.src}"/><br/>
          <small>${o.t}</small>
        </nobr>
        <div class="bubble"></div>
      </li>
      `
  }else{
    document.getElementById("ul").innerHTML+=html;
  }
}


var data = [
  {
    "name": "2",
    "ac": "ребенок в кровати",
    "t": 1.270291
  },
  {
    "name": "2",
    "ac": "лицо бабушки",
    "t": 5.62001
  },
  {
    "name": "5",
    "ac": "война больница",
    "t": 7.342203
  },
  {
    "name": "2",
    "ac": "детская игрушка",
    "t": 9.140582
  },
  {
    "name": "2",
    "ac": "ребенок прячется",
    "t": 10.668881
  },
  {
    "name": "3",
    "ac": "улица ребенок идет",
    "t": 13.006797
  },
  {
    "name": "3",
    "ac": "дядя за стойкой",
    "t": 15.092185
  },
  {
    "name": "2",
    "ac": "лицо ребенка",
    "t": 17.467491
  },
  {
    "name": "3",
    "ac": "дядя за стойкой",
    "t": 18.668295
  },
  {
    "name": "2",
    "ac": "квартира игрушки",
    "t": 20.470908
  },
  {
    "name": "4",
    "ac": "молодая в окне",
    "t": 23.569203
  },
  {
    "name": "2",
    "ac": "фабрика",
    "t": 25.680292
  },
  {
    "name": "3",
    "ac": "молодая работница",
    "t": 27.085361
  },
  {
    "name": "4",
    "ac": "молодая за партой",
    "t": 27.972545
  },
  {
    "name": "1",
    "ac": "книги на столе",
    "t": 29.071249
  },
  {
    "name": "6",
    "ac": "офис тухнет свет",
    "t": 30.321209
  },
  {
    "name": "3",
    "ac": "молодая за компьютером",
    "t": 34.022222
  },
  {
    "name": "3",
    "ac": "молодая в машине",
    "t": 37.650846
  },
  {
    "name": "4",
    "ac": "женщина в коридоре офиса",
    "t": 39.954034
  },
  {
    "name": "3",
    "ac": "женщина в комнате офиса",
    "t": 42.372144
  },
  {
    "name": "3",
    "ac": "женщина с цветами",
    "t": 44.00696
  },
  {
    "name": "2",
    "ac": "лицо младенца",
    "t": 46.173702
  },
  {
    "name": "2",
    "ac": "лицо бабушки",
    "t": 48.575687
  },
  {
    "name": "2",
    "ac": "лицо младенца",
    "t": 51.231371
  },
  {
    "name": "-",
    "ac": "сообщение",
    "t": 53.667613
  },
  {
    "name": "-",
    "ac": "сообщение 2",
    "t": 55.627001
  },
  {
    "name": "-",
    "ac": "реклама",
    "t": 57.428103
  }
]
// for(var i in data){
//   var i = data[i];
//   ap("", i);
// }

var video_dom = document.getElementById("v");
var canvas_draw = document.getElementById("c");
video_dom.addEventListener('play', _=> {
  video_dom.width = canvas_draw.width = video_dom.offsetWidth;
  video_dom.height = canvas_draw.height = video_dom.offsetHeight;
  var ctx_draw = canvas_draw.getContext('2d');

  // document.getElementById("top").addEventListener('click', _=>{
  //   var img = new Image();
  //   img.src = canvas_draw.toDataURL('image/png');
  //   //var fram = data.splice(i , 1 )[0]
  //   console.log(video_dom.currentTime.toFixed(1));
  //
  //   data.push({
  //     name: "fram.name",
  //     ac: "fram.ac",
  //     t: video_dom.currentTime
  //   })
  //
  //   img.class = 'i';
  //   ap("", {
  //     name: "fram.name",
  //     ac: "fram.ac",
  //     src: img.src,
  //     t: video_dom.currentTime +'s'
  //   })
  //
  //   console.log(JSON.stringify(data));
  //
  //   //ul.scrollWidth - ul.clientWidth; // required to stop
  //   ul.scrollLeft += ul.scrollWidth;
  // })

  draw_interval = setInterval(_=> {
   // import the image from the video
   ctx_draw.drawImage(video_dom, 0, 0, video_dom.width, video_dom.height);
   document.getElementById("t").innerHTML = video_dom.currentTime.toFixed(1);


   for(var i in data){
     if(
       data[i].t.toFixed(1)
        ==  video_dom.currentTime.toFixed(1)   ){
       var img = new Image();
       img.src = canvas_draw.toDataURL('image/png');
       var fram = data.splice(i , 1 )[0]
       console.log(video_dom.currentTime.toFixed(1));

       img.class = 'i';
       ap("", {
         name: fram.name,
         ac: fram.ac,
         src: img.src,
         t: fram.t.toFixed(2)+'s'//video_dom.currentTime +'s'
       })
       ul.scrollLeft += ul.scrollWidth;
     }
   }

   if(video_dom.currentTime>60){
     clearInterval(draw_interval)
   }
   //document.getElementById("ul").appendChild(img);
 } , 10)
 }, false);
