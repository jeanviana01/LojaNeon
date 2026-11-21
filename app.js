const formatPrice = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const price = value => formatPrice.format(value);
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const search = document.querySelector('#search');
const catalog = document.querySelector('#products');
const filters = document.querySelector('#filters');
const cart = document.querySelector('#cart');
const items = new Map();
let category = 'Todos';
let page = 1;
let pageCount = 1;
const pageSize = 24;

for (const name of ['Todos', ...new Set(products.map(product => product.category))]) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'category';
  button.textContent = name;
  button.setAttribute('aria-pressed', String(name === category));
  button.addEventListener('click', () => selectDepartment(name));
  filters.append(button);
}

function selectDepartment(name) {
  category = name;
  page = 1;
  for (const option of filters.children) {
    option.setAttribute('aria-pressed', String(option.textContent === name));
  }
  renderCatalog();
}

for (const link of document.querySelectorAll('[data-department]')) {
  link.addEventListener('click', () => {
    search.value = '';
    selectDepartment(link.dataset.department);
  });
}

function renderCatalog() {
  const query = normalize(search.value);
  const matches = products.filter(product =>
    (category === 'Todos' || product.category === category) &&
    normalize(product.name + ' ' + product.category).includes(query)
  );
  pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
  const start = (page - 1) * pageSize;
  document.querySelector('#pagination').hidden = pageCount === 1;
  document.querySelector('#previous').disabled = page === 1;
  document.querySelector('#next').disabled = page === pageCount;
  document.querySelector('#page-number').textContent = 'Página ' + page.toLocaleString('pt-BR') + ' de ' + pageCount.toLocaleString('pt-BR');
  document.querySelector('#result').textContent = matches.length.toLocaleString('pt-BR') + (matches.length === 1 ? ' produto' : ' produtos');
  catalog.innerHTML = matches.slice(start, start + pageSize).map(product => `
    <article class="card">
      <img src="${product.photo}" alt="" loading="lazy">
      <div class="card-body">
        <p class="kicker">${product.category} · Demonstração</p>
        <h3>${product.name}</h3>
        <p class="price">${price(product.price)}</p>
        <button class="add" type="button" data-add="${products.indexOf(product)}" aria-label="Adicionar ${product.name} ao carrinho">Adicionar</button>
      </div>
    </article>`).join('') || '<p class="empty">Nenhum produto encontrado.</p>';
}

function renderCart() {
  let total = 0;
  let count = 0;
  document.querySelector('#cart-items').innerHTML = Array.from(items, ([index, quantity]) => {
    const product = products[index];
    total += product.price * quantity;
    count += quantity;
    return `<div class="cart-row"><span>${quantity} × ${product.name}</span><button class="remove" data-remove="${index}" aria-label="Remover uma unidade de ${product.name}">−</button></div>`;
  }).join('') || '<p class="empty">Seu carrinho está vazio.</p>';
  document.querySelector('#count').textContent = count;
  document.querySelector('#cart-total').textContent = 'Subtotal ' + price(total);
}

search.addEventListener('input', () => {
  page = 1;
  renderCatalog();
});
function changePage(step) {
  page = Math.min(pageCount, Math.max(1, page + step));
  renderCatalog();
  document.querySelector('#catalog-title').scrollIntoView();
}
document.querySelector('#previous').addEventListener('click', () => changePage(-1));
document.querySelector('#next').addEventListener('click', () => changePage(1));
document.querySelector('.search').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#catalogo').scrollIntoView();
});
catalog.addEventListener('click', event => {
  const button = event.target.closest('[data-add]');
  if (!button) return;
  const index = Number(button.dataset.add);
  items.set(index, (items.get(index) || 0) + 1);
  renderCart();
  cart.showModal();
});
document.querySelector('#bag').addEventListener('click', () => cart.showModal());
cart.addEventListener('click', event => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  const index = Number(button.dataset.remove);
  const quantity = items.get(index);
  if (quantity > 1) items.set(index, quantity - 1);
  else items.delete(index);
  renderCart();
  const next = cart.querySelector('[data-remove="' + index + '"]') || cart.querySelector('.close');
  next.focus();
});
renderCatalog();
renderCart();
