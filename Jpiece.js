
function clearRStateJ0 () {

ctx.clearRect(pAX,pAY,48,48)
array[pointAY/50][pointAX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 0

}
function fillRStateJ0 () {
ctx.fillRect(pAX,pAY,48,48)
array[pointAY/50][pointAX/50] = 7

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 7


ctx.fillRect (pDX,pDY, 48,48)
array[pointDY/50][pointDX/50] = 7

ctx.fillRect (pFX,pFY,48,48)
array[pointFY/50][pointFX/50] = 7
}


function fillRStateJ1 () {
ctx.fillRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 7

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 7


ctx.fillRect (pCX,pCY, 48,48)
array[pointCY/50][pointCX/50] = 7

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 7

}

function clearRStateJ1 () 
{
ctx.clearRect(pBX,pBY,48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pCX,pCY, 48,48)
array[pointCY/50][pointCX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0

}

function fillRStateJ2 () {
ctx.fillRect(pDX,pDY,48,48)
array[pointDY/50][pointDX/50] = 7

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 7

ctx.fillRect (pFX,pFY, 48,48)
array[pointFY/50][pointFX/50] = 7

ctx.fillRect (pIX,pIY,48,48)
array[pointIY/50][pointIX/50] = 7
}

function clearRStateJ2 () {
ctx.clearRect(pDX,pDY,48,48)
array[pointDY/50][pointDX/50] = 0

ctx.clearRect(pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect(pFX,pFY, 48,48)
array[pointFY/50][pointFX/50] = 0

ctx.clearRect(pIX,pIY,48,48)
array[pointIY/50][pointIX/50] = 0
}



function fillRStateJ3 () 
{

ctx.fillRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 7

ctx.fillRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 7

ctx.fillRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 7

ctx.fillRect(pGX,pGY,48,48)
array[pointGY/50][pointGX/50] = 7
}
function clearRStateJ3 () {

ctx.clearRect (pBX,pBY, 48,48)
array[pointBY/50][pointBX/50] = 0

ctx.clearRect (pEX,pEY,48,48)
array[pointEY/50][pointEX/50] = 0

ctx.clearRect (pHX,pHY,48,48)
array[pointHY/50][pointHX/50] = 0

ctx.clearRect(pGX,pGY,48,48)
array[pointGY/50][pointGX/50] = 0


}

function moveDownJ() {
j()
}
function moveLeftJ () { if (rotationState === 0 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)-1] === 0 && array[(pointDY/50)][(pointDX/50)-1] === 0 )
//Left movement , rotationstate 0
{
clearRStateJ0 ()
minusX (50)
fillRStateJ0 ()
}
//Left movement , rotationstate 1

else if (rotationState === 1 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)] === 0  && array[(pointGY/50)][(pointGX/50)] === 0  )

{
clearRStateJ1 ()
minusX (50)
fillRStateJ1 ()
}

//Left movement , rotationstate 2

else if (rotationState === 2 && counter < array.length-1 && array[(pointDY/50)][(pointDX/50)-1] === 0 && array[(pointHY/50)][(pointHX/50)] === 0  )

{
clearRStateJ2()
minusX (50)
fillRStateJ2()
}

//Left movement , rotationstate 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointAY/50)][(pointAX/50)] === 0 && array[(pointDY/50)][(pointDX/50)] === 0 && array[(pointGY/50)][(pointGX/50)-1] === 0  )

{
clearRStateJ3 ()
minusX (50)
fillRStateJ3 ()
}
else {}}


function moveRightJ () { if (rotationState === 0 &&counter < array.length-1 && array[(pointBY/50)][(pointBX/50)] === 0 && array[(pointFY/50)][(pointFX/50)+1] === 0 )
//Right movement , rotation state 0
{
clearRStateJ0 ()
plusX(50)
fillRStateJ0 ()
}

//Right movement , rotation state 1
else if (rotationState === 1 && array[pointCY/50][(pointCX/50)+1]=== 0 && array[pointFY/50][pointFX/50]=== 0 && array[pointIY/50][(pointIX/50)]=== 0 )
{
clearRStateJ1 ()
plusX(50)
fillRStateJ1()
}

//Right movement , rotation state 2
else if (rotationState === 2  && array[(pointFY/50)][(pointFX/50)+1] === 0 && array[(pointIY/50)][(pointIX/50)+1] === 0)
{console.log("ss")
clearRStateJ2 ()
plusX(50)
fillRStateJ2 ()
}

//Right movement, rotation state 3
else if (rotationState === 3 && counter < array.length-1 && array[(pointCY/50)][(pointCX/50)] === 0 && array[(pointFY/50)][(pointFX/50)] === 0 && array[(pointIY/50)][(pointIX/50)] === 0)
{
clearRStateJ3()
plusX(50)
fillRStateJ3()
}
  else {}}


