export class Puissance4 {

    constructor(table, color, taille, joueurs) {
        this.table = table;
        this.color = color;
        this.taille = taille;
        this.joueurs = joueurs;

        var color1 = document.createElement("input");
        color1.setAttribute("type","color")
        color1.setAttribute("class","joueur1")
        var currentDiv = this.table;
        document.body.insertBefore(color1, currentDiv);

        var btn2 = document.createElement("input");
        btn2.setAttribute("type","submit")
        btn2.setAttribute("class","restart")
        btn2.value = "Restart"
        document.body.insertBefore(btn2, currentDiv);

        var btn3 = document.createElement("input");
        btn3.setAttribute("type","submit")
        btn3.setAttribute("class","re")
        btn3.value = "Réinitialiser"
        document.body.insertBefore(btn3, currentDiv);

        var btn4 = document.createElement("input");
        btn4.setAttribute("type","submit")
        btn4.setAttribute("class","retour")
        btn4.value = "Retour"
        document.body.insertBefore(btn4, currentDiv);


        var btn = document.createElement("input");
        btn.setAttribute("type","submit")
        btn.setAttribute("class","elbtn")
        document.body.insertBefore(btn, btn2);

        var joueur1 = document.createElement("input");
        joueur1.setAttribute("type","text")
        joueur1.placeholder='Nom du joueur 1'
        joueur1.setAttribute("class","nomjoueur1")
        document.body.insertBefore(joueur1, color1);

        var color2 = document.createElement("input");
        color2.setAttribute("type","color")
        color2.setAttribute("class","joueur2")
        document.body.insertBefore(color2, btn);

        var joueur2 = document.createElement("input");
        joueur2.setAttribute("type","text")
        joueur2.placeholder='Nom du joueur 2'
        joueur2.setAttribute("class","nomjoueur2")
        document.body.insertBefore(joueur2, color2);


        var y = document.createElement("input");
        y.setAttribute("type","number")
        y.setAttribute("class","tailley")
        y.placeholder='tailleY'
        document.body.insertBefore(y, joueur1);

        var x = document.createElement("input");
        x.setAttribute("type","number")
        x.setAttribute("class","taillex")
        x.placeholder='tailleX'
        document.body.insertBefore(x, y);

        var titre = document.createElement("p");
        titre.setAttribute("class","titre")
        titre.innerHTML = "PUISSANCE 4"
        document.body.insertBefore(titre, currentDiv);

        


        const lebtn2 = document.querySelector(".restart")
        const lebtn3 = document.querySelector(".re")
        const lebtn4 = document.querySelector(".retour")
        const lebtn = document.querySelector(".elbtn") 
        const nom1 = document.querySelector(".nomjoueur1")
        const nom2 = document.querySelector(".nomjoueur2")
        const taillex = document.querySelector(".taillex")
        const tailley = document.querySelector(".tailley")

       


        
        
        lebtn.addEventListener('click', ()=> {
            taille.taille[1] = taillex.value
            taille.taille[0]  = tailley.value
            joueurs.joueurs[0] = nom1.value
            joueurs.joueurs[1] = nom2.value
            
            tailley.style.display = "none"
            taillex.style.display = "none"
            nom2.style.display = "none"
            nom1.style.display = "none"
            lebtn.style.display = "none"
            color1.style.display = "none"
            color2.style.display = "none"
            titre.style.display = "none"
        

            
    

            const couleur1 = document.querySelector(".joueur1").value
            color.color[0] = couleur1
       
            let point1 = 0;
            let point2 = 0;
     
            const couleur2 = document.querySelector(".joueur2").value
            color.color[1] = couleur2

            btn2.style.display = "block"
            btn3.style.display = "block"
            btn4.style.display = "block"
          

       

        const tt = document.createElement("table");
        const element = this.table;
        element.appendChild(tt);

        const tb = document.createElement("tbody");
        const element2 = tt;
        element2.appendChild(tb);

        for (let index = 0; index < taille.taille[1] ; index++) {
            const tr = document.createElement("tr");
            const element2 = tb;
            element2.appendChild(tr);

             for (let index = 0; index < taille.taille[0] ; index++) {
                const td = document.createElement("td");
                const element2 = tr;
                element2.appendChild(td);
                
             }
        }

        var g1 = document.createElement("div");
            g1.setAttribute("class","gagnant1")
            if(joueurs.joueurs[0] == ""){
                g1.innerHTML = "Le joueur 1 à gagné !"
            }else{
                g1.innerHTML = "Le joueur "+joueurs.joueurs[0]+" à gagné !"
            }
            
            document.body.insertBefore(g1, currentDiv);


            var g2 = document.createElement("div");
            g2.setAttribute("class","gagnant2")
            if(joueurs.joueurs[1] == ""){
                g2.innerHTML = "Le joueur 2 à gagné !"
            }else{
                g2.innerHTML = "Le joueur "+joueurs.joueurs[1]+" à gagné !"
            }
            document.body.insertBefore(g2, currentDiv);


            var tour1 = document.createElement("div");
            tour1.setAttribute("class","tour1")
            if(joueurs.joueurs[0] == ""){
                tour1.innerHTML = "Au tour du joueur 1!"
            }else{
                tour1.innerHTML = "Au tour de "+joueurs.joueurs[0]+" !"
            }
            document.body.insertBefore(tour1, currentDiv);

            var tour2 = document.createElement("div");
            tour2.setAttribute("class","tour2")
            tour2.style.display = "none"
            if(joueurs.joueurs[1] == ""){
                tour2.innerHTML = "Au tour du joueur 2!"
            }else{
                tour2.innerHTML = "Au tour de "+joueurs.joueurs[1]+" !"
            }
            document.body.insertBefore(tour2, currentDiv);

            var eg = document.createElement("div");
            eg.setAttribute("class","ega")
            eg.style.display = "none"
            eg.innerHTML = "Une égalité !"
            document.body.insertBefore(eg, currentDiv);

            var point = document.createElement("div");
            point.setAttribute("class","point")
            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
            }else if(joueurs.joueurs[1] == ""){
                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
            }else if(joueurs.joueurs[0] == ""){
                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
            }else{
                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
            }
           
            document.body.insertBefore(point, currentDiv);


           
                
        const p4 = document.querySelectorAll("tr");

        let wy = 1;
        for (let index = 0; index < taille.taille[1]; index++) {
            let z = taille.taille[0]-1;
            let a = taille.taille[0]-1; 

            lebtn2.addEventListener("click", () =>{
                a = z;
                wy = 1;
                tour1.style.display = "block"
                tour2.style.display = "none"
            })
              
            function puissance1(){
                if(wy == 1){
                    if(color.color[0] == color.color[1]){
                        color.color[0] = "red";
                        color.color[1] = 'yellow';
                    }
                        let tr = p4[index].children[a]
                        const td = document.createElement("div");
                        td.setAttribute("class", "user1")
                        td.style.backgroundColor = color.color[0];  
                        tr.appendChild(td);
                        etat_du_jeux[a][index] = 1;
                        tour1.style.display = "none"
                        tour2.style.display = "block"
                        Vertical()
                        Horizontal()
                        Diago()
                        egalité()
                        a--
                        wy--
                        lebtn2.addEventListener("click", () =>{
                            td.remove()
                        })
                        lebtn4.addEventListener("click", () =>{
                            td.remove()
                            a++
                            wy=1
                            console.log(a)
                            console.log(wy)
                        })
                        
                }else if(wy ==0){
                        let tr = p4[index].children[a]
                        const td = document.createElement("div");
                        td.setAttribute("class", "user2")
                        td.style.backgroundColor = color.color[1];  
                        tr.appendChild(td);
                        etat_du_jeux[a][index] = 2;
                        tour2.style.display = "none"
                        tour1.style.display = "block"
                        Vertical()
                        Horizontal()
                        Diago()
                        egalité()
                        a--
                        wy++
                        lebtn2.addEventListener("click", () =>{
                            td.remove()
                        })
                        lebtn4.addEventListener("click", () =>{
                            td.remove()
                            a++
                            wy=0
                            console.log(a)
                            console.log(wy)
                        })
                         
                }
            }

            p4[index].addEventListener("click", puissance1)
        }


        const etat_du_jeux = [];

        for(var i = 0 ; i < taille.taille[0] ; i++){
           etat_du_jeux[i] = [];
            }
            for(var i = 0 ; i < taille.taille[0] ; i++){
                for(var j =0 ; j < taille.taille[1]; j++){
                    etat_du_jeux[i][j]=0;
                }
            }

            lebtn2.addEventListener("click", () =>{
                for(var i = 0 ; i < taille.taille[0] ; i++){
                    etat_du_jeux[i] = [];
                     }
                     for(var i = 0 ; i < taille.taille[0] ; i++){
                         for(var j =0 ; j < taille.taille[1]; j++){
                             etat_du_jeux[i][j]=0;
                         }
                     }
                     g1.style.display = "none"
                     g2.style.display = "none"
                     eg.style.display = "none"
                     element.style.display = "block"
            })

            lebtn3.addEventListener("click", () =>{
                location.href = "http://127.0.0.1:5500/index.html";
            })
    
            

        function Vertical(){

            for (let i = 0; i < taille.taille[0]; i++) {
                for(var j =0 ; j < taille.taille[1]; j++){
                    if(i >= 3){
                        if(etat_du_jeux[i][j] === 1 && etat_du_jeux[i-1][j] === 1 && etat_du_jeux[i-2][j] === 1 && etat_du_jeux[i-3][j] === 1){
                            g1.style.display = "block"
                            tour2.style.display = "none"
                        tour1.style.display = "none"
                        point1++
                        if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                            point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                        }else if(joueurs.joueurs[1] == ""){
                            point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                        }else if(joueurs.joueurs[0] == ""){
                            point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                        }else{
                            point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                        }
                        let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }
                        if(etat_du_jeux[i][j] === 2 && etat_du_jeux[i-1][j] === 2 && etat_du_jeux[i-2][j] === 2 && etat_du_jeux[i-3][j] === 2){
                            g2.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point2++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }
                    }
                }
                
            }
       
        }




        function Horizontal(){

            for (let i = 0; i < taille.taille[0]; i++) {
                for(var j =0 ; j < taille.taille[1]; j++){
                    if(j == j){
                        if(etat_du_jeux[i][j] === 1 && etat_du_jeux[i][j-1] === 1 && etat_du_jeux[i][j-2] === 1 && etat_du_jeux[i][j-3] === 1){
                            g1.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point1++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }
                        if(etat_du_jeux[i][j] === 2 && etat_du_jeux[i][j-1] === 2 && etat_du_jeux[i][j-2] === 2 && etat_du_jeux[i][j-3] === 2){
                            g2.style.display = "block"
                            tour2.style.display = "none"
                        tour1.style.display = "none"
                        point2++
                        if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                            point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                        }else if(joueurs.joueurs[1] == ""){
                            point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                        }else if(joueurs.joueurs[0] == ""){
                            point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                        }else{
                            point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                        }
                        let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }
                    }
                }
                
            }
       
        }


