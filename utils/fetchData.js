// utils/fetchData.jsta
export async function fetchData() {
  try {
    const response = await fetch('https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426', {
      headers: {
        'APP_ID': '1068500854479411779'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


// export async function fetchData() {
//     try {
//       const response = await fetch('https://canape2020.stars.ne.jp//data');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }
//  //https://api.example.com/data の部分は、
 //実際のAPIエンドポイントのURLに置き換える必要があります 

// // utils/fetchData.js

// export async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data'); // データを取得するエンドポイントのURLを指定
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }
//   export async function fetchData() {
//     // データの取得処理を実装する
//     // 例: API リクエストを行い、データを取得する
//     const response = await fetch('https://example.com/api/data');
//     const data = await response.json();
//     return data;
//   }
  
  
