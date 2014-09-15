

function getData() {
   
  	  var data = { "life":[
                  {
                "institution":"University of Bergen",
                "logoURL":"uib.png",
                "title":"Software Engineering",
                "type":"education",
                "started":2013,
                "ended":2015
            },
            {
                "institution":"Javazone",
                "logoURL":"javazone13.png",
                "title":"Volunteer, shift leader",
                "type":"other",
                "started":2013,
                "ended":2013,
            }, 
            {
                "institution":"Capgemini",
                "logoURL":"capgemini.png",
                "title":"Summer Internship",
                "type":"work",
                "started":2014,
                "ended":2014
            },
            {
                "institution":"iPeople",
                "logoURL":"ipeople.png",
                "title":"Webmaster",
                "type":"work",
                "started":2012,
                "ended":2014
            },
            {
                "institution":"College University of Bergen",
                "logoURL":"Movienight.png",
                "title":"Movienight, a Ruby on Rails project",
                "type":"projects",
                "started":2013,
                "ended":2013
            },
            {
                "institution":"Javazone",
                "logoURL":"javazone13.png",
                "title":"Volunteer",
                "type":"other",
                "started":2013,
                "ended":2013,
            }, 
            {
                "institution":"Statoil",
                "logoURL":"statoil.png",
                "title":"Summer Internship",
                "type":"work",
                "started": 2013,
                "ended":2013,
            },
               {
                "institution":"University of Bergen",
                "logoURL":"uib.png",
                "title":"Information and Communication Technology",
                "type":"education",
                "started":2010,
                "ended":2013,
            }, 
                    {
                "institution":"Javazone",
                "logoURL":"javazone13.png",
                "title":"Volunteer",
                "type":"other",
                "started":2012,
                "ended":2012,
            }, 
            {
                "institution":"Ringnes",
                "logoURL":"Ringnes.png",
                "title":"Salgskonsulent",
                "type":"work",
                "started": 2011,
                "ended":2012,
            },
            {
                "institution":"YIT",
                "logoURL":"Yit.png",
                "title":"Resepsjonist",
                "type":"work",
                "started": 2010,
                "ended":2010,
            },
            {
                "institution":"ICA",
                "logoURL":"ICA.png",
                "title":"Kassemann",
                "type":"work",
                "started": 2007,
                "ended":2009,
            },

    ]}
	
    var output="";
    var objTo = document.getElementById('placeholder')
    console.log(data.life.length);
    for (var i in data.life) {
        output = "";
        output+="<article>"
        output+="<aside class='" + data.life[i].type +"'>" + splitType(data.life[i].type) + "</aside>";
        output+="<div class='article-content'>";
        output+="<div class='article-image'><img src='Images/" + data.life[i].logoURL + "' alt='Statoil logo'/></div>";
       	output+="<div class='article-title'><h1>" + data.life[i].title + "</h1></div>";
        output+="<div>" +  data.life[i].institution + "</div>";
       	output+="<div> " + date(data.life[i].started, data.life[i].ended) +"</div>";
       	output+="<div><br /><details>The study offers a specialization in software development. The emphasis lies on training and use of advanced system and software development methods and technologies. The objective is to educate candidates with a great competence in advanced software technology with focus on practical problems. After finishing the program the students should be well-prepared to develop all types of software and software systems as well in technological areas as in administration.</details>";
       	output+="</div></div><aside class='hide'></aside></article>";
    	var divtest = document.createElement("div");
        divtest.setAttribute("name", data.life[i].type);
        divtest.style.visibility = "hidden";
        divtest.style.display = "none";

    	divtest.innerHTML = output;
    	objTo.appendChild(divtest)
    }
      showAllActivated();
   /* localStorage.clear();*/
}

function showAllActivated() {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        if (localStorage.getItem(localStorage.key(i)) !== null) {
            var type = localStorage.key(i);
            document.getElementById(type).style.color = getColor(type);
            show(type);
        }
    }
            printAllShowing();

}


function specifyTypes(element) {
    var type = element.id;
    if (typeof(Storage) != "undefined") {
        if (localStorage.getItem(type) === null) {

            show(type);
            element.style.color = getColor(type);
            localStorage.setItem(type, type);

            /*

           var nodeList = document.getElementsByName(type);
            for (var i = 0; i < nodeList.length; ++i) {
                var item = nodeList[i]; 
                 item.style.visibility = "visible";
                 item.style.display = "inline";
                 item.style.color = "#235D79";
            }*/
        } else {
                localStorage.removeItem(type);
                element.style.color = "white";
                hide(type);
           /* var nodeList = document.getElementsByName(type);
            for (var i = 0; i < nodeList.length; ++i) {
                var item = nodeList[i];
                 item.style.visibility = "hidden";
                 item.style.display = "none";
            }
            */
        
        }
        printAllShowing();
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


function hide(type) {
var nodeList = document.getElementsByName(type);
            for (var i = 0; i < nodeList.length; ++i) {
                var item = nodeList[i];
                 item.style.visibility = "hidden";
                 item.style.display = "none";
            }

}

function show(type) {
        

           var nodeList = document.getElementsByName(type);
            for (var i = 0; i < nodeList.length; ++i) {
                var item = nodeList[i]; 
                 item.style.visibility = "visible";
                 item.style.display = "inline";
                 item.style.color = "#235D79";
            }

}

function printAllShowing() {
    if(localStorage.length < 1) {
     document.getElementById("result").innerHTML = "Press the categories you want to see. Press again to hide."
    } else {
    var listedCategories = "Showing: <b> ";
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        console.log(localStorage.getItem(localStorage.key(i)));
        listedCategories += localStorage.getItem(localStorage.key(i)) + ", ";
    }
        listedCategories += "</b>"
        document.getElementById("result").innerHTML = listedCategories;
    }
}


function getColor(type) {
    if(type === "education")  return "#EEF966";
    else if(type === "work") return "#69D2E7";
    else if(type === "projects") return "#F38630";
    else if(type === "other") return "#FF9E9D";
    return  "rgb(237,229,116)";
}




function date(start, ended) {
  if(ended != start) return start + " - " + ended;
  return start;
}

/*
  Splits the char in type into seperate Div's to make it vertical
  Example:
    @param work
    @return <div>w</div><div>o</div><div>r</div><div>k</div>
*/
function splitType(type){
  var splittedType = "";
  for(var i = 0; i < type.length; i++) {
    splittedType += "<div>" + type.charAt(i) + "</div>";
  }
  return splittedType;

}








