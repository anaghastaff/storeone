export default async function FetchProducts(retries = 3) {
  
  let attempt = 0;

  const fetchData = async () => {
      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products`, {
              credentials: "include",
              next: {
                  cache: 'force-cache',
                  revalidate: 300
              },
          });
          if (!response.ok) {
                throw new Error("Medusa Backend failed to ")             
          }
          const { products, limit, offset, count, isLoading } = await response.json();
          
          console.log(products.length);
          
          return products;
      } catch (error) {
          console.error("Error fetching products:", error);
          throw error; // Re-throw the error to trigger retries
      }
  };

  while (attempt < retries) {
      try {
          return await fetchData(); // Attempt to fetch data
      } catch (error) {
          attempt++;
          console.log(`Retry attempt ${attempt}/${retries}`);
      }
  }

  // If all retries fail, return an empty array
  console.error("Failed to fetch products after retries");
  return [];
}
