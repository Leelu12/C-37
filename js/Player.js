class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//writes the information of all the player to the data base
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  //the function is common to all the objects hence static
  //reads the information of all the player from the data base
  //call the static function directly with the class name
  static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val()
    })
  }
}
