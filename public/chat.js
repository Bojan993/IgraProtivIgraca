//DOM za geografiju
localStorage.setItem('username', 'bojankitanovic')
let fut2 = document.getElementById('fut2');
fut2.innerHTML += `<p>Logovan korisnik: <snap style='color: blue; font-weight: bold;'>${window.localStorage.getItem('username')} </snap></p>`;
let buttonStart = document.getElementById('button_start');
let svaSlova = ['A', 'B', 'C', 'Č' ,'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];
let slovo ;
let slovce = document.getElementById('slovo');
let inputi = document.querySelectorAll('input');
let buttGame = document.getElementById('game');
let komp = document.getElementById('komp');
let newGame = document.getElementById('novaIgra');
let unos = document.getElementById('unos');
let vt = document.getElementById('visual-timer');
let rez = document.getElementById('rezultati');

let slovoIgra;
// let permissiono = 0;
let p = [];
let k=[];
let b = [1,1,1,1,1,1,1];
let p2 = [];
let c = [];
let ap = [1,1,1,1,1,1,1];
let bp = [1,1,1,1,1,1,1];


for (let i=0; i<7; i++){
    k.push(inputi[i].id);
}

buttonStart.addEventListener('click',()=>{
    var myItem = localStorage.getItem('username');
    localStorage.clear();
    localStorage.setItem('username',myItem);
    let slovo =  Math.floor(Math.random() * svaSlova.length);
    slovoIgra = svaSlova[slovo];
    window.localStorage.setItem(`slovcee`, slovoIgra);
    slovce.innerHTML = `Dobili ste slovo <snap style='color: red; font-weight: bold; font-size: 35px'>${slovoIgra}</snap>`;
    window.localStorage.setItem('imasdozvolu', 1);
    buttGame.classList.remove('nema');
});



        let play = (a,b,ap,bp) => {
    

            
            
            // Ovo c ce da bude niz iz baze za pojmove u nekoj kategoriji ******
            // c.includes(a[i]) == false treba da bude true , trenutno je false zbog testa *****
            
           
                rez.innerHTML += ` <table id="r">
            <tr>
                <th>#</th>
                <th>Kategorija</th>
                <th>'bla'</th>
                <th>Rezultat</th>
                <th>Kompjuter</th>
            </tr>
            </table>`
            
            let r = document.getElementById('r');
            
            for (let i=0; i<7; i++){
                if (i<7){
            r.innerHTML += `<tr>
                <td>${1}</td>
                <td>${k[i]}</td>
                <td>${a[i]}</td>
                <td>${ap[i]}:${bp[i]}</td>
                <td>${b[i]}</td>            
            </tr>`
                    }
                    else {
                        let izbroji = (niz) => {
                            let br = 0;
                            for (let i=0; i<7; i++){
                                if (niz[i] !== ''){
                                    br++;
                                }
                            }
                            return br;
                        }
            
                        let saberi = (niz) =>{
                            sum = 0;
                            for (let i=0; i<niz.length; i++){
                                sum = sum+niz[i];
                            }
                            return sum;
                        }
            
                        r.innerHTML += `<tr>
                                            <td>8</td>
                                            <td></td>
                                            <td>${izbroji(a)}</td>
                                            <td>${saberi(ap)}:${saberi(bp)}</td>
                                            <td>${izbroji(b)}</td>            
                                        </tr>`
                    }
                }   
            }
            
            
            
            
            
            
            
            // Funkcija saberi
            
                let saberi = (niz) =>{
                    sum = 0;
                    for (let i=0; i<niz.length; i++){
                        sum = sum+niz[i];
                    }
                    
                    return sum;
                }
            
            
                console.log(saberi(ap),saberi(bp));
            
            // Funkcija pobednik
            
                let pobednik = (x, y) => {
                     saberi(ap);
                    saberi(bp);
                    if (x == y){
                        alert('Nereseno');
                    }
                    else if (x > y){
                        alert('Korisnik1 je pobedio');
                    }
                    else {
                        alert('Kompjuter2 je pobedio');
            
                    }
                }
                unos.classList.remove('nema');
                newGame.classList.remove('nema');
            
            // Funkcija izbroji odgobore - Dodata cisto ako zatreba, trenutno se ne koristi
            
            newGame.addEventListener('click',()=>{
                window.localStorage.setItem('imasdozvolu', 0);
                location.reload();
                localStorage.setItem('dajmi', 0);
                pobednik(saberi(ap),saberi(bp));
                
            
            });
            
            unos.addEventListener('click',()=>{
                
                location.reload();
                location.reload();
                localStorage.setItem('dajmi', 1);
                
            });
                        
                if (localStorage.getItem('dajmi') == 1){
                    rezultati.classList.remove('nema');
                }
            
            
            

//Make connection
var socket = io.connect('http://localhost:4000');

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Emit events 

let daj = [];
btn.addEventListener('click', function(){
    socket.emit('chat', {
        s1: inputi[1].value,
        s2: inputi[2].value,
        s3: inputi[3].value,
        s4: inputi[4].value,
        s5: inputi[5].value,
        s6: inputi[6].value,
        s7: inputi[7].value,
        s8: inputi[0].value
    })
    let inp = document.querySelectorAll('input');
    let lab = document.querySelectorAll('label');
    
    for (let i=0; i<8; i++){
        lab[i].classList.add('nema');
        inp[i].classList.add('nema');
    }

    

    btn.classList.add('nema');
});

let generisi = (a, b, ap, bp) => {
    for (let i=0; i<7; i++){
        if (a[i] == '' && b[i] !== '' ){
           ap[i]=0;
           bp[i]=15;
            }
            else if (a[i] !== '' && b[i] == '' ){
                bp[i]=0;
                if (c[i].includes(a[i]) == true){
                    ap[i] = 15;
                }
                else{
                    // 
                    ap[i] = 0;
                }
    
                 }
            else if (a[i] !== '' && b[i] !== '' ){
                    if (a[i] == b[i]){
                       ap[i] = 5;
                       bp[i] = 5;}
                    else {
                        bp[i] = 10;
                        if (c[i].includes(a[i]) == true){
                            ap[i] = 10;
    
                    }
                        else {
                            ap[i] = 0;
                        }
                    }
                   
                     }
            else {
                ap[i] = 0;
                bp[i] = 0;
            }
    
    
        }
        console.log(ap,bp);

}


let nizA = [];
    let nizB = [];
//Listen for events
socket.on('chat', function(data){
    output.innerHTML += `Username: <strong>${data.s8}</strong><br>${data.s1},${data.s2},${data.s3},${data.s4},${data.s5},${data.s6},${data.s7}<br>`;
    
    if(daj.length < 10){
        daj.push(data.s1,data.s2,data.s3,data.s4,data.s5,data.s6,data.s7);
    }
    
    
    
    
    if(daj.length == 14){
        for (let i=0; i<7; i++){
            nizA.push(daj[i]);
        }
    

        for (let i=7; i<14; i++){
            nizB.push(daj[i]);
        }
    }
   
    generisi(nizA,nizB,ap,bp);
});
console.log(daj);


console.log(nizA);
console.log(nizB);


