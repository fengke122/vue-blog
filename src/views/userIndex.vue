<template>
    <div>
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
                   <span>分类</span>
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
                  <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
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
      <div class="top-header"> <div class="top-img"></div></div>
      <div class="container">
        <div class="aside">
          <span class="security-title">个人中心</span>
          <ul>
            <li class="security-list" @click="showContent('content1')">
              <svg t="1675793586412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3378" width="18" height="18"><path d="M640 790.528H297.504v-0.096l86.496 0.032v-118.88c0-0.8 0.224-1.536 0.224-2.304 1.28-69.6 57.984-125.888 127.776-125.888s126.496 56.32 127.776 125.888c0 0.768 0.224 1.504 0.224 2.304v118.944z m240.896-427.68L800 309.856V207.168a32 32 0 1 0-64 0v60.8l-206.464-135.328A31.296 31.296 0 0 0 511.424 128a31.168 31.168 0 0 0-17.6 4.64L142.464 362.88a32 32 0 0 0 35.072 53.536L192 406.912V800c0 30.08 27.168 54.592 60.576 54.592h518.848C804.832 854.56 832 830.08 832 800V407.36l13.856 9.056a31.968 31.968 0 0 0 35.04-53.536z" fill="#5E5E5E" p-id="3379"></path></svg>
              <span>首页</span>
            <li class="security-list" @click="showContent('content2')">
              <svg t="1675793645909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3549" width="18" height="18"><path d="M813.728 640c-3.904-1.728-58.56-25.6-129.312-45.792a883.616 883.616 0 0 0-72.608-17.568c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.248-25.472 5.408-50.112 11.904-72.8 18.688a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.688 63.808 46.688h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.584-21.952-64.384-50.272-76" fill="#969697" p-id="3550"></path></svg>
              <span>我的头像</span></li>
            <li class="security-list" >
              <svg t="1675793674566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3720" width="18" height="18"><path d="M672 501.44c0 88.192-71.776 160-160 160s-160-71.808-160-160c0-88.256 71.776-160 160-160s160 71.744 160 160m209.472-104.96a31.776 31.776 0 0 0-32.832-23.2 62.688 62.688 0 0 1-16.64-1.152 63.808 63.808 0 0 1-42.88-30.72 63.744 63.744 0 0 1 2.112-67.488 32 32 0 0 0-3.68-39.968c-19.584-20.16-41.632-37.248-64.832-52.544-35.808-23.616-74.976-41.92-116.864-52.448a31.968 31.968 0 0 0-36.48 16.832 63.68 63.68 0 0 1-57.28 35.616h-0.192a63.68 63.68 0 0 1-57.28-35.616 32 32 0 0 0-36.48-16.832c-41.92 10.56-81.056 28.832-116.864 52.48-23.2 15.264-45.248 32.352-64.832 52.512a32 32 0 0 0-3.712 40 63.68 63.68 0 0 1 2.112 67.456A63.392 63.392 0 0 1 192 372.032a62.816 62.816 0 0 1-16.672 1.28 31.52 31.52 0 0 0-32.8 23.168A383.136 383.136 0 0 0 128 501.44c0 35.616 4.864 70.912 14.528 104.864a31.904 31.904 0 0 0 32.8 23.2c5.664-0.32 11.264 0.224 16.672 1.312a63.776 63.776 0 0 1 40.736 98.048 32 32 0 0 0 3.712 40c19.584 20.16 41.632 37.248 64.8 52.544 35.84 23.68 74.976 41.92 116.896 52.416a31.936 31.936 0 0 0 36.48-16.832A63.648 63.648 0 0 1 512 821.44c24.512 0 46.496 13.632 57.376 35.584a32 32 0 0 0 36.48 16.832c41.92-10.496 81.056-28.768 116.864-52.416 23.2-15.296 45.248-32.384 64.832-52.576a32 32 0 0 0 3.68-39.968 63.68 63.68 0 0 1-2.112-67.456c9.408-16.32 24.992-27.2 42.88-30.72a65.28 65.28 0 0 1 16.64-1.184c15.04 0.896 28.704-8.736 32.832-23.2A384.64 384.64 0 0 0 896 501.44c0-35.648-4.896-70.944-14.528-104.928" fill="#969697" p-id="3721"></path></svg>
              <router-link to="/userdetil">账号设置</router-link>
            </li>
            <li class="security-list">
              <svg t="1675782321359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4792" width="19" height="19"><path d="M526.848 886.784c202.666667-81.066667 371.221333-327.530667 373.397333-545.92l0.853334-85.333333c0-1.408-2.090667-3.733333-3.52-3.861334l-6.656-0.64c-100.074667-9.770667-247.658667-58.517333-333.952-110.293333l-30.250667-18.133333c-5.418667-3.264-18.282667-2.602667-23.253333 1.130666-81.792 61.354667-226.581333 116.586667-328.362667 125.226667l-38.144 3.264c-1.664 0.149333-3.861333 2.517333-3.882667 4.138667l-0.853333 85.333333c-2.154667 218.197333 162.538667 464.128 364.928 545.066667l14.848 5.952 14.848-5.930667zM90.410667 255.936c0.234667-23.530667 19.264-44.202667 42.922666-46.229333l38.144-3.242667C265.28 198.485333 402.474667 146.154667 477.866667 89.6c18.858667-14.144 50.517333-15.786667 70.826666-3.605333l30.229334 18.154666c80.853333 48.512 222.336 95.253333 316.138666 104.405334l6.656 0.64c23.466667 2.282667 42.261333 23.232 42.026667 46.741333l-0.853333 85.333333c-2.346667 235.690667-181.461333 497.621333-400.213334 585.130667L512 938.666667l-30.677333-12.266667C262.613333 838.933333 87.232 577.109333 89.578667 341.290667l0.853333-85.354667z" fill="#3D3D3D" p-id="4793"></path><path d="M356.416 496.917333a21.333333 21.333333 0 0 0-30.165333 30.165334l149.333333 149.333333a21.333333 21.333333 0 0 0 31.850667-1.92l234.666666-298.666667a21.333333 21.333333 0 1 0-33.536-26.346666L488.746667 629.248l-132.330667-132.330667z" fill="#3D3D3D" p-id="4794"></path></svg>
              <router-link to="/security">账号安全</router-link>
            <li class="security-list" @click="showContent('content5')">
              <svg t="1675793046913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3207" width="18" height="18"><path d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192" fill="#969697" p-id="3208"></path></svg>
              <span>我的博客</span></li>
          </ul>
        </div>
        <div class="main" >
          <div class="user-home" v-show="showingContent === 'content1'">
            <div class="index-info">
              <div class="home-head">
                <el-avatar :size="100" :src="avatarUrl" ></el-avatar>
              </div>
              <div class="user-info">
                <ul>
                  <li><span v-model="username">{{username}}</span></li>
                  <li><span v-model="level">{{level}}</span></li>
                </ul>
              </div>
              <div class="user-set">
                <a href="">修改资料</a><br>
                <a href="">个人空间</a>
              </div>
            </div>
            <div class="index-info-2">
              <el-descriptions class="margin-top" :column="1" :size="size" border>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                  </template>
                  {{username}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  {{phone}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-email"></i>
                    邮箱
                  </template>
                  {{email}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-level"></i>
                    用户等级
                  </template>
                  {{level}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-code"></i>
                    编程语言
                  </template>
                  {{code}}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-job"></i>
                    工作岗位
                  </template>
                  {{job}}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
          <div  v-show="showingContent === 'content2'">
            <div class="upload-box" >
              <div class="img-clip-wrap">
                <el-upload
                    class="avatar-uploader photo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <div class="img-previeww-wrap">
                <el-avatar :size="120" :src="avatarUrl" ></el-avatar>
                <span class="span-font">当前头像</span>
              </div>
            </div>
            <p class="descript span-font">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M</p>
            <div class="modal-footer">
              <input v-bind:class="computedClasses" type="button" value="更新" class="modal-btn" :disabled="!uploadSuccess" >
            </div>
          </div>
          <div v-show="showingContent === 'content3'">3</div>
          <div v-show="showingContent === 'content4'">4</div>
          <div v-show="showingContent === 'content5'">5</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "userIndex",
  data () {
    return {
      size: "",
      username: "小明",
      phone: "123456789",
      email: "12345679@qq.com",
      code: "Java",
      job : "前端开发",
      exp:   "100",
      level: "用户",
      avatarUrl: require('@/assets/img/tx.jpg'),
      flag: true,
      showingContent: 'content1',
      uploadSuccess: false, // 用于标记是否已经上传成功 可以控制按钮是否启用
      imageUrl: ''  // 用于显示上传成功的图片
    }
  },
  computed: {
    computedClasses() {
      return {
        'error': !this.uploadSuccess,
        //success 通过uploadSuccesss的布尔值来控制 更新按钮的样式
        'success': this.uploadSuccess
      }
    }
  },
  methods: {
    showContent(contentName) {
      // if (this.showingContent === contentName) {
      //   this.showingContent = null; // 如果当前显示的是该内容，则隐藏它
      // } else {
      //   this.showingContent = contentName; // 否则显示该内容，并隐藏其他内容
      // }
      this.showingContent = contentName;
    },
    handleAvatarSuccess(response,res, file) {
      // 上传成功时将 uploadSuccess 标记为 true，启用按钮
      this.uploadSuccess = true
      // 使用 URL.createObjectURL 生成图片的临时地址
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(response, res, file)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }

  }
}
</script>
<style scoped>


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.top-header {
  position: relative;
  top: 2px;
  margin: 0 auto;
  background: url("~@/assets/img/blue.png") repeat-x;
  background-size: auto;
  width: 100%;
  height: 106px;
}

.top-img {
  width: 980px;
  height: 106px;
  margin: 0 auto;
  background: url("~@/assets/img/top-header-bg.png") no-repeat;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  top: 3px;
  margin: auto;
  width: 980px;
  height: 780px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
  background:#fafcfd;
}

.aside {
  width: 150px;
  height: 100%;
  border:1px solid #e1e2e5;
  display: flex;
  flex-direction: column;

}

.main {
  flex: 1;
  height: 100%;
  padding: 40px 20px 0;
  border:1px solid #e1e2e5;
}

.security-title {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #99a2aa;
  cursor: default;
}

ol, ul {
  list-style: none;
}

.aside li {
  display: list-item;
}

.aside li:hover {
  background-color: rgba(214, 217, 217, 0.8);
  cursor: pointer;
}

.aside li a {
  text-decoration: none;
  color: #606266;
  font-size: 14px;
}


.aside li span {
  text-decoration: none;
  color: #606266;
  font-size: 14px;
}
.security-list {
  text-align: center;
  width: 150px;
  height: 48px;
  line-height: 48px;
}

.security-list svg {
  position: relative;
  top: 2px;
}

.index-info {
  width: 100%;
  height: 141px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;


}

.user-info {
  margin-left: 10px;
}

.user-info ul li:nth-child(1) {
  margin-bottom: 5px;
  color: rgb(251, 114, 153);
  font-size: 18px;
  font-weight: 600;
}

.user-info ul li:nth-child(2) {
  border: 1px solid #99a2aa;
  color: #99a2aa;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
}

.user-set {
  position: relative;
  left: 20px;
}

.user-set a{
  border-radius: 4px;
  width: 70px;
  height: 22px;
  border: 1px solid #ced3db;
  text-align: center;
  text-decoration: none;
  color: #6d757a;
  font-size: 12px;
}

.user-set a:hover {
  border: 1px solid #6da1ef;
  color: #6da1ef;
}

.index-info-2 {
  margin-top: 5px;
  width: 100%;
  height: 570px;
  border:1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
}


.el-dropdown-link span {
  color: #606266;
}

.upload-box {
  margin: 0 auto;
  padding: 80px 20px 56px;
  width: 400px;
  height: 318px;
  display: flex;
}

.img-clip-wrap {
  width: 182px;
  margin-right: 40px;
}

.img-previeww-wrap {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.span-font {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #5a6267;
}

div.avatar-uploader.photo{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

div.avatar-uploader.photo:hover{
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.img-previeww-wrap span {
  display: block;
  margin-top: 10px;

}
.descript {
  line-height: 16px;
  text-align: center;
}

.modal-footer {
  width: 780px;
  text-align: center;
  margin-top: 40px;
}

.modal-btn {
  background: #f4f5f7;
  color: #ccd0d7;
  border: #f4f5f7;
  display: inline-block;
  width: 140px;
  height: 40px;
  font-size: 14px;
  line-height: 32px;
  border-radius: 4px;
  text-decoration: none;
}

.success {
  color: #fff;
  background-color: rgba(0,161,214,0.87);
}

.success:hover {
  cursor: pointer;
  background-color: #00b4e4;
}

.router-span {
  display: inline-block;

}

.router-span:hover {
  color: #3f9dfe;
}

a {
  text-decoration: none;
  color: #606266;
  font-size: 13px;
}






</style>