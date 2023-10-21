function calculateHarvest() {
      var treeAmount = parseInt(document.getElementById('tree-amount').value);
      var fruitType = document.getElementById('fruit-type').value;
    
      var sellPrice, xp, buyPrice;
    
      if (fruitType === "peach") {
        sellPrice = 100;
        xp = 20;
        buyPrice = 750;
      } else if (fruitType === "apple") {
        sellPrice = 39;
        xp = 7;
        buyPrice = 160;
       } else if (fruitType === "banana") {
        sellPrice = 104;
        xp = 20;
        buyPrice = 800;
       } else if (fruitType === "blackberry") {
        sellPrice = 82;
        xp = 16;
        buyPrice = 530;
       } else if (fruitType === "raspberry") {
        sellPrice = 46;
        xp = 9;
        buyPrice = 220;
              } else if (fruitType === "cocoa") {
        sellPrice = 88;
        xp = 16;
        buyPrice = 550;
              } else if (fruitType === "cherry") {
        sellPrice = 68;
        xp = 13;
        buyPrice = 410;
              } else if (fruitType === "coconut") {
        sellPrice = 108;
        xp = 21;
        buyPrice = 810;
              } else if (fruitType === "coffee") {
        sellPrice = 64;
        xp = 12;
        buyPrice = 375;
              } else if (fruitType === "guava") {
        sellPrice = 111;
        xp = 22;
        buyPrice = 860;
              } else if (fruitType === "lemon") {
        sellPrice = 93;
        xp = 18;
        buyPrice = 670;
              } else if (fruitType === "mango") {
        sellPrice = 100;
        xp = 20;
        buyPrice = 770;
              } else if (fruitType === "olive") {
        sellPrice = 82;
        xp = 17;
        buyPrice = 620;
              } else if (fruitType === "orange") {
        sellPrice = 97;
        xp = 19;
        buyPrice = 720;
              } else if (fruitType === "plum") {
        sellPrice = 82;
        xp = 16;
        buyPrice = 600;
              } else if (fruitType === "pomegranate") {
        sellPrice = 111;
        xp = 22;
        buyPrice = 910;
              }
      // Add more fruit types with their respective values
    
      var fruitAmount = treeAmount * 13;
      var treeCost = treeAmount * buyPrice;
      var totalCoinsAfterSell = treeAmount * 13 * sellPrice;
      var firstHarvestXP = treeAmount * xp * 2;
      var secondHarvestXP = treeAmount * xp * 3;
      var thirdHarvestXP = treeAmount * xp * 4;
      var fourthHarvestXP = treeAmount * xp * 4;
      var totalXP = firstHarvestXP + secondHarvestXP + thirdHarvestXP + fourthHarvestXP;
    
      var xpReviving = treeAmount * xp;
      var xpCutting = treeAmount * 4;
    
      // Animate the results
      animateNumber('fruit-amount', fruitAmount);
      animateNumber('tree-cost', treeCost);
      animateNumber('total-coins-after-sell', totalCoinsAfterSell);
      animateNumber('first-harvest-xp', firstHarvestXP);
      animateNumber('second-harvest-xp', secondHarvestXP);
      animateNumber('third-harvest-xp', thirdHarvestXP);
      animateNumber('fourth-harvest-xp', fourthHarvestXP);
      animateNumber('total-xp', totalXP);
      animateNumber('xp-reviving', xpReviving);
      animateNumber('xp-cutting', xpCutting);
    }
    
    function animateNumber(elementId, finalValue) {
      var element = document.getElementById(elementId);
      var currentValue = parseInt(element.textContent);
    
      // Duration of the animation in milliseconds
      var duration = 400;
      // Interval for updating the value (change it to make the animation smoother)
      var interval = 10;
      // Number of steps to reach the final value
      var steps = Math.ceil(duration / interval);
      // Amount to increment at each step
      var increment = (finalValue - currentValue) / steps;
      // Counter variable
      var count = 0;
    
      var timer = setInterval(function () {
        count++;
        currentValue += increment;
        element.textContent = Math.round(currentValue);
    
        if (count >= steps) {
          clearInterval(timer);
          element.textContent = finalValue;
        }
      }, interval);
    }

    
