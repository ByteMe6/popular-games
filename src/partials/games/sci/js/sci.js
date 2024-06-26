const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1
    } , 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    } , 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    } , 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    } , 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    } , 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    } , 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    } , 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    } , 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    } , 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    } , 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    } ,  
    { 
        name: "Pavel", 
        surname: "Du Rove", 
        born: 1984, 
        dead: Infinity, 
        id: 12 
    } 
];

    let btn19st=document.querySelector(".btn19st");
    btn19st.addEventListener("click", bornIn19thCentury );
    let btnAE=document.querySelector(".btnAE");
    btnAE.addEventListener("click", AEborn );
    let btnAlf=document.querySelector(".btnAlf");
    btnAlf.addEventListener("click", sortAlf );
    let btnC=document.querySelector(".btnC");
    btnC.addEventListener("click", scienC );
    let btnVik=document.querySelector(".btnVik");
    btnVik.addEventListener("click", sortVik );
    let btnA=document.querySelector(".btnA");
    btnA.addEventListener("click", delA );
    let btnNayp=document.querySelector(".btnNayp");
    btnNayp.addEventListener("click", findNayp );

        const listElement = document.querySelector('.ss-list');

        
function bornIn19thCentury(){
    listElement.textContent="" ;
    scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900).forEach(scientist => {
        let listItem = document.createElement('li');
        listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`;
        listElement.appendChild(listItem);
    });
    
}
//Знайти рік народження Albert Einshtein
function AEborn () {
    listElement.textContent="" ;
    const AEfind= scientists.find(scientist=> scientist.name=="Albert" && scientist.surname=="Einstein")
    let listItem = document.createElement('li');
        listItem.textContent = AEfind.born
        listElement.appendChild(listItem);
};

//Відсортувати вчених за алфавітом
function sortAlf() {
    listElement.textContent="" ;
    const mapAlf= scientists.map(scientist=>scientist.name)
    let listItem = document.createElement('li');
        listItem.textContent = mapAlf.sort()
        listElement.appendChild(listItem);
}

//Знайти вчених, прізвища яких починаються на на літеру “С” 
function scienC () {
    listElement.textContent="" ;
    const cFind=scientists.filter(scientist=>scientist.surname.startsWith("C")).forEach(scientist => {
    let listItem = document.createElement('li');
        listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`;
        listElement.appendChild(listItem);
    
})}
// Відсортувати вчених за кількістю прожитих років
function sortVik() {
    listElement.textContent="" ;
    const sortedByAge = scientists.slice().sort((a, b) => (b.dead - b.born) - (a.dead - a.born)).forEach(scientist=>{

    let listItem = document.createElement('li');
        listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`
        listElement.appendChild(listItem);
        })
}
// Видалити всіх вчених, ім’я яких починається на “А”
function delA () {
    listElement.textContent="" ;
    const AFind=scientists.filter(scientist=>!scientist.name.startsWith("A")).forEach(scientist => {
    let listItem = document.createElement('li');
        listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`;
        listElement.appendChild(listItem);
    
})
}
//Знайти вченого, який народився найпізніше
function findNayp () {
    listElement.textContent="" ;
    let max = scientists.reduce(function(acc, currentValue) {
        return currentValue.born > acc.born ? currentValue : acc;
    }, scientists[0]);
    let listItem = document.createElement('li');
        listItem.textContent = `${max.name} ${max.surname} (born ${max.born}, died ${max.dead})`;
        listElement.appendChild(listItem);
    

} 
function findShortestAndLongestLifespan() {
    let shortestLifespan = Infinity;
    let longestLifespan = -Infinity;
    let shortestLifeScientists = [];
    let longestLifeScientists = [];

    for (let i = 0; i < scientists.length; i++) {
        const { name, surname, born, dead } = scientists[i];
        const lifespan = dead - born;

        if (lifespan < shortestLifespan) {
            shortestLifespan = lifespan;
            shortestLifeScientists = [{ name, surname, born, dead }];
        } else if (lifespan === shortestLifespan) {
            shortestLifeScientists.push({ name, surname, born, dead });
        }

        if (lifespan > longestLifespan) {
            longestLifespan = lifespan;
            longestLifeScientists = [{ name, surname, born, dead }];
        } else if (lifespan === longestLifespan) {
            longestLifeScientists.push({ name, surname, born, dead });
        }
    }

    const listElement = document.querySelector('.ss-list');
    listElement.innerHTML = ''; // Очищаем содержимое div перед добавлением новых элементов

    if (shortestLifeScientists.length > 0) {
        const { name, surname } = shortestLifeScientists[0];
        const listItem = document.createElement('li');
        listItem.textContent = `Ученые с минимальной продолжительностью жизни: ${name} ${surname}`;
        listElement.appendChild(listItem);
    }

    if (longestLifeScientists.length > 0) {
        const { name, surname } = longestLifeScientists[0];
        const listItem = document.createElement('li');
        listItem.textContent = `Ученые с максимальной продолжительностью жизни: ${name} ${surname}`;
        listElement.appendChild(listItem);
    }
}

let btnSameInitials = document.querySelector(".sciBtn:last-child");
btnSameInitials.addEventListener("click", findScientistsWithSameInitials);

function findScientistsWithSameInitials() {
    const listElement = document.querySelector('.ss-list');
    listElement.textContent = "";

    const scientistsWithSameInitials = scientists.filter(scientist => {
        const { name, surname } = scientist;
        return name.charAt(0).toLowerCase() === surname.charAt(0).toLowerCase();
    });

    if (scientistsWithSameInitials.length > 0) {
        scientistsWithSameInitials.forEach(scientist => {
            const listItem = document.createElement('li');
            listItem.textContent = `${scientist.name} ${scientist.surname} (born ${scientist.born}, died ${scientist.dead})`;
            listElement.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = "Нет ученых, у которых совпадают первые буквы имени и фамилии.";
        listElement.appendChild(listItem);
    }
}