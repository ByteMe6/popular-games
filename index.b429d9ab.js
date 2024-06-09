var scientists=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Pavel",surname:"Du Rove",born:1984,dead:1/0,id:12}],btn19st=document.querySelector(".btn19st");btn19st.addEventListener("click",bornIn19thCentury);var btnAE=document.querySelector(".btnAE");btnAE.addEventListener("click",AEborn);var btnAlf=document.querySelector(".btnAlf");btnAlf.addEventListener("click",sortAlf);var btnC=document.querySelector(".btnC");btnC.addEventListener("click",scienC);var btnVik=document.querySelector(".btnVik");btnVik.addEventListener("click",sortVik);var btnA=document.querySelector(".btnA");btnA.addEventListener("click",delA);var btnNayp=document.querySelector(".btnNayp");btnNayp.addEventListener("click",findNayp);var listElement=document.querySelector(".ss-list");function bornIn19thCentury(){listElement.textContent="",scientists.filter((function(e){return e.born>=1801&&e.born<=1900})).forEach((function(e){var n=document.createElement("li");n.textContent="".concat(e.name," ").concat(e.surname," (born ").concat(e.born,", died ").concat(e.dead,")"),listElement.appendChild(n)}))}function AEborn(){listElement.textContent="";var e=scientists.find((function(e){return"Albert"==e.name&&"Einstein"==e.surname})),n=document.createElement("li");n.textContent=e.born,listElement.appendChild(n)}function sortAlf(){listElement.textContent="";var e=scientists.map((function(e){return e.name})),n=document.createElement("li");n.textContent=e.sort(),listElement.appendChild(n)}function scienC(){listElement.textContent="";scientists.filter((function(e){return e.surname.startsWith("C")})).forEach((function(e){var n=document.createElement("li");n.textContent="".concat(e.name," ").concat(e.surname," (born ").concat(e.born,", died ").concat(e.dead,")"),listElement.appendChild(n)}))}function sortVik(){listElement.textContent="";scientists.slice().sort((function(e,n){return n.dead-n.born-(e.dead-e.born)})).forEach((function(e){var n=document.createElement("li");n.textContent="".concat(e.name," ").concat(e.surname," (born ").concat(e.born,", died ").concat(e.dead,")"),listElement.appendChild(n)}))}function delA(){listElement.textContent="";scientists.filter((function(e){return!e.name.startsWith("A")})).forEach((function(e){var n=document.createElement("li");n.textContent="".concat(e.name," ").concat(e.surname," (born ").concat(e.born,", died ").concat(e.dead,")"),listElement.appendChild(n)}))}function findNayp(){listElement.textContent="";var e=scientists.reduce((function(e,n){return n.born>e.born?n:e}),scientists[0]),n=document.createElement("li");n.textContent="".concat(e.name," ").concat(e.surname," (born ").concat(e.born,", died ").concat(e.dead,")"),listElement.appendChild(n)}function findShortestAndLongestLifespan(){for(var e=1/0,n=-1/0,t=[],a=[],r=0;r<scientists.length;r++){var i=scientists[r],c=i.name,o=i.surname,d=i.born,s=i.dead,l=s-d;l<e?(e=l,t=[{name:c,surname:o,born:d,dead:s}]):l===e&&t.push({name:c,surname:o,born:d,dead:s}),l>n?(n=l,a=[{name:c,surname:o,born:d,dead:s}]):l===n&&a.push({name:c,surname:o,born:d,dead:s})}var m=document.querySelector(".ss-list");if(m.innerHTML="",t.length>0){var u=t[0],b=u.name,f=u.surname,E=document.createElement("li");E.textContent="Ученые с минимальной продолжительностью жизни: ".concat(b," ").concat(f),m.appendChild(E)}if(a.length>0){var C=a[0],v=C.name,h=C.surname,p=document.createElement("li");p.textContent="Ученые с максимальной продолжительностью жизни: ".concat(v," ").concat(h),m.appendChild(p)}}var btnSameInitials=document.querySelector(".sciBtn:last-child");function findScientistsWithSameInitials(){var e=document.querySelector(".ss-list");e.textContent="";var n=scientists.filter((function(e){var n=e.name,t=e.surname;return n.charAt(0).toLowerCase()===t.charAt(0).toLowerCase()}));if(n.length>0)n.forEach((function(n){var t=document.createElement("li");t.textContent="".concat(n.name," ").concat(n.surname," (born ").concat(n.born,", died ").concat(n.dead,")"),e.appendChild(t)}));else{var t=document.createElement("li");t.textContent="Нет ученых, у которых совпадают первые буквы имени и фамилии.",e.appendChild(t)}}btnSameInitials.addEventListener("click",findScientistsWithSameInitials);
//# sourceMappingURL=index.b429d9ab.js.map