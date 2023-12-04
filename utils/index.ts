export async function fetchCar() {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "449ec0df5emshfc488b74781fc4ep15877fjsna95f9d1bd053",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
