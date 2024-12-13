// API:https://hexschool.github.io/js-filter-data/data.json

const url = "https://hexschool.github.io/js-filter-data/data.json";
const vegetablesBtn = document.querySelector(".vegetablesBtn");
const fruitsBtn = document.querySelector(".fruitsBtn");
const flowersBtn = document.querySelector(".flowersBtn");
const showList = document.querySelector(".showList");
const search = document.querySelector(".search");
const topValue = document.querySelector(".topValue");
const jsSelect = document.querySelector("#js-select");
const jsSortAdvanced = document.querySelector(".js-sort-advanced");


let vegetablesDataList = [];
let top_vegetablesData;
let middle_vegetablesData;
let bottom_vegetablesData;
let average_vegetablesData;
let volume_vegetablesData;

let fruitsDataList = [];
let top_fruitsData;
let middle_fruitsData;
let bottom_fruitsData;
let average_fruitsData;
let volume_fruitsData;

let flowersDataList = [];
let top_flowersData;
let middle_flowersData;
let bottom_flowersData;
let average_flowersData;
let volume_flowersData;


// **************************選擇蔬果頁面*********************************
vegetablesBtn.addEventListener("click", function (e) {
  vegetablesBtn.classList.add("active");
  fruitsBtn.classList.remove("active");
  flowersBtn.classList.remove("active");
  let str = "";
  vegetablesDataList.forEach((item) => {
    str += `    
    <tr>
      <td>${item.作物名稱}</td>
      <td>${item.市場名稱}</td>
      <td>${item.上價}</td>
      <td>${item.中價}</td>
      <td>${item.下價}</td>
      <td>${item.平均價}</td>
      <td>${item.交易量}</td>
    </tr>`;
  })

  showList.innerHTML = `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ str;

  // 輸入並搜尋想比價的作物名稱按鈕
  search.addEventListener("click", function (e) {
    const crop = document.querySelector("#crop").value;
    const cropRegex = new RegExp(crop, 'i');
    let str = "";
    if (crop === "") {
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`;
      vegetablesBtn.classList.remove("active");
      fruitsBtn.classList.remove("active");
      flowersBtn.classList.remove("active");
    } else {
      vegetablesDataList.forEach((item) => {
        if (cropRegex.test(item.作物名稱)) {
          str += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
        }
      })
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`+ str;
    }
  })

  // 點選排序篩選
  jsSelect.addEventListener("change", function (e) {
    if (jsSelect.value === "topOrder") {
      showList.innerHTML = top_vegetablesData;
    } else if (jsSelect.value === "middleOrder") {
      showList.innerHTML = middle_vegetablesData;
    } else if (jsSelect.value === "bottomOrder") {
      showList.innerHTML = bottom_vegetablesData;
    } else if (jsSelect.value === "averageOrder") {
      showList.innerHTML = average_vegetablesData;
    } else if (jsSelect.value === "volumeOrder") {
      showList.innerHTML = volume_vegetablesData;
    }
  })

  // 表頭排序
  sortAdvanced(vegetablesDataList);
})


// *******************選擇水果頁面********************
fruitsBtn.addEventListener("click", function (e) {
  vegetablesBtn.classList.remove("active");
  fruitsBtn.classList.add("active");
  flowersBtn.classList.remove("active");
  let str = "";
  fruitsDataList.forEach((item) => {
    str += `    
    <tr>
      <td>${item.作物名稱}</td>
      <td>${item.市場名稱}</td>
      <td>${item.上價}</td>
      <td>${item.中價}</td>
      <td>${item.下價}</td>
      <td>${item.平均價}</td>
      <td>${item.交易量}</td>
    </tr>`;
  })
  showList.innerHTML = `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ str;

  // 輸入並搜尋想比價的作物名稱按鈕
  search.addEventListener("click", function (e) {
    const crop = document.querySelector("#crop").value;
    const cropRegex = new RegExp(crop, 'i');
    let str = "";
    if (crop === "") {
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`;
      vegetablesBtn.classList.remove("active");
      fruitsBtn.classList.remove("active");
      flowersBtn.classList.remove("active");
    } else {
      fruitsDataList.forEach((item) => {
        if (cropRegex.test(item.作物名稱)) {
          str += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
        }
      })
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`+ str;
    }
  })

  // 點選排序篩選
  jsSelect.addEventListener("change", function (e) {
    if (jsSelect.value === "topOrder") {
      showList.innerHTML = top_fruitsData;
    } else if (jsSelect.value === "middleOrder") {
      showList.innerHTML = middle_fruitsData;
    } else if (jsSelect.value === "bottomOrder") {
      showList.innerHTML = bottom_fruitsData;
    } else if (jsSelect.value === "averageOrder") {
      showList.innerHTML = average_fruitsData;
    } else if (jsSelect.value === "volumeOrder") {
      showList.innerHTML = volume_fruitsData;
    }
  })

  // 表頭排序
  sortAdvanced(fruitsDataList);
})

