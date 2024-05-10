export default async function ListRegions(retries = 3) {
  
  let attempt = 0;

  const fetchData = async () => {
      try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/regions`, {
              credentials: "include",
              next: {
                 
                  revalidate: 300
              },
          });
          if (!response.ok) {
                throw new Error("Medusa Backend failed to fetch regions ")             
          }
          const { regions } = await response.json();
          
          
          
          return regions;
      } catch (error) {
          console.error("Error fetching regions:", error);
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
