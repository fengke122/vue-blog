<template>
  <div class="home-body">
    <el-container>
      <!--   顶部容器   -->
      <el-header direction="horizontal">
        <div class="search-box">
          <div class="search-box-form">
            <div class="search-input-box">
              <input type="text" class="search-input">
            </div>
            <div class="search-btn-box">
              <img class="search-btn-icon" src="~@/assets/img/search.png" width="26" height="26" alt="">
            </div>
          </div>
        </div>
        <div class="top-box">
          <div class="top-box-item">
            <router-link to="/home">
              <svg t="1675689429920" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1581" width="25" height="25"><path d="M957.9 391.5c-1.1-7.5-5.5-14.2-12-18.5L527.4 98.9c-4.6-3.1-10.1-4.7-15.7-4.7-5.7 0-11.1 1.6-15.7 4.7L77.4 373.1c-6.2 4.1-10.4 10.3-11.6 17.4-1.2 7 0.5 14 4.8 19.7 5.2 6.9 13.7 11.1 22.6 11.1 5.6 0 11.1-1.6 15.7-4.7l40.2-26.3v435.4c0 57.8 45.8 104.7 102.2 104.7h520.8c56.3 0 102.2-47 102.2-104.7V390.2l40.4 26.5c5.7 3.5 11.1 5.2 16.4 5.2 7.9 0 15.2-3.8 21.5-11.4 4.4-5.4 6.3-12.1 5.3-19zM616.3 884.4H407V631.7c0-54 46.9-97.9 104.6-97.9 57.7 0 104.6 43.9 104.6 97.9v252.7z m202.4-58.8c0 28.6-20.9 51.9-46.6 51.9H665V631.7c0-79.4-68.8-143.9-153.3-143.9-84.5 0-153.3 64.6-153.3 143.9v245.9H251.3c-25.7 0-46.7-23.3-46.7-51.9V353.9l307.1-201.2 307.1 201.2v471.7z" fill="#6B400D" p-id="1582"></path><path d="M511.7 533.8c-57.7 0-104.6 43.9-104.6 97.9v252.7h209.3V631.7c-0.1-54-47-97.9-104.7-97.9z" fill="#FFD524" p-id="1583"></path><path d="M270.3 504.3c-17.5 0-31.7 14.7-31.7 32.8 0 18.1 14.2 32.8 31.7 32.8s31.7-14.7 31.7-32.8c-0.1-18.1-14.3-32.8-31.7-32.8zM270.3 592.9h-1.4c-13.1 0-23.8 10.7-23.8 23.8v212.5c0 13.1 10.7 23.8 23.8 23.8h1.4c13.1 0 23.8-10.7 23.8-23.8V616.7c0-13.1-10.7-23.8-23.8-23.8z" fill="#6B400D" p-id="1584"></path></svg>
              首页</router-link>
          </div>
          <div class="top-box-item">
            <el-dropdown>
              <span class="el-dropdown-link">
                   <svg t="1675690421301" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1722" width="30" height="30"><path d="M282.8 624.4l2.1 1.5h0.1c1.5 0.9 3 1.6 4.7 2 9.3 2.3 18.7-3.5 21-12.8 1.1-4.6 0.4-9.3-1.9-13-22.9-46.3-26.4-88.5-12.3-145.9l0.7-3.5c0.7-6.5-2.2-13-8-16.8-1.6-1-3.2-1.7-4.9-2.1-8.1-2-16.5 2.1-20.1 9.8l-1.4 4.5c-15.8 64-11.4 114 14.4 167.2 0.1 0.1 3.4 7.6 5.6 9.1zM285.9 413.7c1.7 1.1 3.5 1.9 5.4 2.4 4.8 1.3 9.9 0.7 14.3-1.8s7.5-6.5 8.8-11.4c2.2-7.9-1-16.2-7.8-20.7-1.7-1.1-3.5-1.9-5.4-2.4-10-2.7-20.3 3.2-23.1 13.1-2.2 8 0.9 16.3 7.8 20.8z" fill="#6B400D" p-id="1723"></path><path d="M958.5 404.7l-1.7-10.9-3.2-10.7-2.1-5.3-2.5-5.1-2.8-5-3.2-4.8-3.4-4.6-3.7-4.4-4-4.2-4.3-4-4.5-3.9-4.7-3.7-5-3.5-5.2-3.4-5.4-3.2-5.6-3-5.8-2.9-6-2.7-6.2-2.6-6.4-2.4-6.5-2.3-6.7-2.2-6.9-2-6.7-1.9-7.2-1.8-7.4-1.6-7.6-1.5-7.8-1.4-7.9-1.3-8.1-1.1-8.2-1-8.4-0.9-9.1-0.5-9.2-10.7-10.7-11.3-11.4-10.7-11.6-10.3-12.1-9.7-12.6-9.2-13-8.6-13.4-8-13.8-7.4-14.2-6.8-14.5-6.2-14.9-5.5-15.1-4.8-15.5-4.1-15.7-3.4-16-2.7-16.2-1.9-16.4-1.2-16.7-0.4-17.6 0.5-17.4 1.3-17.1 2.2-16.9 3-16.5 3.8-16.2 4.6-15.9 5.4-15.6 6.1-15.1 6.8-14.7 7.6-14.3 8.2-13.9 8.9-13.4 9.5-12.9 10.1-12.4 10.8-11.9 11.3-11.3 11.9-10.7 12.4-10.2 12.9-9.5 13.4-8.9 13.9-8.2 14.3-7.6 14.7-6.8 15.2-6.1 15.6-5.4 15.9-4.6 16.2-3.8 16.6-2.9 17.6-8.9 6.5-7.2 5.5-7 5.5-6.7 5.6-6.5 5.6-6.3 5.6-6 5.6-5.8 5.7-5.5 5.7-5.3 5.7-5 5.7-4.8 5.8L94 537l-4.2 5.8-3.9 5.8-3.6 5.9-3.3 5.9-3.1 5.9-2.7 5.9-2.4 6-2.1 6-1.7 6-1.4 6.1-1 6.1-0.6 6.1-0.2 6.1 0.2 6.1 0.6 6.1 1 6 1.5 5.9 2 5.8 4.5 10.2 5.8 9.6 6.9 8.9 8 8.1 8.9 7.5 9.8 6.8 10.6 6.2 11.4 5.6 12.1 5 12.9 4.5 13.5 4 14.2 3.4 14.9 3 15.5 2.4 16.1 2 14.3 1 7.3 8.5 6.4 7 6.5 6.7 6.7 6.6 6.9 6.4 7.1 6.2 7.2 6 7.4 5.8 7.6 5.6 7.7 5.4 7.9 5.2 8.1 5 8.2 4.8 8.3 4.5 8.5 4.3 8.6 4.1 8.7 3.9 8.9 3.6 9 3.4 9.1 3.1 9.2 2.9 9.3 2.6 9.4 2.4 9.6 2.1 9.6 1.8 9.7 1.6 9.8 1.3 9.9 1 10 0.7 10 0.4 10.1 0.1 16.3-0.4 16-1.1 15.8-1.8 15.6-2.6 15.4-3.2 15.1-4 14.8-4.6 14.5-5.3 14.2-5.9 13.9-6.5 13.5-7.1 13.2-7.7 12.8-8.2 12.4-8.8 12-9.3 11.6-9.8 11.1-10.3 10.6-10.8 10.2-11.2 9.6-11.7 9.2-12.1 8.6-12.5 8.1-12.9 7.5-13.3 6.9-13.6 6.3-14 5.7-14.3 5.1-14.6 4.4-14.9 3.7-15.2 3-15.4 0.8-7.4 2.5-1.8 13.3-10 12.5-10.1 11.8-10.2 11-10.2 10.1-10.3 9.3-10.4 8.4-10.5 7.5-10.6 6.6-10.6 5.6-10.7 4.6-10.8 3.5-10.9 2.3-11 1-11.1-0.6-11.3z m-752.4 93.2l1.2-15.5 2-15.3 2.7-15 3.4-14.8 4.1-14.5 4.8-14.2 5.5-13.9 6.1-13.6 6.8-13.2 7.4-12.8 7.9-12.4 8.5-12 9.1-11.5 9.6-11.1 10.1-10.6 10.6-10.1 11.1-9.6 11.5-9.1 12-8.5 12.4-7.9 12.8-7.4 13.2-6.8 13.6-6.1 13.9-5.5 14.2-4.8 14.5-4.1 14.8-3.4 15-2.7 15.3-1.9 15.5-1.2 15.8-0.4 14.9 0.4 14.7 1.1 14.5 1.7 14.3 2.4 14 3.1 13.8 3.7 13.5 4.3 13.3 4.9 13 5.5 12.6 6.1 12.3 6.6 12 7.2 11.6 7.7 11.2 8.2 10.8 8.7 10.4 9.2 10 9.7 9.5 10.1 9.1 10.5 8.6 10.9 8.1 11.3 7.6 11.7 7.1 12 6.5 12.4 6 12.7 5.4 13 4.8 13.3 4.2 13.6 3.6 13.8L812 458l2.3 14.4 1.1 7.4-2.9 3.6-6.3 7.1-7.1 7.2-7.8 7.3-8.5 7.3-9.1 7.3-9.8 7.3-10.4 7.3-11 7.3-11.6 7.2-12.2 7.1-12.7 7-13.2 6.9-13.7 6.8-14.2 6.6-14.7 6.5-15.1 6.3-15.6 6.1-15.9 5.9-16.4 5.6-16.7 5.4-17.1 5.2-17.2 4.8-17.1 4.5-17 4.1-16.8 3.7-16.6 3.3-16.4 2.9-16.2 2.5-15.9 2.2-15.6 1.8-15.3 1.4-14.9 1.1-14.6 0.7-14.2 0.3h-13.8l-13.3-0.4-12.8-0.7-12.3-1.1-11.8-1.4-11.2-1.8-10.6-2.1-10-2.4-9.3-2.7-6.4-1.9-2.5-5.6-3.4-7.9-1.6-4-3-8-2.8-8.1-1.3-4.1-1.3-4.1-1.2-4.2-1.1-4.2-1.1-4.2-1-4.2-1-4.3-0.9-4.3-1.6-8.6-0.7-4.3-0.7-4.4-0.6-4.3-0.5-4.4-0.5-4.4-0.8-8.9-0.3-4.5-0.2-4.5-0.2-4.5-0.1-4.5v-4.5l0.4-16z m80.4 200.7l-16.8-0.5-16.2-1-15.6-1.4L223 694l-14.2-2.2-13.5-2.7-12.7-3.1-11.9-3.5-11.1-3.8-10.1-4.2-9.2-4.5-8.3-4.8-7.3-5.1-6.3-5.3-5.3-5.5-4.4-5.6-3.5-5.8-2.6-6-1.1-3.4-0.9-3.4-0.6-3.5-0.3-3.6-0.1-3.6 0.1-3.7 0.4-3.8 0.7-3.9 0.9-4 1.2-4.2 1.5-4.3 1.8-4.4 2-4.5 2.4-4.6 2.6-4.6 2.9-4.7 3.2-4.8 3.5-4.9 3.8-4.9 4.1-4.9 4.3-5 4.6-5 4.9-5 5.2-5.1 5.4-5.1 5.7-5.1 6-5.1 3.3-2.7-0.1 3.6 0.1 5.1 0.1 5 0.2 5 0.3 5 0.2 3.2-1.6 2.4-1.7 2.6-1.6 2.6-1.5 2.6-1.5 2.7-1.4 2.7-1.3 2.7-1.2 2.7-1.1 2.7-1.1 2.7-1 2.8-0.9 2.7-0.8 2.8-0.7 2.8-0.6 2.8-0.6 2.8-0.5 2.8-0.3 2.8-0.3 2.8-0.1 2.8-0.1 2.8v2.8l0.2 2.8 0.3 2.8 0.4 2.8 0.5 2.8 0.6 2.8 0.7 2.8 0.8 2.7 0.9 2.7 3.8 8.5 4.8 8 5.8 7.3 6.6 6.7 7.3 6.1 8 5.6 8.7 5.1 9.3 4.5 9.9 4.1 10.4 3.6 11 3.2 11.5 2.8 12 2.4 12.5 2 13 1.6 13.4 1.2 13.9 0.8 14.3 0.4 14.7 0.1 15.1-0.3 15.4-0.7 15.8-1.1 16.1-1.5 16.4-1.9 16.6-2.3 15.6-2.5-18.7 3.3-20.3 3.2-20 2.8-19.6 2.2-19.3 1.8-18.8 1.3-18.4 0.9-17.9 0.4-17.8-0.1z m516.1-91.7l-4.5 13-5.1 12.8-5.6 12.5-6.2 12.2-6.7 11.9-7.2 11.5-7.7 11.2-8.2 10.8-8.6 10.4-9 10.1-9.5 9.6-9.9 9.2L704 751l-10.7 8.3-11.1 7.8-11.4 7.4-11.8 6.8-12.1 6.3-12.4 5.8-12.7 5.2-13 4.7-13.2 4.1-13.5 3.5-13.7 2.9-13.9 2.3-14.2 1.7-14.3 1-14.6 0.3-9.1-0.1-9-0.4-8.9-0.7-8.9-0.9-8.8-1.2-8.7-1.4-8.6-1.7-8.5-1.9-8.4-2.1-8.3-2.3-8.2-2.6-8.1-2.8-8-3-7.9-3.2-7.8-3.5-7.7-3.7-7.6-3.8-7.4-4.1-7.3-4.3-7.2-4.5-7.1-4.6-6.9-4.8-6.8-5-6.6-5.2-6.5-5.4-6.3-5.6-6.7-6.2 22.9-0.1 19.2-0.9 19.6-1.4 20.1-1.9 20.4-2.3 20.7-2.8 21.1-3.3 21.3-3.8 21.6-4.3 21.8-4.8 22-5.3 22.2-5.8 22.3-6.3 22.1-6.7 21.7-7 21.3-7.4 20.8-7.7 20.3-7.9 19.8-8.2 19.2-8.4 18.6-8.7 18-8.9 17.4-9.1 16.8-9.3 15.6-9.1-4.3 14.2z m119.9-185.4l-1.5 7.3-2.4 7.7-3.4 8-4.3 8.3-5.3 8.6-6.2 8.8-7.2 8.9-8.1 9.1-9 9.2-9.9 9.2-10.7 9.3-11.6 9.3-12.4 9.3-13.1 9.2-13.9 9.2-14.6 9.1-15.3 9-16 8.9-16.7 8.7-17.3 8.5-17.9 8.4-18.5 8.2-19.1 7.9-19.6 7.7-3.5 1.3 3.4-1.3 15.8-6.6 15.4-6.8 14.9-7 14.4-7.1 14-7.3 13.5-7.4 12.9-7.6 12.4-7.7 11.8-7.8 11.3-7.9 10.7-8 10.1-8.1 9.4-8.2 8.8-8.3 8.2-8.4 7.5-8.4 6.8-8.5 6.1-8.6 5.3-8.7 4.6-8.8 3.7-8.9 2.9-9 1.9-9.1 0.9-9.2-0.3-9.2-1.4-9.1-2.6-8.9-0.9-2.3-1-2.3-1-2.2-1.1-2.2-1.2-2.2-1.3-2.1-1.4-2.1-1.4-2-1.5-2-1.5-2-1.6-1.9-1.7-1.9-1.7-1.8-1.8-1.8-1.8-1.7-1.9-1.7-1.9-1.7-2-1.6-2-1.6-2.1-1.5-2.1-1.5-2.2-1.5-2.2-1.4-2.3-1.4-2.3-1.3-2.3-1.3-2.4-1.3-2.4-1.2-2.4-1.2-1.7-0.8-4.9-9.3-7.9-13.5-0.4-0.6 1.3 0.2 7.3 1.2 7.1 1.3 6.9 1.4 6.7 1.5 6.5 1.6 6.3 1.7 6.1 1.8 5.8 1.9 5.6 2 5.4 2.1 5.1 2.2 4.9 2.2 4.7 2.3 4.4 2.4 4.2 2.5 3.9 2.6 3.7 2.6 3.4 2.7 3.2 2.7 2.9 2.8 2.6 2.8 2.4 2.8 2.2 2.9 1.9 2.9 1.7 3 1.5 3 1.2 3.1 1.8 6.2 1 6.3 0.2 6.6-0.5 6.4z" fill="#6B400D" p-id="1724"></path><path d="M321.8 698.3l18.3-0.9 18.8-1.3 19.3-1.8 19.6-2.2 20-2.8 20.4-3.1 18.7-3.4-15.6 2.5-16.6 2.3-16.4 1.8-16.1 1.5-15.7 1.1-15.5 0.8-15.1 0.3-14.6-0.1-14.3-0.4-13.9-0.8-13.4-1.2-13-1.6-12.5-2-12-2.4-11.5-2.8-11-3.2-10.4-3.6-9.9-4.1-9.3-4.5-8.6-5.1-8.1-5.6-7.3-6.1-6.6-6.8-5.8-7.3-4.8-8-3.8-8.5-0.9-2.7-0.8-2.7-0.7-2.8-0.6-2.7-0.5-2.8-0.4-2.8-0.2-2.8-0.2-2.8v-5.6l0.2-2.8 0.3-2.9 0.3-2.8 0.5-2.8 0.6-2.7 0.6-2.8 0.7-2.8 0.8-2.7 1-2.8 1-2.7 1-2.7 1.2-2.7 1.2-2.7 1.3-2.7 1.4-2.7 1.5-2.7 1.5-2.6 1.6-2.7 1.7-2.6 1.6-2.4-0.2-3.2-0.3-5-0.2-5.1-0.1-5v-5.1l0.1-3.6-3.4 2.8-6 5.1-5.6 5.1-5.5 5.1-5.1 5-4.9 5.1-4.7 5-4.3 5-4.1 4.9-3.8 4.9-3.5 4.8-3.2 4.8-2.9 4.8-2.6 4.6-2.4 4.5-2 4.5-1.8 4.4-1.5 4.3-1.2 4.1-0.9 4.1-0.6 3.9-0.4 3.8-0.2 3.8 0.1 3.6 0.4 3.6 0.6 3.4 0.8 3.5 1.1 3.4h0.1l2.6 6 3.5 5.8 4.4 5.6 5.4 5.4 6.3 5.3 7.3 5.1 8.3 4.8 9.2 4.5 10.1 4.2 11.1 3.9 11.9 3.4 12.7 3.1 13.4 2.7L223 694l15 1.8 15.5 1.4 16.2 0.9 16.8 0.5 17.4 0.1zM922 401.6l-1.8-6.2-1.3-3.1-1.5-3-1.7-3-1.9-2.9-2.1-2.9-2.4-2.9-2.7-2.8-2.9-2.7-3.1-2.8-3.4-2.6-3.7-2.6-3.9-2.6-4.1-2.4-4.5-2.5-4.6-2.3-5-2.2-5.1-2.2-5.4-2-5.6-2-5.8-1.9-6.1-1.8-6.3-1.7-6.4-1.5-6.7-1.5-6.9-1.3-7.1-1.3-7.2-1.2-1.4-0.1 0.4 0.6 7.9 13.4 5 9.4 1.6 0.7 2.5 1.2 2.4 1.3 2.4 1.2 2.3 1.3 2.3 1.4 2.3 1.4 2.2 1.4 2.1 1.4 2.2 1.5 2 1.5 2 1.6 2 1.6 1.9 1.7 1.9 1.7 1.8 1.7 1.8 1.8 1.7 1.8 1.7 1.8 1.5 1.9 1.6 2 1.4 2 1.4 2 1.4 2.1 1.2 2.1 1.3 2.2 1.1 2.2 1 2.2 1 2.3 0.9 2.3 2.6 8.9 1.4 9.2 0.3 9.2-0.9 9.2-1.9 9.1-2.8 9-3.8 8.9-4.5 8.8-5.4 8.7-6.1 8.6-6.8 8.5-7.5 8.4-8.2 8.4-8.8 8.2-9.5 8.2-10.1 8.2-10.7 8-11.3 7.9-11.8 7.8-12.4 7.7-13 7.6-13.5 7.4-13.9 7.4-14.5 7.1-14.9 6.9-15.4 6.8-15.8 6.6-3.4 1.3 3.5-1.3 19.6-7.7 19-7.9 18.5-8.1 17.9-8.4 17.4-8.5 16.6-8.7 16.1-8.9 15.3-9 14.6-9.1 13.9-9.1 13.2-9.3 12.3-9.3 11.6-9.2 10.7-9.3 9.9-9.3 9-9.1 8.1-9.1 7.2-9 6.2-8.7 5.3-8.6 4.3-8.3 3.4-7.9 2.4-7.7 1.5-7.3 0.7-6.9-0.2-6.7z" fill="#FFD524" p-id="1725"></path></svg>
                   <span style="color: #606266">分类</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >vue</el-dropdown-item>
                <el-dropdown-item >Java</el-dropdown-item>
                <el-dropdown-item >SpringBoot</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="top-box-item">
            <a href="">
              <svg t="1675690819658" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1551" width="25" height="25"><path d="M561.1 250.2m-186.3 0a186.3 186.3 0 1 0 372.6 0 186.3 186.3 0 1 0-372.6 0Z" fill="#FFCE00" p-id="1552"></path><path d="M459.7 906.5c-11.5 0-23-4.4-31.8-13.2L115.7 581.1c-8.4-8.4-13.2-19.9-13.2-31.8s4.7-23.4 13.2-31.8l383.2-383.2c8.4-8.4 19.9-13.2 31.8-13.2h0.8l306.9 5.2c24.2 0.4 43.8 20 44.2 44.2l5.2 306.9c0.2 12.2-4.5 24-13.2 32.6L491.5 893.3c-8.8 8.8-20.3 13.2-31.8 13.2zM211.2 549.3l248.5 248.5L797.6 460l-4.2-244.3-244.3-4.2-337.9 337.8z" fill="#242F44" p-id="1553"></path></svg>
              <span>标签</span>
            </a>
          </div>
          <div class="top-box-item">
            <a href="">
              <svg t="1675690927818" class="icon-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1697" width="25" height="25"><path d="M622.3 456.8m-247.5 0a247.5 247.5 0 1 0 495 0 247.5 247.5 0 1 0-495 0Z" fill="#FFCE00" p-id="1698"></path><path d="M493.2 749.4c-82.5 0-160.1-32.1-218.5-90.5S184.2 523 184.2 440.4s32.1-160.1 90.5-218.5c58.4-58.4 135.9-90.5 218.5-90.5s160.1 32.1 218.5 90.5c58.4 58.4 90.5 135.9 90.5 218.5S770 600.5 711.6 658.9s-135.9 90.5-218.4 90.5z m0-527.9c-58.5 0-113.5 22.8-154.8 64.1-41.4 41.4-64.1 96.3-64.1 154.8 0 58.5 22.8 113.5 64.1 154.8s96.3 64.1 154.8 64.1 113.5-22.8 154.8-64.1 64.1-96.3 64.1-154.8c0-58.5-22.8-113.5-64.1-154.8-41.4-41.4-96.3-64.1-154.8-64.1zM818 892.5H206c-24.9 0-45-20.1-45-45s20.1-45 45-45h612c24.9 0 45 20.1 45 45s-20.1 45-45 45z" fill="#242F44" p-id="1699"></path></svg>
              <span>关于</span>
            </a>
          </div>
          <div class="top-box-item">
            <!--            <el-avatar :size="50" :src="circleUrl" ></el-avatar>-->
            <!-- 通过flag的值来判断显示哪一个下拉菜单 flag为true代表已经登录 false代表未登录-->
            <el-dropdown v-show="flag">
              <span class="el-dropdown-link">
                <el-avatar :size="50" :src="avatarUrl" ></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid"><router-link to="userindex" class="router-span">个人中心</router-link></el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-tools"><router-link to="userdetil" class="router-span">账号设置</router-link></el-dropdown-item>
                <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown v-show="!flag">
              <span class="el-dropdown-link">
                <el-avatar :size="50" :src="avatarUrl" ></el-avatar>
              </span>
              <el-dropdown-menu v-show="flag" slot="dropdown">
                <el-dropdown-item icon="el-icon-user-login">点击登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
    </el-container>
    <div class="container" v-show="flag">
      <div class="left">
        <div class="blog-list" v-for="(item, index) in paginatedItems"  :key="index" @click="toBlog(item.id)">
          <div >
            <h2>{{ item.title }}</h2>
            <p>{{ item.time }}</p>
          </div>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :total="items.length"
            layout="prev, pager, next"
        ></el-pagination>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="top-avatar">
            <el-avatar :size="96" :src="avatarUrl" ></el-avatar>
            <span>{{ username }}</span>
          </div>
        </div>
        <div class="num">
          <div>
            <h3>121</h3>
            <h6>Articles</h6>
          </div>
          <div>
            <h3>55</h3>
            <h6>Tags</h6>
          </div>
        </div>
        <hr>
        <ul>
          <li><a href=""><span class="category-name">Vue</span><span>27</span></a></li>
          <li><a href=""><span class="category-name">Webpack</span><span>4</span></a></li>
          <li><a href=""><span class="category-name">Blog</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">VuePress</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">Node</span><span>12</span></a></li>
          <li><a href=""><span class="category-name">SpringBoot</span><span>5</span></a></li>
          <li><a href=""><span class="category-name">Css</span><span>39</span></a></li>
          <li><a href=""><span class="category-name">JavaScript</span><span>3</span></a></li>
          <li><a href=""><span class="category-name">效率</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">Git</span><span>3</span></a></li>
          <li><a href=""><span class="category-name">HTML5</span><span>1</span></a></li>
          <li><a href=""><span class="category-name">Sass And Less</span><span>2</span></a></li>
          <li><a href=""><span class="category-name">TypeScript</span><span>5</span></a></li>
        </ul>
      </div>
    </div>
    <div class="bottom-container" v-show="flag"></div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return{
      flag: true, // 将flag传递给子组件
      currentPage: 1,
      pageSize: 7,
      username: "小明",
      avatarUrl: require('@/assets/img/tx.jpg'),
      items: [
        { id:1,title: '文章标题1', time: '2022-01-01' },
        { id:2,title: '文章标题2', time: '2022-01-02' },
        { id:3,title: '文章标题2', time: '2022-01-02' },
        { id:4,title: '文章标题2', time: '2022-01-02' },
        { id:5,title: '文章标题2', time: '2022-01-02' },
        { id:6,title: '文章标题2', time: '2022-01-02' },
        { id:7,title: '文章标题2', time: '2022-01-02' },
        { id:8,title: '文章标题2', time: '2022-01-02' },
        { id:9,title: '文章标题2', time: '2022-01-02' },
        { id:10,title: '文章标题2', time: '2022-01-02' },
        { id:11,title: '文章标题2', time: '2022-01-02' },
      ]
    }
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex);
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    toBlog(id) {
      console.log(id)
      //路由params传参
      this.$router.push({name:'blog',params: {id:id}})
     // html 取参 $route.query.id
     // script 取参 this.$route.query.id
    }
  }
}