// *******************選擇花卉頁面***************************
flowersBtn.addEventListener("click", function (e) {
  vegetablesBtn.classList.remove("active");
  fruitsBtn.classList.remove("active");
  flowersBtn.classList.add("active");
  let str = "";
  flowersDataList.forEach((item) => {
    str += `    
    <tr>
      <td>${item.作物名稱}</td>
      <td>${item.市場名稱}</td>
      <td>${item.上價}</td>
      <td>${item.中價}</td>
      <td>${item.下價}</td>
      <td>${item.平均價}</td>
      <td>${item.交易量}</td>
    </tr>`;
  })
  showList.innerHTML = `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ str;

  // 輸入並搜尋想比價的作物名稱按鈕
  search.addEventListener("click", function (e) {
    const crop = document.querySelector("#crop").value;
    const cropRegex = new RegExp(crop, 'i');
    let str = "";
    if (crop === "") {
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`;
      vegetablesBtn.classList.remove("active");
      fruitsBtn.classList.remove("active");
      flowersBtn.classList.remove("active");
    } else {
      flowersDataList.forEach((item) => {
        if (cropRegex.test(item.作物名稱)) {
          str += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
        }
      })
      showList.innerHTML = `
      <tr>
        <td colspan="7" class="text-center p-3">
          請輸入並搜尋想比價的作物名稱^＿^
        </td>            
      </tr>`+ str;
    }
  })

  // 點選排序篩選
  jsSelect.addEventListener("change", function (e) {
    if (jsSelect.value === "topOrder") {
      showList.innerHTML = top_flowersData;
    } else if (jsSelect.value === "middleOrder") {
      showList.innerHTML = middle_flowersData;
    } else if (jsSelect.value === "bottomOrder") {
      showList.innerHTML = bottom_flowersData;
    } else if (jsSelect.value === "averageOrder") {
      showList.innerHTML = average_flowersData;
    } else if (jsSelect.value === "volumeOrder") {
      showList.innerHTML = volume_flowersData;
    }
  })

  // 表頭排序
  sortAdvanced(flowersDataList);
})



// 先拿到各類別資料
axios.get(url).then((res) => {
  const data = res.data;
  vegetablesDataList = data.filter((item) => item.種類代碼 === "N04");
  top_vegetablesData = topOrder(vegetablesDataList);
  middle_vegetablesData = middleOrder(vegetablesDataList);
  bottom_vegetablesData = bottomOrder(vegetablesDataList);
  average_vegetablesData = averageOrder(vegetablesDataList);
  volume_vegetablesData = volumeOrder(vegetablesDataList);


  fruitsDataList = data.filter((item) => item.種類代碼 === "N05");
  top_fruitsData = topOrder(fruitsDataList);
  middle_fruitsData = middleOrder(fruitsDataList);
  bottom_fruitsData = bottomOrder(fruitsDataList);
  average_fruitsData = averageOrder(fruitsDataList);
  volume_fruitsData = volumeOrder(fruitsDataList);

  flowersDataList = data.filter((item) => item.種類代碼 === "N06");
  top_flowersData = topOrder(flowersDataList);
  middle_flowersData = middleOrder(flowersDataList);
  bottom_flowersData = bottomOrder(flowersDataList);
  average_flowersData = averageOrder(flowersDataList);
  volume_flowersData = volumeOrder(flowersDataList);
}).catch((err) => {
  console.log(err);
})

