// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Alpha: 130,
    N: 247,
    p: 1,
    Random_Seed: 30,
    //Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Alpha", 0, 255, 1)
gui.add(params, "N", 0, 1000, 1)
gui.add(params, "p", 0, 1, 0.001)
gui.add(params, "Random_Seed", 0, 100, 1)
//gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------
let x = 50;
let y = 50;

// PROJET Sirine BRADAI
function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    noStroke()

    // mouvement de la souris sur l'axe x
    if (x > 48) {
        x -= 2;
      } else if (x < 48) {
        x += 2;
      }
    x += floor(movedX / 5);

    // mouvement de la souris sur l'axe y
    if (y > 48) {
        y -= 2;
      } else if (y < 48) {
        y += 2;
      }
      y += floor(movedY / 5);

    background(254, 255, 250)

    for (let i = 0; i < params.N; i++) {
        
        fill(random([
            color(252, 52, 38,  230), //rouge
            color(65, 138, 6,  200), // vert
            color(23, 135, 206, params.Alpha), // bleu
            color(255, 240, 3, params.Alpha), // jaune
            //color(71, 10, 13, 200) // foncé
        ]))
        push()
            translate(random(width), random(height))
            if (random() < params.p)
                rotate(TAU/4)
            rect(x, 0, random(40, 100), random(10, 30), 2)
        pop()
    }


    for (let j = 0; j < params.N; j++) {
        fill(random([
            color(252, 52, 38,  230), //rouge
            color(65, 138, 6,  200), // vert
            color(23, 135, 206, params.Alpha), // bleu
            color(255, 240, 3, params.Alpha), // jaune
            //color(71, 10, 13, 200) // foncé
        ]))
        push()
            translate(random(width), random(height))
            if (random() < params.p)
                rotate(TAU/4)
            rect(y, 10, random(24, 24), random(20, 20), 2)
        pop()
    }
    
}




//HOUSE
/* function draw() {
    background('green')
    //ellipse(mouseX, mouseY, params.Ellipse_Size)
    rectMode(CENTER)
    noStroke()
    fill('red')
    rect(width/2, height -100, 500, 300)
    fill('orange')
    triangle(width/2, height/2, 4, 500, 500, 500)

} */

// MICKEY
/* function draw() {
    background('white')
    //ellipse(mouseX, mouseY, params.Ellipse_Size)
    rectMode(CENTER)
    noStroke()
    fill('red')
    ellipse(width/2, height/2.2, 270)
    ellipse(width/3.5, height/4, 150)
    ellipse(width/1.4, height/4, 150

} */


/* // COURS 2
function draw() {
    randomSeed(0)
    background('blue')
    noStroke()
    fill(255,255,255,100)
    for(let i=0; i<params.N; i++) {
        ellipse(random(width), random(height) 30)
    }
} */

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}