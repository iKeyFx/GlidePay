export async function getUserhistory(token) {
  const res = await fetch(
    "http://localhost:3000/transactions?limit=7&page=1",
    // `http://localhost:3000/transactions`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to history: ${res.statusText}`);
  }

  return res.json();
}

export async function getWalletBalance(token) {
  const res = await fetch("http://localhost:3000/wallet/balance", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch profile: ${res.statusText}`);
  }

  return res.json();
}

export async function getBank(token) {
  const res = await fetch("http://localhost:3000/wallet/banks", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch profile: ${res.statusText}`);
  }

  return res.json();
}

export async function getUserCharts({ token, filter }) {
  const res = await fetch(
    `http://localhost:3000/transactions?limit=${filter}&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to history: ${res.statusText}`);
  }

  return res.json();
}

export async function getUserhistoryFull({ token, page }) {
  const res = await fetch(
    // `http://localhost:3000/transactions?limit=10&page=${page}`,
    `http://localhost:3000/transactions?limit=100&page=1`,
    // `http://localhost:3000/transactions`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to history: ${res.statusText}`);
  }

  return res.json();
}
