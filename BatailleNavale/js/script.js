
const userGrid = document.querySelector('.grid-user');
	const computerGrid = document.querySelector('.grid-computer');
	const displayGrid = document.querySelector('.grid-display');
	const ships = document.querySelectorAll('.ship');
	const destroyer = document.querySelector('.destroyer-container');
	const submarine = document.querySelector('.submarine-container');
	const cruiser = document.querySelector('.cruiser-container');
	const battelship = document.querySelector('.battelship-container');
	const carrier = document.querySelector('.carrier-container');
    const StartButton = document.querySelector('#start');
    const Rejouer = document.querySelector('#Rejouer');

    
	const rotateButton = document.querySelector('#rotate');
	let turnDisplay = document.querySelector('#whoseTurn');
	const infoDisplay = document.querySelector('#info');
	const userSquares = [];
	const computerSquares = [];
	let isHorizontal = true;
	const width = 10;
    let startGame = false;
    let endGame=false;
    let yourTurn = false;
    let gotYou= false;
    hitAgain=true;
    
    let verticalySearch=false;
    let hitedShip=[];
    let hited=[]
    let hitVertical=2;
    let hitVerticaly=false;
    
    var destroyerLife=2;
    var submarineLife=3;
    var battelshipLife=4;
    var cruiserLife= 3;
    var carrierLife=5;
    Rejouer.addEventListener("click",()=>{
        var r = confirm("Vous étes sur");
        if (r==true) {
            location.reload(); 
            
        }
      
    })
	StartButton.addEventListener("click",()=>{
        if (displayGrid.childElementCount==0) {

            startGame=true;
           yourTurn = true;
           turnDisplay.innerHTML ="<h5> Your Turn </h5>";
           turnDisplay.style.color='blue';
        }

    })
	function createBoardUser(grid, squares){
		for(let i =0; i < width*width; i++){
			const square = document.createElement('div');
            square.dataset.id = i;
            square.id=i;
			square.classList.add("user-grid")
			grid.appendChild(square);
			squares.push(square)


		}
	}
	createBoardUser(userGrid, userSquares);
    createBoardOrdinateur(computerGrid, computerSquares)
    
    
