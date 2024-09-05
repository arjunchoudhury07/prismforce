function canCrossChakravyuh(
  p: number,
  enemyPowers: number[],
  a: number,
  b: number
): boolean {
  const n = enemyPowers.length;
  const defeated: boolean[] = [...Array(n)].map(() => false); // Keeps track of enemies defeated
  let skipsLeft = a;
  let rechargesLeft = b;
  let currentPower = p;

  for (let index = 0; index < n; index++) {
    if (enemyPowers[index] > currentPower) {
      if (skipsLeft > 0) {
        skipsLeft--;
        continue;
      } else if (rechargesLeft > 0) {
        rechargesLeft--;
        currentPower = p;
        index--;
        continue;
      } else {
        return false;
      }
    }

    currentPower -= enemyPowers[index];
    defeated[index] = true;

    if (index === 2 || index === 6) {
      // k3 and k7 indices are 2 and 6
      const regeneratePower = Math.floor(enemyPowers[index] / 2);
      if (regeneratePower > 0 && defeated[index]) {
        // Regenerate once and attack from behind
        if (index + 1 < n && regeneratePower >= currentPower) {
          // If Abhimanyu cannot handle the regenerated enemy attack
          if (skipsLeft > 0) {
            // Use a skip
            skipsLeft--;
          } else if (rechargesLeft > 0) {
            // Use a recharge
            rechargesLeft--;
            currentPower = p;
            index--; // Retry the next circle
          } else {
            return false; // Abhimanyu loses
          }
        }
      }
    }
  }

  return true; // Abhimanyu successfully crosses the Chakravyuh
}

function checkCanCrossChakravyuh(
  power: number,
  enemyPower: number[],
  a: number,
  b: number
) {
  // Check if Abhimanyu can cross the Chakravyuh for Test Case 1
  if (canCrossChakravyuh(power, enemyPower, a, b)) {
    console.log("Abhimanyu successfully crosses the Chakravyuh.");
  } else {
    console.log("Abhimanyu fails to cross the Chakravyuh.");
  }
}

// Test Case 1
let power = 5;
let enemyPower = [0, 10, 2, 3, 9, 5, 6, 7, 8, 4, 7];
let a = 5;
let b = 3;
checkCanCrossChakravyuh(power, enemyPower, a, b);

power = 15;
enemyPower = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
a = 2;
b = 3;
checkCanCrossChakravyuh(power, enemyPower, a, b);
