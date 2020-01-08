const Compteur = function(_totalPointsGagnants){

  const testTotalPointsGagnants = Math.abs(parseInt(_totalPointsGagnants, 10));
  const totalPointsGagnants = testTotalPointsGagnants > 0 ? testTotalPointsGagnants : 99;
  const plafond = totalPointsGagnants;
  const plancher = 0;
  let scoreActuel = 0;

  const plus = () => {
    return (scoreActuel < plafond) ? ++scoreActuel : plafond;
  };

  const moins = () => {
    return (scoreActuel > plancher) ? --scoreActuel : plancher;
  };

  const zero = () => {
    scoreActuel = 0;
    return scoreActuel;
  };

  const formatageNombre = nombre => String(nombre).padStart(2, '0');

  const getScore = () => formatageNombre(scoreActuel);
  const getPlafond = () => plafond;
  const getPlancher = () => plancher;  

  return {plus, moins, zero, getScore, getPlafond, getPlancher };
};

export default Compteur;