//Computer shots 
function hitShip() {
    
    
   let hitedShipFirstId = parseInt(hited[hited.length-1]);

   let hitedShipIdStrH=hitedShip[hitedShip.length-1];
  
   let str = hitedShipIdStrH;
  
   let outsideTheBoxH =parseInt(str);


 
   let outsideTheBoxV =parseInt(hitedShipIdStrH) ;


   
    // const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,12,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
    // const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
    
//      if (outsideTheBoxH==9||19||29||39||49||59||69||79||89||99) {
        
//         hitAgain=false;
//          hitedShip.reverse();
// console.log('hi')
        
        
//     }else if (outsideTheBoxH==0||10||20||30||40||50||60||70||80||90) {
//         hitAgain=false;
//         hitVerticaly=true;  
//         console.log('his')
        
//      }
     //   else if (outsideTheBoxV===90||91||92||93||94||95||96||97||98||99) {
         //      verticalySearch=true;
         //      console.log('his')  
        
//         //     }
    
        if (hitAgain==true && !hitVerticaly ) {
            //if hits again
            let hitedShipId=parseInt(hitedShip[hitedShip.length-1])+1;
            var ChosenDiv = document.getElementById(hitedShipId);
        }else if (!hitAgain && !hitVerticaly) {
        //if it missed 
        let hitedShipId=parseInt(hitedShip[hitedShip.length-1])-1;
        var ChosenDiv = document.getElementById(hitedShipId);
        
        if (!ChosenDiv.classList.contains('user-grid')) {
          
                hitVerticaly=true;   
        }
        
    }else if (!hitAgain && hitVerticaly==true && !verticalySearch) {
        //if it missed 
        
        let hitedShipId=parseInt(hitedShipFirstId)+10;
        let hitAgainVerticaly = hitedShipFirstId+10;
        hited.push(hitAgainVerticaly);

        var ChosenDiv = document.getElementById(hitedShipId);

        if (!ChosenDiv.classList.contains('user-grid')) {
        
            verticalySearch=true; 
            
         
        }
       }else if (!hitAgain && hitVerticaly==true&& verticalySearch==true) {
        //if it missed 
        hited.reverse()
        let hitAgainVerticalySearch = hitedShipFirstId-10;
        let hitedShipId=parseInt(hitedShipFirstId)-10;
        hited.push(hitAgainVerticalySearch)
     
        var ChosenDiv = document.getElementById(hitedShipId)
        
    }
        mv = ChosenDiv.getAttribute("class")
        // let hits = ChosenDiv.getAttribute('data-id')
        // hited.push(hits)
        
        //if Pc hits 
        if (ChosenDiv.classList.contains('user-grid')&& !ChosenDiv.classList.contains('pc')) {
           
   if (mv ==="user-grid taken submarine" || mv ==="user-grid taken carrier" || mv ==="user-grid taken destroyer" || mv ==="user-grid taken battelship" || mv ==="user-grid taken cruiser") {
                ChosenDiv.classList.remove("user-grid");
                ChosenDiv.classList.add("pc");
                let hit = ChosenDiv.getAttribute('data-id');
                hitedShip.push(hit);
                if (verticalySearch==true) {
                hitAgain=false;
                }
                gotYou =true
                var c = parseFloat(document.getElementById("nombr").value);
                t = c-1;
                document.getElementById("nombr").value = t
                yourTurn = true;
                if(t ===0){
                    window.alert("Vous avez perdu")
                    endGame=true
                }
            }else {
            //if pc misses
            ChosenDiv.classList.remove("user-grid");
            ChosenDiv.classList.add("pc1");
            yourTurn = true;
            let hit = ChosenDiv.getAttribute('data-id')
            hitedShip.push(hit)
            hitAgain=false;
            hitedShip.reverse();
            
            vertical= hitVertical -1;
            hitVertical=vertical
          
            if (hitVertical===0) {
                hitVerticaly=true;
              
            }
            if (hitVertical===-1) {
                verticalySearch=true; 
            }   
            } 
            //if life of tha boat ended 
             if (ChosenDiv.classList.contains('submarine')) {
            sub= submarineLife -1;   
            submarineLife=sub
            //get delfaut values 
            if (submarineLife===0) {
            hitedShip.reverse();
            hitedShip= [];
            hited=[];
            hitVertical=2;
            hitAgain=true;
            gotYou=false;
            hitVerticaly=false;
            verticalySearch=false;
            }                
            }else if(ChosenDiv.classList.contains('carrier')) {
            carr= carrierLife -1;                
            carrierLife=carr;
            //get delfaut values 
            if (carrierLife===0) {
            hitedShip.reverse();
            hitedShip= [];
            hited=[];
            hitVertical=2;
            hitAgain=true;
            hitVerticaly=false;
            verticalySearch=false;
            gotYou=false;                    
            }    
            }else if(ChosenDiv.classList.contains('destroyer')) {
            des= destroyerLife -1;
            destroyerLife=des;
            //get delfaut values 
            if (destroyerLife===0) {
            hitedShip.reverse();
            hitedShip= [];
            hited=[];
            hitAgain=true;
            hitVertical=2;
            hitVerticaly=false;
            verticalySearch=false;
            gotYou=false;                    
            }                
            }else if(ChosenDiv.classList.contains('battelship')) {
            bat= battelshipLife -1;
            battelshipLife=bat;
            //get delfaut values 
            if (battelshipLife===0) {
            hitedShip.reverse();
            hitedShip= [];
            hited=[];
            hitVerticaly=false;
            hitVertical=2;
            verticalySearch=false;
            hitAgain=true;
            gotYou=false;                    
            }
                
            }else if(ChosenDiv.classList.contains('cruiser')) {
            cru= cruiserLife -1;
            cruiserLife=cru;
            //get delfaut values 
            if (cruiserLife===0) {
            hitedShip.reverse();
            hitedShip= [];
            hited=[];
            hitVerticaly=false;
            hitVertical=2;
            verticalySearch=false;
            hitAgain=true;
            gotYou=false;                    
            }
        }
        }else{
        //if has the pc1 grid
        let hit = ChosenDiv.getAttribute('data-id')        
        hitedShip.push(hit)
        hitAgain=false;
        hitedShip.reverse();
        hitShip()    
        }
        turnDisplay.innerHTML ="<h5> Your Turn </h5>";
        turnDisplay.style.color='blue';
            
}



