//this is the code to move the bullet catcher or "bucket"; it's very similar to the playerShip.js code
#pragma strict
var speed:float = 8.0;
var there:boolean = false;
var xPos:float;
var xPos2:float;
var moveLeft:boolean = false;
var moveRight:boolean = false;
var A:boolean;
var D:boolean;
var moving:boolean = false;

function Update () {
	if (Input.GetKey(KeyCode.LeftArrow) && !moving)
	{
		A = true;
		D = false;
	}
	if (Input.GetKey(KeyCode.RightArrow) && !moving)
	{
		A = false;
		D = true;
	}
	if (A)
	{
		moveBucketLeft();
	}
	if (D)
	{
		moveBucketRight();
	}
}

function moveBucketLeft () {
	xPos = transform.position.x;
	if (Input.GetKey(KeyCode.LeftArrow) && xPos2 > -6)
	{
		if (moveLeft == false)
		{
			xPos2 = Mathf.RoundToInt(transform.position.x - 2.0);
			moveLeft = true;	
		}
	} 
	if (moveLeft == true && xPos >= xPos2)
	{
		transform.Translate(Vector3.left * speed * Time.deltaTime);
		moving = true;
	}
	if (xPos <= xPos2) //if you are to the left of the position
	{
		if (!Input.GetKey(KeyCode.LeftArrow))
		{
			transform.position.x = xPos2;
		}
		moveLeft = false;
	}
	if (xPos <= xPos2) //if you are to the left of the position
	{
		moving = false;
	}
}

function moveBucketRight () {
	xPos = transform.position.x;
	if (Input.GetKey(KeyCode.RightArrow) && xPos2 < 6)
	{
		if (moveRight == false)
		{
			xPos2 = Mathf.RoundToInt(transform.position.x + 2.0);
			moveRight = true;	
		}
	} 
	if (moveRight == true && xPos <= xPos2)
	{
		transform.Translate(Vector3.right * speed * Time.deltaTime);
		moving = true;
	}
	if (xPos >= xPos2)
	{
		if (!Input.GetKey(KeyCode.RightArrow))
		{
			transform.position.x = xPos2;
		}
		moveRight = false;
	}
	if (xPos >= xPos2)
	{
		moving = false;
	}
}