</script>
<style scoped>
.home-body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 99vh;
}


.el-header {
  /*background: url("../img/bg2.png") no-repeat;*/
  /*background-size: cover;*/
  border:1px solid #cceff5;
  background:#fafcfd;
  box-shadow:0 0 1px #333;
  margin: 5px;
  margin-bottom: 0px;
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  width: 150px;
  border:1px solid #cceff5;
  /*background: url("../img/bg2.png") no-repeat;*/
  /*background-size: cover;*/
  background:#fafcfd;
  box-shadow:0 0 1px #333;
  margin: 5px;
  height: 885px;
  color: #333;
  text-align: center;
}

.el-main {
  width: 50px;
  border:1px solid #cceff5;
  /*background: url("../img/bg2.png") no-repeat;*/
  /*background-size: cover;*/
  background:#fafcfd;
  margin: 5px;
  margin-left: 1px;
  box-shadow:0 0 1px #333;
  height: 885px;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}


.top-box {
  width: 370px;
  position: relative;
  left: 605px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.top-box-item {
  height: 60px;
  /*background-color: red;*/
}


li {
  list-style: none;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.top-box-item a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}

.icon-2 {
  position: relative;
  top: 5px;
}

.top-box .top-box-item {
  color: #DCDFE6;
}

.el-avatar {
  position: relative;
  top: 5px;
}

.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

}

