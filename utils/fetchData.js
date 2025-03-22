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

    const data = await response.json().catch((err) => {
      console.error('Error parsing JSON:', err);
      return null;
    });

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
