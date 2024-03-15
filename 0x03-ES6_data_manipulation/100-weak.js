// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    // Increment the count for the endpoint
    weakMap.set(endpoint, count + 1);
    // Check if the count is >= 5
    if (count >= 4) {
      // Throw an error if the count is >= 5
      throw new Error('Endpoint load is high');
    }
  } else {
    // Initialize the count for the new endpoint
    weakMap.set(endpoint, 1);
  }
}
