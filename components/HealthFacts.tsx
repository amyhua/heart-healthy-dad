const facts = [
  {
    english: 'Meals with high content of fat or protein help delay and prolong increases in blood sugar, but too much fat will increase your cholesterol.',
    chinese: '富含脂肪或蛋白质的膳食有助于延缓和延长血糖升高的时间，但过多的脂肪会增加胆固醇。',
    image: 'images/balanced1.png'
  },
  {
    english: 'Each meal you eat should consist of 45-60% carbohydrates, 15-20% protein, and 20-35% fat.',
    chinese: '每顿饭应包含 45-60% 的碳水化合物、15-20% 的蛋白质和 20-35% 的脂肪。',
    image: 'images/balanced2.png'
  },
  {
    english: 'Fiber slows down the absorption of sugar into the bloodstream, which helps regulate blood sugar levels.',
    chinese: '纤维减缓血液对糖的吸收，有助于调节血糖水平。',
    image: 'images/fiber3.png'
  },
  {
    english: 'For men over 50 with type 2 diabetes, the recommended daily fiber intake is around 28 grams.',
    chinese: '爸爸的目标应该是每天摄入 28 克纤维。',
    image: 'images/fiber_intake.png'
  },
  {
    english: 'Increasing fiber intake means having a diet rich in whole grains, legumes, vegetables, and fruits to achieve this amount.',
    chinese: '增加纤维摄入量意味着要摄入富含全谷物、豆类、蔬菜和水果的饮食来达到这个量。',
    image: 'images/fiber2.png'
  }
]
const HealthFacts = () => {
  return (
    <ul className="grid grid-cols-2">
      {facts.map((fact, i) => (
        <li key={i} className="min-w-[420px] flex bg-white border-l border-l-8 border-l-black p-4 rounded-lg shadow-lg mr-5 mb-8 text-xl max-w-[600px] mb-5">
          <div className="flex-1">
            <p className="font-bold text-3xl">
              {fact.chinese}
            </p>
            {/* <p className="opacity-50 mt-1 text-base">
              {fact.english}
            </p> */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HealthFacts;
