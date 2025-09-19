export async function handler(event, context) {
  const response = await fetch("https://api.hyperbeam.com/v0/vm", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.HYPERBEAM_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ url: data.url })
  };
}
