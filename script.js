// Product Data extracted from Appendix A of the project report
const products = [
    {"id": 1, "name": "Haldiram's Moong Dal 200g", "category": "Snacks", "kirana": 60.0, "blinkit": 122.0, "diff": 62.0, "premium": "103.3%", "result": "Kirana cheaper"},
    {"id": 2, "name": "Sprite 750 ml bottle", "category": "Beverages", "kirana": 35.0, "blinkit": 100.0, "diff": 65.0, "premium": "185.7%", "result": "Kirana cheaper"},
    {"id": 3, "name": "Classmate Book 160 pages (24x18cm)", "category": "Basic Stationery", "kirana": 63.0, "blinkit": 124.0, "diff": 61.0, "premium": "96.8%", "result": "Kirana cheaper"},
    {"id": 4, "name": "Amul Taaza 1 L milk", "category": "Staples", "kirana": 77.0, "blinkit": 139.0, "diff": 62.0, "premium": "80.5%", "result": "Kirana cheaper"},
    {"id": 5, "name": "Dettol Original Hand Wash", "category": "Personal Care", "kirana": 79.0, "blinkit": 138.0, "diff": 59.0, "premium": "74.7%", "result": "Kirana cheaper"},
    {"id": 6, "name": "Max protein chips peri peri 100", "category": "Snacks", "kirana": 45.0, "blinkit": 107.0, "diff": 62.0, "premium": "137.8%", "result": "Kirana cheaper"},
    {"id": 7, "name": "Red Bull 250ml", "category": "Beverages", "kirana": 125.0, "blinkit": 167.0, "diff": 42.0, "premium": "33.6%", "result": "Kirana cheaper"},
    {"id": 8, "name": "uni-ball Eye UB157 0.7mm Roller Ball Pen", "category": "Basic Stationery", "kirana": 120.0, "blinkit": 142.0, "diff": 22.0, "premium": "18.3%", "result": "Kirana cheaper"},
    {"id": 9, "name": "Everest rajma masala 100g", "category": "Staples", "kirana": 84.0, "blinkit": 152.0, "diff": 68.0, "premium": "81.0%", "result": "Kirana cheaper"},
    {"id": 10, "name": "Head and Shoulders 180ml Anti Dandruff Ant", "category": "Personal Care", "kirana": 218.0, "blinkit": 226.0, "diff": 8.0, "premium": "3.7%", "result": "Kirana cheaper"},
    {"id": 11, "name": "Max protein bar chocolate 50g", "category": "Snacks", "kirana": 80.0, "blinkit": 142.0, "diff": 62.0, "premium": "77.5%", "result": "Kirana cheaper"},
    {"id": 12, "name": "RAW banana honey shake", "category": "Beverages", "kirana": 103.0, "blinkit": 153.0, "diff": 50.0, "premium": "48.5%", "result": "Kirana cheaper"},
    {"id": 13, "name": "Classmate Octane Gel Smudge Proof", "category": "Basic Stationery", "kirana": 100.0, "blinkit": 143.0, "diff": 43.0, "premium": "43.0%", "result": "Kirana cheaper"},
    {"id": 14, "name": "Gowardhan pure cow ghee 1L", "category": "Staples", "kirana": 860.0, "blinkit": 789.0, "diff": -71.0, "premium": "-8.3%", "result": "Blinkit cheaper"},
    {"id": 15, "name": "Gillette Sensitive Shaving Foam (418g)", "category": "Personal Care", "kirana": 285.0, "blinkit": 288.0, "diff": 3.0, "premium": "1.1%", "result": "Kirana cheaper"},
    {"id": 16, "name": "Sprite", "category": "Beverages", "kirana": 40.0, "blinkit": 39.0, "diff": -1.0, "premium": "-2.5%", "result": "Blinkit cheaper"},
    {"id": 17, "name": "Moong daal", "category": "Snacks", "kirana": 60.0, "blinkit": 60.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 18, "name": "Amul taaza milk", "category": "Staples", "kirana": 77.0, "blinkit": 77.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 19, "name": "classmate notebook 24x18", "category": "Basic Stationery", "kirana": 63.0, "blinkit": 72.0, "diff": 9.0, "premium": "14.3%", "result": "Kirana cheaper"},
    {"id": 20, "name": "dettol handwash 200ml", "category": "Personal Care", "kirana": 79.0, "blinkit": 76.0, "diff": -3.0, "premium": "-3.8%", "result": "Blinkit cheaper"},
    {"id": 21, "name": "bingo mad angles", "category": "Snacks", "kirana": 20.0, "blinkit": 19.0, "diff": -1.0, "premium": "-5.0%", "result": "Blinkit cheaper"},
    {"id": 22, "name": "nescafe chilled latte", "category": "Beverages", "kirana": 45.0, "blinkit": 41.0, "diff": -4.0, "premium": "-8.9%", "result": "Blinkit cheaper"},
    {"id": 23, "name": "maaza juice 600ml.", "category": "Beverages", "kirana": 35.0, "blinkit": 35.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 24, "name": "khatta meetha haldiram", "category": "Snacks", "kirana": 95.0, "blinkit": 95.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 25, "name": "fevicol 200g", "category": "Basic Stationery", "kirana": 110.0, "blinkit": 110.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 26, "name": "fevi stick 15g", "category": "Basic Stationery", "kirana": 40.0, "blinkit": 40.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 27, "name": "garnier men oil clear", "category": "Personal Care", "kirana": 299.0, "blinkit": 240.0, "diff": -59.0, "premium": "-19.7%", "result": "Blinkit cheaper"},
    {"id": 28, "name": "fiama men 3 pack", "category": "Personal Care", "kirana": 234.0, "blinkit": 216.0, "diff": -18.0, "premium": "-7.7%", "result": "Blinkit cheaper"},
    {"id": 29, "name": "tata iodised salt", "category": "Staples", "kirana": 32.0, "blinkit": 29.0, "diff": -3.0, "premium": "-9.4%", "result": "Blinkit cheaper"},
    {"id": 30, "name": "gulab cold pressed oil", "category": "Staples", "kirana": 490.0, "blinkit": 314.0, "diff": -176.0, "premium": "-35.9%", "result": "Blinkit cheaper"},
    {"id": 31, "name": "Modern Brown Bread 400g", "category": "Staples", "kirana": 65.0, "blinkit": 65.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 32, "name": "Aashirvad Pure Cow ghee 500 ml", "category": "Staples", "kirana": 520.0, "blinkit": 466.0, "diff": -54.0, "premium": "-10.4%", "result": "Blinkit cheaper"},
    {"id": 33, "name": "Aashirvad Atta 1Kg", "category": "Staples", "kirana": 75.0, "blinkit": 71.0, "diff": -4.0, "premium": "-5.3%", "result": "Blinkit cheaper"},
    {"id": 34, "name": "Himalaya Purifying Neem facewash 150 ml", "category": "Personal Care", "kirana": 175.0, "blinkit": 136.0, "diff": -39.0, "premium": "-22.3%", "result": "Blinkit cheaper"},
    {"id": 35, "name": "Vicks Inhaler 1 nos", "category": "Personal Care", "kirana": 64.0, "blinkit": 69.0, "diff": 5.0, "premium": "7.8%", "result": "Kirana cheaper"},
    {"id": 36, "name": "Nivea Blue moisturizer 100 ml", "category": "Personal Care", "kirana": 275.0, "blinkit": 259.0, "diff": -16.0, "premium": "-5.8%", "result": "Blinkit cheaper"},
    {"id": 37, "name": "Diet coke 330 ml", "category": "Beverages", "kirana": 50.0, "blinkit": 50.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 38, "name": "Red bull sugar free 330 ml", "category": "Beverages", "kirana": 125.0, "blinkit": 125.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 39, "name": "Amul lassi 250 ml", "category": "Beverages", "kirana": 25.0, "blinkit": 25.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 40, "name": "Blue lays Potato chips 58g", "category": "Snacks", "kirana": 25.0, "blinkit": 21.0, "diff": -4.0, "premium": "-16.0%", "result": "Blinkit cheaper"},
    {"id": 41, "name": "Orange Kurkure chips 100g", "category": "Snacks", "kirana": 30.0, "blinkit": 26.0, "diff": -4.0, "premium": "-13.3%", "result": "Blinkit cheaper"},
    {"id": 42, "name": "Green lays Potato chips 580", "category": "Snacks", "kirana": 25.0, "blinkit": 21.0, "diff": -4.0, "premium": "-16.0%", "result": "Blinkit cheaper"},
    {"id": 43, "name": "Blue Trimax Pen 1 Nos", "category": "Basic Stationery", "kirana": 60.0, "blinkit": 60.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 44, "name": "Fevistik glue stick 15g", "category": "Basic Stationery", "kirana": 40.0, "blinkit": 40.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 45, "name": "Scotch Transparent Tape 1 Nos", "category": "Basic Stationery", "kirana": 40.0, "blinkit": 40.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 46, "name": "Blue Lays 58g", "category": "Snacks", "kirana": 25.0, "blinkit": 25.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 47, "name": "Diet Coke 330ml", "category": "Beverages", "kirana": 50.0, "blinkit": 50.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 48, "name": "Trimax Pen Blue", "category": "Basic Stationery", "kirana": 60.0, "blinkit": 60.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 49, "name": "Modern Brown Bread 400g", "category": "Staples", "kirana": 60.0, "blinkit": 60.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 50, "name": "Himalaya Purifying Neem Face Wash 150 ml", "category": "Personal Care", "kirana": 280.0, "blinkit": 201.0, "diff": -79.0, "premium": "-28.2%", "result": "Blinkit cheaper"},
    {"id": 51, "name": "Kurkure Masala Munch 103.6g", "category": "Snacks", "kirana": 30.0, "blinkit": 26.0, "diff": -4.0, "premium": "-13.3%", "result": "Blinkit cheaper"},
    {"id": 52, "name": "Max Protein Bar 50g Choco Almond", "category": "Snacks", "kirana": 80.0, "blinkit": 80.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 53, "name": "Maaza Mango Drink 600ml", "category": "Beverages", "kirana": 35.0, "blinkit": 35.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 54, "name": "Appy Fizz Sparkling Drink 250ml can", "category": "Beverages", "kirana": 40.0, "blinkit": 34.0, "diff": -6.0, "premium": "-15.0%", "result": "Blinkit cheaper"},
    {"id": 55, "name": "Fevistick Super Glue 8g", "category": "Basic Stationery", "kirana": 25.0, "blinkit": 25.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 56, "name": "Classmate Explorer Geometry Box", "category": "Basic Stationery", "kirana": 500.0, "blinkit": 402.0, "diff": -98.0, "premium": "-19.6%", "result": "Blinkit cheaper"},
    {"id": 57, "name": "Amul Fresh Malai Paneer 200g", "category": "Staples", "kirana": 95.0, "blinkit": 95.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 58, "name": "Amul Masti Cup Curd 200g", "category": "Staples", "kirana": 25.0, "blinkit": 25.0, "diff": 0.0, "premium": "0.0%", "result": "Same"},
    {"id": 59, "name": "Nivea Men Pure Impact Shower Gel 250ml", "category": "Personal Care", "kirana": 293.0, "blinkit": 219.0, "diff": -74.0, "premium": "-25.3%", "result": "Blinkit cheaper"},
    {"id": 60, "name": "Clinic Plus Strong & Long Shampoo 175ml", "category": "Personal Care", "kirana": 153.0, "blinkit": 153.0, "diff": 0.0, "premium": "0.0%", "result": "Same"}
];