//random HIT 


// Random Hit 

function RandomDiv() {
    var number = document.getElementsByClassName("user-grid")

    var ChosenDiv = number[Math.floor(Math.random() * number.length)];
    mv = ChosenDiv.getAttribute("class")
   
    if (ChosenDiv.classList.contains('submarine')) {
        sub = submarineLife -1;
       
        submarineLife=sub
       
        
    }else if(ChosenDiv.classList.contains('carrier')) {
        carr= carrierLife -1;
        
        carrierLife=carr;
        
    }else if(ChosenDiv.classList.contains('destroyer')) {
        des= destroyerLife -1;
        destroyerLife=des;
        
    }else if(ChosenDiv.classList.contains('battelship')) {
        bat= battelshipLife -1;
        battelshipLife=bat;
        
    }else if(ChosenDiv.classList.contains('cruiser')) {
        cru= cruiserLife -1;
        cruiserLife=cru;

        
    }
   

    //if Pc hits 
    if (mv ==="user-grid taken submarine" || mv ==="user-grid taken carrier" || mv ==="user-grid taken destroyer" || mv ==="user-grid taken battelship" || mv ==="user-grid taken cruiser") {
        ChosenDiv.classList.remove("user-grid");
        ChosenDiv.classList.add("pc");
        let hit = ChosenDiv.getAttribute('data-id')
        hitedShip.push(hit)
     
        let hits = ChosenDiv.getAttribute('data-id')
     
        hited.push(hits)
       
        gotYou =true
    	var c = parseFloat(document.getElementById("nombr").value);
        t = c-1;
        document.getElementById("nombr").value = t
        yourTurn = true;
        hitAgain=true;
        if(t ===0){
            window.alert("Vous avez perdu")
        }
	}else{
        //if pc misses
        ChosenDiv.classList.remove("user-grid");
        ChosenDiv.classList.add("pc1");
        yourTurn = true;
    }
    turnDisplay.innerHTML ="<h5> Your Turn </h5>";
    turnDisplay.style.color='blue';
   
}

//create ordinateur board and add click event .

		function createBoardOrdinateur(grid, squares){
		for(let i =0; i < width*width; i++){
            
			const square = document.createElement('div');
			square.setAttribute("class", "shipsy")
			square.dataset.id = i;
			grid.appendChild(square);
			squares.push(square)
			document.getElementById("score").value = "0";
			document.getElementById("nombrEnmie").value = "17"; 
			document.getElementById("nombr").value = "17";  
			square.onclick = function(event){
				if (startGame==true && endGame==false) {
                    if (yourTurn==true) {
                        
                        //if i hit
                        var ts = event.target;
                        var mv =ts.getAttribute("class"); 
                        if(mv ==="shipsy taken submarine" || mv ==="shipsy taken carrier" || mv ==="shipsy taken destroyer" || mv ==="shipsy taken battelship" || mv ==="shipsy taken cruiser")    
                        {
                            ts.style.backgroundSize= "cover";
                            ts.style.backgroundImage= "url('./img/tenor.gif')";
                            ts.setAttribute("class", "clicked");
                            var x = parseFloat(document.getElementById("score").value);
                            var n = x+10;
                            document.getElementById("score").value = n
                            var m = parseFloat(document.getElementById("nombrEnmie").value);
                            s = m-1;
                            document.getElementById("nombrEnmie").value = s
                            if(s ===0){
                                window.alert("Vous avez Gagné");
                                endGame=true;
                            }
	   	setTimeout(function(){         
               ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/fire.gif')"; }, 4000);
        yourTurn = false;
       
    }
    //if i miss 
    else{
        ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/giphy.gif')";
        ts.setAttribute("class", "clicked");
        var x = parseFloat(document.getElementById("score").value);
        var n = x-1;
        document.getElementById("score").value = n
        setTimeout(function(){         
            ts.style.backgroundSize= "cover";
            ts.style.backgroundImage= "url('./img/sea.jpg')"; }, 3000);
            yourTurn = false;
            
        }
        turnDisplay.innerHTML ="<h5> Enemy's Turn </h5>";
        turnDisplay.style.color='red';
        if (gotYou==false) {
            
            setTimeout(function(){ RandomDiv() }, 10);
        }else{
            setTimeout(function(){ hitShip() }, 10);

        }
    }
        
    }
}

		}
	}
	//Ships

const shipArray=[
    {
        name:'destroyer',
        directions:[
        [0,1],
        [0,width]
    ]

    },
    {
        name:'submarine',
        directions:[
        [0,1,2],
        [0,width,width*2]
    ]

    },
    {
        name:'cruiser',
        directions:[
        [0,1,2],
        [0,width,width*2]
    ]

    },
    {
        name:'battelship',
        directions:[
        [0,1,2,3],
        [0,width,width*2,width*3]
    ]

    },
    {
        name:'carrier',
        directions:[
        [0,1,2,3,4],
        [0,width,width*2,width*3,width*4]
    ]

    },
]
function generate(ship) {
    let randomDirection = Math.floor(Math.random() * ship.directions.length)
    let current = ship.directions[randomDirection]
  
    if (randomDirection === 0) direction = 1
    if (randomDirection === 1) direction = 10
    let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

    const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
    const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
    const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)

    if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))

    else generate(ship)
  }