function moveUpJ () {
//Rotationstate 0 to 1 
if (rotationState === 0 && array[pointBY/50][pointBX/50]=== 0 && array[pointHY/50][pointHX/50]=== 0 && array[pointCY/50][pointCX/50]=== 0)
{
clearRStateJ0()
fillRStateJ1()
rotationState =1
}

//Rotationstate 0 to 1 , WallKick 
else if (rotationState === 0 && array[pointBY/50][pointBX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 && array[(pointCY/50)-1][pointCX/50] === 0)
{
clearRStateJ0()
minusY(50)
fillRStateJ1()
rotationState =1
}


//Rotationstate 1 to 2
else if (rotationState===1 && array[pointDY/50][pointDX/50] === 0 &&  array[pointIY/50][pointIX/50] === 0 && array[pointFY/50][(pointFX/50)] === 0)
{
clearRStateJ1()
fillRStateJ2()
rotationState = 2
}

//Rotationstate 1 to 2 , WallKick
else if (rotationState===1 &&  array[pointFY/50][(pointFX/50)] === 0 && array[pointFY/50][(pointFX/50)+1] === 0 && array[pointIY/50][(pointIX/50)+1] === 0 )
{
clearRStateJ1()
plusX(50)
fillRStateJ2()
rotationState = 2
}

//Rotationstate 2 to 3 
else if (rotationState === 2 && array[pointBY/50][(pointBX/50)] === 0 && array[pointHY/50][pointHX/50]=== 0 && array[pointGY/50][(pointGX/50)] === 0)
{
clearRStateJ2()
fillRStateJ3()
rotationState = 3
}
//Rotationstate 3 to 0
else if (rotationState === 3 && array[pointAY/50][(pointAX/50)] === 0 && array[pointDY/50][pointDX/50]=== 0 && array[pointFY/50][(pointFX/50)] === 0)


{
clearRStateJ3()
fillRStateJ0()
rotationState = 0
}

//Rotationstate 3 to 0 Wallkick
else if (rotationState === 3 && array[pointAY/50][(pointAX/50)-1] === 0 && array[pointDY/50][(pointDX/50)-1] === 0 && array[pointDY/50][pointDX/50]=== 0)
{
clearRStateJ3()
minusX(50)
fillRStateJ0()
rotationState = 0
}
}


function moveZJ (){
//Rotationstate 0 to 3 
if ( rotationState===0 && array[pointBY/50][pointBX/50] === 0 &&  array[pointHY/50][pointHX/50] === 0 &&array[pointGY/50][pointGX/50]=== 0 )
{
clearRStateJ0()
fillRStateJ3()
rotationState = 3
}

//Rotationstate 0 to 3 , WallKick 
else if (rotationState === 0 && array[pointBY/50][pointBX/50] === 0 && array[(pointBY/50)-1][pointBX/50] === 0 )
{
clearRStateJ0()
minusY(50)
fillRStateJ3()
rotationState =3
}

//Rotationstate 3 to 2
else if (rotationState===3 && array[pointDY/50][pointDX/50] === 0 &&  array[pointIY/50][pointIX/50] === 0 && array[pointFY/50][(pointFX/50)] === 0)
{
clearRStateJ3()
fillRStateJ2()
rotationState = 2
}
//Rotationstate 3 to 2 Wallkick
else if (rotationState===3 && array[pointDY/50][pointDX/50] === 0  && array[pointDY/50][(pointDX/50)-1] === 0)
{
clearRStateJ3()
minusX(50)
fillRStateJ2()
rotationState = 2
}

//Rotationstate 2 to 1 
else if (rotationState === 2 && array[pointBY/50][pointBX/50]=== 0 && array[pointHY/50][pointHX/50]=== 0 && array[pointCY/50][pointCX/50]=== 0)
{
clearRStateJ2()
fillRStateJ1()
rotationState =1
}
//Rotationstate 1 to 0
else if (rotationState === 1 && array[pointAY/50][(pointAX/50)] === 0 && array[pointDY/50][(pointDX/50)] === 0 && array[pointFY/50][pointFX/50]=== 0)
{
clearRStateJ1()
fillRStateJ0()
rotationState = 0
}
//Rotationstate 1 to 0 Wallkick
else if (rotationState===1 && array[pointFY/50][pointFX/50] === 0 &&  array[pointFY/50][(pointFX/50)+1] === 0 && array[pointCY/50][(pointCX/50)+1] === 0)
{
clearRStateJ1()
plusX(50)
fillRStateJ0()
rotationState = 0
}
}






