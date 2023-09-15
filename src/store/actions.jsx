function getrandom() {
  const random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return random_string;
}

export function add(state, action) {
  const url = action.data;
  const shortUrl = getrandom();
  const temp = [...state.items];

  const newItem = {
    url: url.toString(),
    shortUrl: shortUrl,
    views: 0,
  };

  temp.unshift(newItem);
  localStorage.setItem('urls', JSON.stringify(temp))
  return { items: [...temp] }; ///actualiza el estado del reducer con esta sintaxis
}
export function load(state, action) {
  const data = localStorage.getItem('urls')
  if(data){
    const temp = JSON.parse(data) ///parse convierte el item en un objeto javascript
    return {items : [...temp]}
  }
}
export function addView(state, action) {
  const temp = [...state.items]
  const item = temp.find(i=> i.shortUrL === action.data)
  item.views ++
  localStorage.setItem('urls', JSON.stringify(temp))
  return { items : [...temp]}

  
}
