
var willpowerAddedOnClick = 0.05; 

export default class movie_cry extends Phaser.Scene {
    emotions: string[];
    girls: Phaser.GameObjects.Sprite;
    willpower: Phaser.GameObjects.Graphics;
    maxWillpower: number;
    currentWillpower: number;

	constructor ()
	{
		super(MOVIE_CRY_KEY);
		//keep track of emotion keys: sad --> happy
        this.emotions = ['sad', 'meh', 'happy'];

	}

	preload ()
	{
		this.load.image("bg", "/../../assets/temp/movie_bg.jpg");
		this.load.image(this.emotions[2], '../../assets/temp/happy.png');
		this.load.image(this.emotions[1], '../../assets/temp/meh.png');
        this.load.image('sad', '/../../assets/temp/sad.png');
	}

	create ()
	{
		//background 
		this.add.image(-100, 0, 'bg').setOrigin(0, 0);

		//characters
        this.girls = this.add.sprite(175, 250, 'sad');
        console.log(this.girls.frame);
        //console.log(this.emotions[0]);

		//visual display for the meter 
		var cryingMeter = this.add.graphics();
		this.willpower = this.add.graphics();
		cryingMeter.fillStyle(0x666666, 1);
		cryingMeter.fillRect(20, 10, this.cameras.main.width - 40, 50);
		this.maxWillpower = this.cameras.main.width - 60; 
		this.currentWillpower = this.maxWillpower; //initialize

		//this enables mouse input!
		this.input.on('pointerup', this.click, this);
   	}

	update() 
	{
		//TODO: willpower goes down more quickly as time goes on 
		this.updateWillpower(-.003);

		//CHANGE IMAGE OF GIRLS TO REFLECT APPROPRIATE SADNESS//
		//if (this.currentwillpower != 0) 
		//{
		//	let step = this.maxwillpower/(this.emotions.length - 1); //# of willpower corresponding to image
		//	this.girls.settexture(this.emotions[math.floor(this.currentwillpower / step) + 1]); 
		//	note:is load texture an expensive operation??
		//}
		//else 
		//	this.girls.settexture(this.emotions[0]);
	}

	//Raise the willpower on click
	click() 
	{
		this.updateWillpower(willpowerAddedOnClick);
	}

	//change = how much you want to add or subtract from the willpower
	//range: -1 - 1. BY PERCENTAGE of total willpower. 
	updateWillpower(change) 
	{

	    //save amount of willpower girls currently have
	    this.willpower.clear();
	    this.willpower.fillStyle(0xffffff, 1);

	    //calculate new amount
	    let newWillpowerAmount = this.clamp(0, this.maxWillpower, 
	    	this.currentWillpower + (this.maxWillpower * change));

	    //refresh willpower with new amount
	    this.willpower.fillRect(30, 20, newWillpowerAmount, 30);

	    this.currentWillpower = newWillpowerAmount;
	}

	//utility function - return number if it's within range, otherwise bound closest to it. 
	clamp(min, max, value)
	{
	  return Math.min(Math.max(value, min), max);
	}

}
