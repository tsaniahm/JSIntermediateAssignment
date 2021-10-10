//NO 3 DONE
//dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    let totalBtc = [];
    let totalEth = [];
    let totalDoge = [];

    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    for(let i=0; i<items.length;i++){
      totalBtc[i] = (items[i].btc.sell - items[i].btc.buy)
      totalEth[i] = (items[i].eth.sell - items[i].eth.buy)
      totalDoge[i] = (items[i].doge.sell - items[i].doge.buy) 
    }
     const result = { btc : totalBtc.reduce(reducer), doge : totalDoge.reduce(reducer), eth : totalEth.reduce(reducer)}
     return result

  }
  
  console.log(calculateIncome(items))