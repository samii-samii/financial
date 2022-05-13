const input = [
    {
      refill: 666.666666667,
      date: 1646006400,
      clientId: 1,
      transactionId: 1,
    },
    {
      refill: 666.666666667,
      date: 16460064003,
      clientId: 2,
      transactionId: 2,
    },
    {
      refill: 666.666666667,
      date: 1646006400,
      clientId: 3,
      transactionId: 2,
    },
  ];
  
const clients = {
    1: {
      name: 'Aidar',
      isFixedProfit: false,
    },
    2: {
      name: 'Ildar',
      isFixedProfit: true,
    },
    3: {
      name: 'Timur',
      isFixedProfit: true,
    },
    4: {
      name: 'Lilya',
      isFixedProfit: false,
    },
    5: {
      name: 'Asel',
      isFixedProfit: false,
    }
  }
  
  // на вход поступает массив вложений. Каждый элемент содержит пополнение (refill), дату пополнения (утро, деньги поступают на данный день, date), идентификатор (clientId)

  function countWorkDay(startDay,endDay) {
          var start = new Date(startDay*1000);
          var end = new Date(endDay*1000);
          var start_to_week = start.getDay();
          var end_to_week = end.getDay();
                    // Разница в днях
          var diffDay = (end - start) / (1000 * 60 * 60 * 24) + 1;
          var diffWeekDay = diffDay - (start_to_week ==0?0:7-start_to_week) + end_to_week;
                   // Расчет состоит из нескольких полных недель
          var weeks = Math.floor(diffWeekDay/7);
                   if (weeks <= 0) {// На одной неделе, то есть время начала и окончания не может быть одновременно воскресеньем и субботой (воскресенье - первый день недели)
              return end_to_week-start_to_week+(start_to_week?1:0)+(end_to_week==6?-1:0);
          }else{
              return weeks*5 + (end_to_week==6?5:end_to_week) + ( start_to_week >= 1 && start_to_week <= 5 ? (6-start_to_week):0);
          }
      }

// рассчет количества рабочих дней

console.log(countWorkDay(1646006400,1652400000));
  
  // функция должна выдавать ответ в предложенном формате в зависимости от аргумента (дата расчета долей)
  const getOutput = (date, totalDeposit = 6012) => {
    // ...
    // ...
  
    return [
      {
        clientId: 1,
        deposit: 120,
      },
      {
        clientId: 2,
        deposit: 220,
      },
    ];
  }
  
  console.log(getOutput(Date.now, 6014));
  
