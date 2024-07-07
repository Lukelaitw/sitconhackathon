# 公投系統 README

- **團隊名稱**：沒想法
- **成員姓名**：賴禹衡、彭詳睿、(陳泓安)
- **競賽議題**：{公創新世代：學生力量與科技共創公民參與}

## 概述

公投系統是一個基於 Node.js 的小型應用程式，旨在為學校內部提供一個討論和投票的平台。該系統允許學生提交提案、進行討論，並投票對提案表達自己的意見。其中提案、討論、投票等都是匿名進行，希望能讓學生們勇於表達自己的意見。根據提案類型不同，系統將有不同的後續處理流程。

## 功能特點

- **身分驗證**: 使用者需使用學校身分登入，確保只有校內的學生能參與討論和投票。
- **提案類型**:
  - **政策提案**: 一旦通過投票門檻，可提交給校務單位審核。
  - **議題立場**: 可以作為學生會對議題發表聲明的依據，反映多數學生的意見。
- **投票方式**: 投票選項分為支持、反對、無意見，使學生們也能表達「不想發聲」的意見。

## 技術實現

- **後端**: 使用 Node.js 在本機建立伺服器，處理用戶驗證、提案儲存和投票計數等功能。
- **前端**: 簡單的使用者界面，讓用戶可以瀏覽現有提案提案、討論、投票，以及提出新提案。

## 安裝和運行

1. **安裝 Node.js**: 確保本地開發環境已安裝 Node.js。
   
2. **下載專案**: 

   ```bash
   git clone https://github.com/raypeng1729/sitcon-hackathon.git
   cd sitcon-hackathon
   ```

3. **安裝套件**: 在專案目錄下執行以下命令安裝所需的套件。

   ```bash
   npm install express body-parser
   ```
   
4. **運行應用**: 使用以下命令啟動應用程式。

   ```bash
   node server.js
   ```

5. **訪問應用**: 在瀏覽器中輸入 `http://localhost:3000` (或你設定的端口) 訪問應用程式。

## 未來展望

- **去識別化**: 優化資料庫中儲存學生帳密、投票資料方式，理想狀態是讓管理者也無法從紀錄得知每位學生投什麼選項，實踐不記名投票的精神。
- **開發留言板功能**: 我們因為時間因素未能將留言板開發完成，希望未來能補齊這項功能，讓學生有個可以表達意見的平台。