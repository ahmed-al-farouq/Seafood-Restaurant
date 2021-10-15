let count = 0;
const itemsCount = () => {
  count += 1;
  const itemsNum = document.getElementById('items-num');
  itemsNum.innerHTML = count;
  return count;
};

export default itemsCount;