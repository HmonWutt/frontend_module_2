async function processData(url, callback) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    callback(data);
    return data;
  } catch (error) {
    alert(`An error occurred during data fetching: ${error.message}`);
    console.error('An error occurred during data fetching:', error.message);
  }
}
export default processData;
