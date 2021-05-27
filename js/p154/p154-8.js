menu = {"コーヒー": 300, "カフェラテ": 400}
for (let key in menu){
  const value = menu[key];
  console.log(`${key} - ${value}円`);
}
