let creciente = 1
let decreciente = 0
let ejercicio = 5

function setup() 
{
    createCanvas(windowWidth, windowHeight)
    background(155)
}

function color_elipse (x, y, radio, c)
{
    noStroke()
    fill (c)
    ellipse(x, y, radio)
}

function contar (numero, condicion)
{
    
    if (condicion == creciente)
    {
        for (let i = 1; i < numero + 1; i++) 
        {
            text(i, 50, 50 * i)
        }
    }
    else
    {
        for (let i = 0; i < numero + 1; i++) 
        {
            text(numero + 1 - i, 50, 50 * i)
        }
    }
}

function draw_rect_coordenadas(posx, posy)
{
    rect(posx, posy, 100, 40)
    textAlign(CENTER)
    text(posx + " , " + posy, posx + 50, posy + 22)
}
function drawRectWithClick(x, y)
{
    rect(x, y, 100, 40)
    textAlign(CENTER)
    text(x + " , " + y, x + 50, y + 22)
}

function drawRect (x, y, c)
{
    noStroke()
    fill(c)
    rect(x, y, random([10], [300]), random([10], [300]))
}

function draw() 
{
    
    if (ejercicio == 1)
    {
        contar(8, decreciente)
    }
    else if (ejercicio == 2)
    {
        let posx = windowWidth/2
        let posy = windowHeight/2
        let r = windowHeight/6
        let c = color(random(255), random(255), random(255))

        color_elipse(posx, posy, r, c)
    }
    else if (ejercicio == 3)
    {
        draw_rect_coordenadas(windowWidth/2, windowHeight/2)
    }
    else if (ejercicio == 4)
    {
        if (mouseIsPressed) 
        {
            background(155)
            drawRectWithClick(mouseX, mouseY)
        }
    }
    else if (ejercicio == 5)
    {
        if (mouseIsPressed)
        {
            let c = color(random(255),random(255),random(255),random(255))
            drawRect(mouseX, mouseY, c)
        }
    }
}