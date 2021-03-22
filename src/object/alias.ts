export default function typeAliasSample() {
  // type alias
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('typeAliasSample 01', japan);

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'USA',
  };

  console.log('typeAliasSample 02', america);

  // union and intersection types
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  // union type. Has Knight or Wizard type
  type Adventurer = Knight | Wizard;

  // intersection type. Has Knight and Wizard types
  type Paladin = Knight & Wizard;

  const adventurerOne: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'Wooden sword',
    swordSkill: 'Triple slash',
  };

  const adventurerTwo: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: 'wooden cane',
    magicSkill: 'Fireball',
  };

  console.log('typeAliasSample 03', adventurerOne);
  console.log('typeAliasSample 04', adventurerTwo);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: 'Silver sword',
    swordSkill: 'Triple slash',
    magicSkill: 'Fireball',
  };

  console.log('typeAliasSample 05', paladin);
}