generate(shipArray[0])
generate(shipArray[1])
generate(shipArray[2])
generate(shipArray[3])
generate(shipArray[4])
function rotate(){
    if(isHorizontal){
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battelship.classList.toggle('battelship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = false
        return
            }
        if(!isHorizontal){
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battelship.classList.toggle('battelship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = true
        return
          		}
           }
       	rotateButton.addEventListener('click', rotate)

       	ships.forEach(ship =>ship.addEventListener('dragstart', dragStart))
       	userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
       	userSquares.forEach(square => square.addEventListener('dragover', dragOver))
       	userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
      
       	userSquares.forEach(square => square.addEventListener('drop', dragDrop))
       	userSquares.forEach(square => square.addEventListener('dragend', dragEnd))
       	let selectedShipNameWithIndex ;
       	let draggedShip =this;
       	let draggedShipLength;
       	ships.forEach(ship => ship.addEventListener('mousedown', (e) =>{
       		selectedShipNameWithIndex = e.target.id;
       		console.log(selectedShipNameWithIndex);
       	}))
       	function dragStart() {
       		draggedShip = this;
       		draggedShipLength = this.length;
       		console.log(draggedShip);
       	}
       	function dragOver(e){
       		e.preventDefault()
       	}
       	function dragEnter(e){
       		e.preventDefault()
       	}
      
       	function dragDrop(){
let shipNameWithLastId = draggedShip.lastElementChild.id
let shipClass = shipNameWithLastId.slice(0, -2)
console.log(shipClass)
let lastShipIndex = parseFloat(shipNameWithLastId.substr(-1))
let shipLastId = lastShipIndex + parseFloat(this.dataset.id)
console.log(shipLastId)


const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,12,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
let newNotAllowedHorizontal = notAllowedHorizontal.slice(0, 10*lastShipIndex)
let newNotAllowedVertical = notAllowedVertical.slice(0, 10*lastShipIndex)
selectedShipIndex = parseFloat(selectedShipNameWithIndex.substr(-1))
shipLastId =shipLastId-selectedShipIndex




if(isHorizontal  && !newNotAllowedHorizontal.includes(shipLastId)){
    let draggedShipLength = draggedShip.getElementsByTagName("div").length
	console.log(draggedShipLength)
    for(let i=0; i< draggedShipLength; i++){
        userSquares[parseFloat(this.dataset.id)-selectedShipIndex + i].classList.add('taken', shipClass)
        
        
        
        
        notAllowedHorizontal.push(parseInt(this.dataset.id))
        console.log("dragDrop -> notAllowedHorizontal", notAllowedHorizontal)
     
        
       
       
        
    }
}else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)){
let draggedShipLength = draggedShip.getElementsByTagName("div").length
for(let i=0; i< draggedShipLength; i++)
{
    userSquares[parseFloat(this.dataset.id)-selectedShipIndex + width*i].classList.add('taken', shipClass)
 
}
}else return
displayGrid.removeChild(draggedShip)
}
       	function dragEnd(){

       	}
