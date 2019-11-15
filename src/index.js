"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food = /** @class */ (function () {
    /**
     * Creates some food.
     * @param name The name of the food item (ex. hamburger)
     * @param [description] A short description
     * @param [sickChance] The chance of it making the human eating it sick (0-100)
     * @param [cureChance] The chance of it curing the human eating it (0-100)
     * @constructor
     */
    function Food(name, saturation, description, sickChance, cureChance) {
        if (saturation === void 0) { saturation = 10; }
        if (description === void 0) { description = ''; }
        if (sickChance === void 0) { sickChance = 0; }
        if (cureChance === void 0) { cureChance = 0; }
        this.name = name;
        this.saturation = saturation;
        this.description = description;
        this.sickChance = sickChance;
        this.cureChance = cureChance;
        this.integrity = 100;
        return this;
    }
    /**
     * Poisons the food. If you eat the food after it's poisoned, the human will get sick.
     */
    Food.prototype.poison = function () {
        this.sickChance = 100;
        return this;
    };
    /**
     * Removes a bit of the food
     * @param {number} [amount=100] - How much of the food to remove (0-100)
     */
    Food.prototype.eat = function (amount) {
        if (amount === void 0) { amount = 100; }
        this.integrity -= amount;
        this.integrity = Math.max(0, this.integrity);
        return this;
    };
    return Food;
}());
exports.Food = Food;
;
var Nekro = /** @class */ (function () {
    /**
     * Creates a human.
     */
    function Nekro() {
        this.gay = true;
        this.alive = true;
        this.sick = false;
        this.health = 100;
        this.hunger = 20;
        this.syrupChange = 0;
        return this;
    }
    /**
     * Poisons the Nekro class. Makes Nekro sick
     * @returns {string} Nekro's reply
     */
    Nekro.prototype.poison = function () {
        if (!this.alive)
            return '(its too lazy to poison him.)';
        this.sick = true;
        this.syrupChange = 0;
        return 'i think i got the sickness... wtf...';
    };
    /**
     * Makes Nekro eat some food.
     * @param {Food} food - The food to eat
     * @param {number} amount - How much of the food to eat (0-100)
     * @returns {string} Nekro's reply
     **/
    Nekro.prototype.eat = function (food, amount) {
        if (amount === void 0) { amount = 100; }
        if (!this.alive)
            return '(the body doesnt respond.)';
        food.eat(amount);
        if (Math.random() * amount < food.sickChance) {
            return this.poison();
        }
        else if (food.cureChance > 0) {
            if (Math.random() * amount - this.syrupChange < food.cureChance) {
                this.sick = false;
                return 'i have cured self!';
            }
            else {
                this.syrupChange++;
                return 'i need more cough syrup';
            }
        }
        else {
            this.hunger -= food.saturation * (amount / 100);
            this.hunger = Math.max(0, this.hunger);
            return 'yum. delicious';
        }
    };
    /**
     * Removes a certain amount of Nekro's health, potentially resulting in death
     * @param {number} [amount=10] - How much to remove Nekro's health by
     * @returns {string} Nekro's reply
     */
    Nekro.prototype.hurt = function (amount) {
        if (amount === void 0) { amount = 10; }
        if (!this.alive)
            return '(you are actually fucked up. why are you hitting a dead body? this is seriously fucked up)';
        this.health -= amount;
        this.health = Math.max(0, this.health);
        if (this.health <= 0) {
            this.alive = false;
            return 'ow, im fucking dead now';
        }
        else {
            return 'ow wtf stop';
        }
    };
    return Nekro;
}());
exports.Nekro = Nekro;
;
var foods = {
    coughSyrup: new Food('cough syrup', -1, 'yum, makes sickness go bye bye', 0, 30),
    hamburger: new Food('hamburger', 10, 'oh yes bread and tasty pickles!!!!'),
    frenchFry: new Food('french fry', 5, 'Holy Shittos.... It\'s Frenchy Fryyyy....'),
    momsSpaghetti: new Food('mom\'s spaghetti', 10, 'idk about this theres vomit on it...', 80, 0),
    oatFlakes: new Food('oat flakes', 15, 'jill gave me those flakes these morning, idk if i should trust her', 70, 0),
    cardboard: new Food('a piece of cardboard', 0, 'its fucking cardboard why is this food', 100, 0)
};
exports.foods = foods;