.search-box {
  margin: 0;
  width: 320px;
  position: relative;
  left: 580px;
}



.search-box-form {
  background-color: rgba(243, 241, 219, 0.89);
  border-radius: 3px;
  display: flex;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.search-input-box {
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 32px;
  background-color: rgba(243, 241, 219, 0.5);
}

.search-btn-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(243, 241, 219, 0.89);
  width: 32px;
  height: 32px;
}

.search-btn-box .icon {
  display: block;
  line-height: 32px;
}

.search-input {
  border-radius: 3px;
  color: rgba(37, 34, 34, 0.6);
  font-size: 16px;
  background-color: rgba(243, 241, 219, 0.89);
  margin-left: 5px;
  outline: none;
  width: 260px;
  height: 28px;
  border: none;
}

.search-input:focus {
  background-color: rgba(114, 109, 109, 0.16);
}

.search-input:hover {
  background-color: rgba(114, 109, 109, 0.16);
}

.search-btn-box:hover {
  border-radius: 3px;
  background-color: rgba(114, 109, 109, 0.16);
}

.container {
  width: 1206px;
  height: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  top: 5px;

}

.left{
  width: 811px;
  height: 100%;
  margin-right: 10px;
  /*border: 1px solid #e1e2e5;*/
  /*box-shadow: 0 2px 4px rgb(0 0 0 / 14%);*/
  /*border-radius: 4px;*/
}