// Initialize Charts
document.addEventListener("DOMContentLoaded", () => {
  
  Chart.defaults.font.family = '-apple-system, sans-serif';
  Chart.defaults.color = '#6b7280';

  // 1. Overall Comparison Chart
  new Chart(document.getElementById('overallChart'), {
    type: 'bar',
    data: {
      labels: ['Kirana', 'Blinkit'],
      datasets: [{
        label: 'Average Price (₹)',
        data: [123.30, 122.65],
        backgroundColor: ['#9ca3af', '#16a34a'],
        borderRadius: 6
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });

  // 2. Outcome Donut Chart
  new Chart(document.getElementById('outcomeChart'), {
    type: 'doughnut',
    data: {
      labels: ['Blinkit Cheaper', 'Same Price', 'Kirana Cheaper'],
      datasets: [{
        data: [21, 23, 16],
        backgroundColor: ['#10b981', '#9ca3af', '#ef4444']
      }]
    },
    options: { responsive: true }
  });

  // 3. Category Comparison Chart
  new Chart(document.getElementById('categoryChart'), {
    type: 'bar',
    data: {
      labels: ['Beverages', 'Snacks', 'Staples', 'Stationery', 'Personal Care'],
      datasets: [
        { label: 'Kirana Avg (₹)', data: [59.00, 47.92, 205.00, 101.75, 202.83], backgroundColor: '#9ca3af', borderRadius: 4 },
        { label: 'Blinkit Avg (₹)', data: [71.17, 62.00, 190.17, 104.83, 185.08], backgroundColor: '#16a34a', borderRadius: 4 }
      ]
    },
    options: { responsive: true }
  });

  // 4. Basket Analysis Chart
  new Chart(document.getElementById('basketChart'), {
    type: 'bar',
    data: {
      labels: ['Basket 1', 'Basket 2', 'Basket 3', 'Basket 4'],
      datasets: [
        { label: 'Kirana Total', data: [2333, 1719, 1590, 1750], backgroundColor: '#9ca3af', borderRadius: 4 },
        { label: 'Blinkit Total', data: [2931, 1463, 1470, 1489], backgroundColor: '#16a34a', borderRadius: 4 }
      ]
    },
    options: { responsive: true }
  });

  // 5. Product Level Difference Chart (Horizontal)
  const sortedProducts = [...products].sort((a, b) => a.diff - b.diff);
  new Chart(document.getElementById('differenceChart'), {
    type: 'bar',
    data: {
      labels: sortedProducts.map(p => p.name),
      datasets: [{
        label: 'Price Difference (Blinkit - Kirana)',
        data: sortedProducts.map(p => p.diff),
        backgroundColor: sortedProducts.map(p => p.diff > 0 ? '#ef4444' : (p.diff < 0 ? '#10b981' : '#9ca3af')),
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: 'y',
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `Diff: ₹${context.raw} (${sortedProducts[context.dataIndex].premium})`
          }
        }
      }
    }
  });

  // Initialize Interactive Table
  renderTable(products);
});

// Table Rendering & Filtering Logic
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const resultFilter = document.getElementById('resultFilter');

function getBadgeClass(result) {
  if(result === 'Blinkit cheaper') return 'badge-green';
  if(result === 'Kirana cheaper') return 'badge-red';
  return 'badge-gray';
}

function renderTable(data) {
  tableBody.innerHTML = '';
  data.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${p.name}</strong></td>
      <td>${p.category}</td>
      <td>₹${p.kirana.toFixed(2)}</td>
      <td>₹${p.blinkit.toFixed(2)}</td>
      <td style="color: ${p.diff > 0 ? 'var(--red)' : (p.diff < 0 ? 'var(--green)' : 'inherit')}">
        ${p.diff > 0 ? '+' : ''}₹${p.diff.toFixed(2)}
      </td>
      <td>${p.premium}</td>
      <td><span class="badge ${getBadgeClass(p.result)}">${p.result}</span></td>
    `;
    tableBody.appendChild(tr);
  });
}

function filterData() {
  const term = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;
  const res = resultFilter.value;

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(term);
    const matchCat = cat === 'All' || p.category === cat;
    const matchRes = res === 'All' || p.result === res;
    return matchSearch && matchCat && matchRes;
  });

  renderTable(filtered);
}

searchInput.addEventListener('input', filterData);
categoryFilter.addEventListener('change', filterData);
resultFilter.addEventListener('change', filterData);

// Sorting
let currentSortCol = '';
let currentSortAsc = true;

document.querySelectorAll('th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const sortCol = th.getAttribute('data-sort');
    if (currentSortCol === sortCol) {
      currentSortAsc = !currentSortAsc;
    } else {
      currentSortCol = sortCol;
      currentSortAsc = true;
    }

    const sorted = [...products].sort((a, b) => {
      let valA = a[sortCol];
      let valB = b[sortCol];
      if (valA < valB) return currentSortAsc ? -1 : 1;
      if (valA > valB) return currentSortAsc ? 1 : -1;
      return 0;
    });

    renderTable(sorted);
  });
});