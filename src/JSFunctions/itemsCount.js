let count = 0;
const itemsCount = () => {
  count += 1;
  const itemsNum = document.getElementById('items-num');
  itemsNum.innerHTML = count;
};

export default itemsCount;