.right{
  flex-grow: 1;
  border: 1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
}

.bottom-container{
  width: 100%;
  height: 100px;
  border-top: 1px solid #e1e2e5;
  position: relative;
  top: 60px;

}
.blog-list {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: .25rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);;
  box-sizing: border-box;
  transition: all .3s;
  background-color: #fff;
  cursor: pointer;
}

.blog-list:hover {
  box-shadow: 0 2px 25px rgb(0 0 0 / 14%);
}

.right-top {
  width: 100%;
  height: 180px;
}

.top-avatar{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* center代表水平方向 */
  justify-content: center;
  /* center代表垂直方向 */
}

.top-avatar span {
  font-size: 24px;
  color: #242424;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 10px;
}

.num {
  display: flex;
  margin: 0 auto;
  width: 80%;
}



.num div:first-child {
  border-right: 1px solid #333;
  text-align: center;
  flex: 0 0 50%;
}
.num div:first-child h3 {
  margin-bottom: 10px; /* 这里的值可以根据您的需要进行调整 */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
}

.num div:first-child h6 {
  margin: 0;
}
.num div:last-child {
  text-align: center;
  flex: 0 0 50%;
}

.num div:last-child h3 {
  margin-bottom: 10px; /* 这里的值可以根据您的需要进行调整 */
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
}

