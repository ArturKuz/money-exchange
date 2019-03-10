// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};

    // let half = currency % 50;
        if(currency <= 0){
            money = {};
        } 
        else if(currency >= 10000){
            money = { error: "You are rich, my friend! We don't have so much coins for exchange"};
        } 

        else{

            let resH = Math.floor(currency / 50);
            let modH = (currency % 50);
            if (resH > 0) {
                money.H = resH;                
            };
            
            let resQ = Math.floor(modH / 25);
            let  modQ = (modH % 25);
            if( resQ > 0) {
                money.Q = resQ;               
            };

            let resD = Math.floor(modQ / 10);
            let modD =(modQ % 10);
            if( resD > 0){
                money.D = resD;                
            };

            let resN = Math.floor(modD / 5);
            let modN = (modD % 5);
            if( resN > 0){
                money.N = resN;                
            };

            let resP = Math.floor(modN / 1);            
            if( resP > 0){
                money.P = resP;                
            };
            //   money.D = Math.floor(modQ / 10);
            //   let modD = (modQ % 10);
              
            //   money.N = Math.floor(modD / 5);
            //   let modN = (modD % 5);
                        
            //   money.P = Math.floor(modN / 1);
          
        //   money.Q = Math.floor(modH / 25);
        //   let modQ = (modH % 25);
          
        //   money.D = Math.floor(modQ / 10);
        //   let modD = (modQ % 10);
          
        //   money.N = Math.floor(modD / 5);
        //   let modN = (modD % 5);
                    
        //   money.P = Math.floor(modN / 1);
        //   let modP = (modN % 1);
        }
        return money; 

}
