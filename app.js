var cats = [
{name:"JOJO",imgUrl:"http://ww3.sinaimg.cn/mw690/648ac377gw1f5q8t73bf1j20f00c0aai.jpg",clickNum:0},
{name:"Tiger",imgUrl:"http://ww4.sinaimg.cn/mw690/648ac377gw1f5q8t93nifj20fo0cjglx.jpg",clickNum:0},
{name:"Shadow",imgUrl:"http://ww1.sinaimg.cn/mw690/648ac377gw1f5q8t8bu1bj20fo0lj3zc.jpg",clickNum:0},
{name:"Chance",imgUrl:"http://ww2.sinaimg.cn/mw690/648ac377gw1f5q8t5xqjyj20f00hvglx.jpg",clickNum:0},
];


var Cat = function(data){
  this.name = ko.observable(data.name);
  this.clickNum = ko.observable(data.clickNum);
  this.imgUrl = ko.observable(data.imgUrl);
  this.level = ko.computed(function(){
  	var level;
  	var click = this.clickNum(); 
    if(click<5){
  	 level='0';
  } else if(click<10){
     level='1'; 
  } else if(click<15){
     level='2'; 
  } else if(click<20){
     level='3'; 
  } else if(click>20){
     level='top'; 
  }
  return level;
  },this);
};


var ViewModel = function(){
  var self = this;
  this.catlist=ko.observableArray([]);
  cats.forEach(function(item){
    var cat = new Cat(item);
    self.catlist.push(cat);
  });  
  this.currentcat = ko.observable(this.catlist()[0]);
  this.addClick = function(){
    self.currentcat().clickNum(self.currentcat().clickNum()+1);
  }
  this.changecc = function(event){
  	self.currentcat(event);
  }
  
};


ko.applyBindings(new ViewModel());