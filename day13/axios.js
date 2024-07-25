//Task 7:
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(`Data fetched:`, response.data);
  } catch (error) {
    console.error(`Error fetching data:`, error);
  }
}

fetchData();
