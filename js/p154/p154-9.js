menu = {"コーヒー": 300, "カフェラテ": 400}
for (let key in menu){
  const value = menu[key];
  if (value > 350){
    console.log(`${key} - ${value}円`);
  }
}