        function Diago(){

            for (let i = 0; i < taille.taille[0]; i++) {
                for(var j =0 ; j < taille.taille[1]; j++){
                    if(i >= 3){
                        if(etat_du_jeux[i][j] === 1 && etat_du_jeux[i-1][j-1] === 1 && etat_du_jeux[i-2][j-2] === 1 && etat_du_jeux[i-3][j-3] === 1){
                            g1.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point1++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                            
                        }else if(etat_du_jeux[i][j] === 1 && etat_du_jeux[i-1][j+1] === 1 && etat_du_jeux[i-2][j+2] === 1 && etat_du_jeux[i-3][j+3] === 1){
                            g1.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point1++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }

                        if(etat_du_jeux[i][j] === 2 && etat_du_jeux[i-1][j-1] === 2 && etat_du_jeux[i-2][j-2] === 2 && etat_du_jeux[i-3][j-3] === 2){
                            g2.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point2++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }else if(etat_du_jeux[i][j] === 2 && etat_du_jeux[i-1][j+1] === 2 && etat_du_jeux[i-2][j+2] === 2 && etat_du_jeux[i-3][j+3] === 2){
                            g2.style.display = "block"
                            tour2.style.display = "none"
                            tour1.style.display = "none"
                            point2++
                            if(joueurs.joueurs[1] == "" && joueurs.joueurs[0] == ""){
                                point.innerHTML =  "Joueur 1 "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[1] == ""){
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : Joueur 2 "+point2
                            }else if(joueurs.joueurs[0] == ""){
                                point.innerHTML = "Joueur 1 "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }else{
                                point.innerHTML = joueurs.joueurs[0]+" "+point1+" : "+joueurs.joueurs[1]+" "+point2
                            }
                            let audio = new Audio("music.mp3");
                            audio.play();
                            element.style.display = "none"
                        }
                    }
                    
                }
                
            }
       
        }

        function egalité(){
        
            let egau = 0;
            etat_du_jeux.forEach(elements => {
                const isBelowThreshold = (currentValue) => currentValue != 0;
                if(elements.every(isBelowThreshold)==true){
                    egau++
                    if(egau == taille.taille[0]){
                        eg.style.display = "block"
                        tour2.style.display = "none"
                        tour1.style.display = "none"
                        element.style.display = "none"
                    }
                }
            });

            
       
        }

    })

        }


    
        
}
