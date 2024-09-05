Here’s a `README.md` file explaining the algorithm, its purpose, usage, and how to run the tests. This will help others understand the code and how to work with it.

---

# Abhimanyu in Chakravyuha Algorithm

This repository contains an implementation of an algorithm that determines whether Abhimanyu can successfully cross the Chakravyuha in a simulated scenario inspired by the Mahabharata. The Chakravyuha is a complex, multi-layered battle formation, and Abhimanyu must navigate through it by battling enemies with varying powers, using strategic skips, and recharges.

## Problem Description

Abhimanyu starts in the innermost circle of the Chakravyuha with a given amount of power. Each circle is guarded by an enemy with specific power values, and Abhimanyu must cross all 11 circles to reach the Pandavas' army. The challenges are:

- Each enemy has a power level (`k1, k2, ..., k11`).
- Abhimanyu starts with an initial power (`p`).
- Abhimanyu can:
  - Skip battling an enemy a certain number of times (`a` skips).
  - Recharge his power a certain number of times (`b` recharges).
- If Abhimanyu enters a circle with power less than the enemy's power, he loses unless he skips or recharges.
- Special Enemies:
  - The enemies at the 3rd and 7th positions (0-indexed as 2 and 6) can regenerate once with half of their initial power and attack Abhimanyu again in the next circle.

The objective is to determine if Abhimanyu can successfully cross all circles.

## Algorithm

The algorithm is implemented in TypeScript and follows these steps:

1. **Initialization**:

   - Start with Abhimanyu's initial power `p`.
   - Track the number of skips (`a`) and recharges (`b`) left.
   - Use an array to track defeated enemies.

2. **Battle Simulation**:

   - Iterate through each circle of the Chakravyuha.
   - For each circle:
     - If Abhimanyu's power is less than the enemy's power:
       - Use a skip if available.
       - Use a recharge if available, resetting Abhimanyu's power to the initial power and retrying the current enemy.
       - If neither skips nor recharges are available, Abhimanyu loses.
     - If Abhimanyu's power is sufficient:
       - Defeat the enemy, reducing Abhimanyu's power by the enemy's power.
     - Handle regeneration for enemies at the 3rd and 7th positions.
       - Regenerated enemies attack from behind and must be handled appropriately with skips or recharges.

3. **Result**:
   - Return `true` if Abhimanyu successfully crosses all circles.
   - Return `false` if Abhimanyu is defeated.

## Usage

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chakravyuh-algorithm.git
   cd chakravyuh-algorithm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` should provide a comprehensive overview of the algorithm, guiding users on how to implement, use, and test it effectively. Adjust the repository URL and author details as necessary for your specific setup.