// 依上價排序函式
function topOrder(tablesDataList, up) {
  let newTablesDataList;
  if (!up) {
    newTablesDataList = tablesDataList.slice().sort((a, b) => b.上價 - a.上價);
  } else {
    newTablesDataList = tablesDataList.slice().reverse().sort((a, b) => a.上價 - b.上價);
  }
  let top_Data = "";
  newTablesDataList.forEach((item) => {
    top_Data += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
  })
  return `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ top_Data;
}

// 依中價排序函式
function middleOrder(tablesDataList, up) {
  let newTablesDataList;
  if (!up) {
    newTablesDataList = tablesDataList.slice().sort((a, b) => b.中價 - a.中價);
  } else {
    newTablesDataList = tablesDataList.slice().reverse().sort((a, b) => a.中價 - b.中價);
  }
  let top_Data = "";
  newTablesDataList.forEach((item) => {
    top_Data += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
  })
  return `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ top_Data;
}

// 依下價排序函式
function bottomOrder(tablesDataList, up) {
  let newTablesDataList;
  if (!up) {
    newTablesDataList = tablesDataList.slice().sort((a, b) => b.下價 - a.下價);
  } else {
    newTablesDataList = tablesDataList.slice().reverse().sort((a, b) => a.下價 - b.下價);
  }
  let top_Data = "";
  newTablesDataList.forEach((item) => {
    top_Data += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
  })
  return `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ top_Data;
}

// 依平均價排序函式
function averageOrder(tablesDataList, up) {
  let newTablesDataList;
  if (!up) {
    newTablesDataList = tablesDataList.slice().sort((a, b) => b.平均價 - a.平均價);
  } else {
    newTablesDataList = tablesDataList.slice().reverse().sort((a, b) => a.平均價 - b.平均價);
  }
  let top_Data = "";
  newTablesDataList.forEach((item) => {
    top_Data += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
  })
  return `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ top_Data;
}

// 依交易量排序函式
function volumeOrder(tablesDataList, up) {
  let newTablesDataList;
  if (!up) {
    newTablesDataList = tablesDataList.slice().sort((a, b) => b.交易量 - a.交易量);
  } else {
    newTablesDataList = tablesDataList.slice().reverse().sort((a, b) => a.交易量 - b.交易量);
  }
  let top_Data = "";
  newTablesDataList.forEach((item) => {
    top_Data += `    
          <tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
          </tr>`;
  })
  return `
  <tr>
    <td colspan="7" class="text-center p-3">
      請輸入並搜尋想比價的作物名稱^＿^
    </td>            
  </tr>`+ top_Data;
}


// 表頭排序
function sortAdvanced(dataList) {
  jsSortAdvanced.addEventListener("click", function (e) {
    if (e.target.getAttribute("data-price") === "上價") {
      if (e.target.getAttribute("data-sort") === "down") {
        showList.innerHTML = topOrder(dataList);
      } else {
        showList.innerHTML = topOrder(dataList, "up");
      }
    } else if (e.target.getAttribute("data-price") === "中價") {
      if (e.target.getAttribute("data-sort") === "down") {
        showList.innerHTML = middleOrder(dataList);
      } else {
        showList.innerHTML = middleOrder(dataList, "up");
      }
    } else if (e.target.getAttribute("data-price") === "下價") {
      if (e.target.getAttribute("data-sort") === "down") {
        showList.innerHTML = bottomOrder(dataList);
      } else {
        showList.innerHTML = bottomOrder(dataList, "up");
      }
    } else if (e.target.getAttribute("data-price") === "平均價") {
      if (e.target.getAttribute("data-sort") === "down") {
        showList.innerHTML = averageOrder(dataList);
      } else {
        showList.innerHTML = averageOrder(dataList, "up");
      }
    } else if (e.target.getAttribute("data-price") === "交易量") {
      if (e.target.getAttribute("data-sort") === "down") {
        showList.innerHTML = volumeOrder(dataList);
      } else {
        showList.innerHTML = volumeOrder(dataList, "up");
      }
    }
  })
}



// throw "stop execution";  //終止程序