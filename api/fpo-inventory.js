export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { vehicle_query } = req.body;

  try {
    const makeRes = await fetch('https://hook.eu2.make.com/jiu0j8klgkvcrvx9j1w8rde40gceo2yc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicle_search_string: vehicle_query })
    });

    const data = await makeRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Something went wrong with the proxy' });
  }
}