.num div:last-child h6 {
  margin: 0;
}

hr {
  width: 320px;
  border: 0;
  border-top: 1px solid #eaecef;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  margin-top: 50px;
}

.right ul {
  list-style-type: none;
  padding: 10px;
  line-height: 2.2;
  display: flex;
  flex-direction: column; /* 将子元素的排列方式设置为垂直方向 */
  align-items: center; /* 将子元素垂直居中对齐 */
  justify-content: center; /* 可选：将子元素水平居中对齐 */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.right ul li {
  width: 80%;
  margin-bottom: .4rem;
  padding: .4rem .8rem;
  border-radius: .25rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transform: scale(1); /* 默认大小 */
  transition: transform 0.2s ease-in-out; /* 添加动画过渡效果，时间为 0.2s，缓动函数为 ease-in-out */
}

li a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #242424;
}

.right li:hover {
  transform: scale(1.1); /* 鼠标悬停时放大 1.1 倍 */
}

 li:hover a span:nth-child(1) {
  color: #3eaf7c;
}

li:nth-child(2n-1) a span:nth-child(2) {
  background-color: rgb(103, 204, 134);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}

li:nth-child(2n) a span:nth-child(2) {
  background-color: rgb(248, 178, 106);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}

li:nth-child(3n) a span:nth-child(2) {
  background-color: rgb(244, 126, 96);
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  line-height: 1.6rem;
  border-radius: .25rem;
  font-size: 13px;
  color: #fff;
}


.category-name {
  font-weight: 500;
}



.router-span {
  display: inline-block;

}

.router-span:hover {
  color: #3f9dfe;
}


</style>

