//this is the code to move the player ship
#pragma strict
var speed:float = 6.0;
var there:boolean = false;
var xPos:float;
var xPos2:float;
var moveLeft:boolean = false;
var moveRight:boolean = false;
var A:boolean;
var D:boolean;
var moving:boolean = false;

function Update () {
	if (Input.GetKey(KeyCode.A) && !moving)
	{
		A = true;
		D = false;
	}
	if (Input.GetKey(KeyCode.D) && !moving)
	{
		A = false;
		D = true;
	}
	if (A)
	{
		movePlayerShipLeft();
	}
	if (D)
	{
		movePlayerShipRight();
	}
	/*if (Input.GetKeyDown(Space))
	{
		shootProjectile();
	}
}

function shootProjectile() {
*/	
}

function movePlayerShipLeft () {
	xPos = transform.position.x;
	if (Input.GetKey(KeyCode.A) && xPos2 > -6)
	{
		if (moveLeft == false)
		{
			xPos2 = Mathf.RoundToInt(transform.position.x - 2.0);
			moveLeft = true;	
		}
	} 
	if (xPos <= xPos2) //if you are to the left of the position
	{
		if (!Input.GetKey(KeyCode.A)) //makes sure the position doesn't get offset whilst maintaining smooth movement
		{
			transform.position.x = xPos2;
		} 
		moveLeft = false;
	}
	if (moveLeft == true && xPos >= xPos2)
	{
		transform.Translate(Vector3.left * speed * Time.deltaTime);
		moving = true;
	}
	if (xPos <= xPos2) //if you are to the left of the position
	{
		moving = false;
	}
}

function movePlayerShipRight () {
	xPos = transform.position.x;
	if (Input.GetKey(KeyCode.D) && xPos2 < 6)
	{
		if (moveRight == false)
		{
			xPos2 = Mathf.RoundToInt(transform.position.x + 2.0);
			moveRight = true;	
		}
	} 
	if (xPos >= xPos2)
	{
		if (!Input.GetKey(KeyCode.D))
		{
			transform.position.x = xPos2;
		}
		moveRight = false;
	}
	if (moveRight == true && xPos <= xPos2)
	{
		transform.Translate(Vector3.right * speed * Time.deltaTime);
		moving = true;
	}
	if (xPos >= xPos2)
	{
		moving = false;
	}
}
