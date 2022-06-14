type Move = {
    name: string,
    power: number
  };
  
  function checkPP(pp: number){
    console.log(pp);
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }
  
  class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
      this.name = name;
      this.ppAvailable = ppAvailable;
    }
  
    @checkPP(3)
    figth(move: Move) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  
    calculateDamage(move: any) {
      return move.power;
    }
  }
  
  const thunderbolt: Move = { name: 'thunderbolt', power: 90 };
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.figth(thunderbolt);
  pikachu.figth(thunderbolt);