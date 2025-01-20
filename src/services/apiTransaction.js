import toast from "react-hot-toast";

export async function getUserhistory(token) {
  const res = await fetch("http://localhost:3000/transactions?limit=7&page=1", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to history: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export async function getWalletBalance(token) {
  try {
    const res = await fetch("http://localhost:3000/wallet/balance", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch wallet balance");
    }

    return data;
  } catch (error) {
    if (
      error.message ===
      "Please set your wallet pin before performing any transaction"
    ) {
      toast.error("Set up your wallet PIN to view balance");
    } else {
      throw error;
    }
  }
}

export async function getBank(token) {
  try {
    const res = await fetch("http://localhost:3000/wallet/banks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch wallet balance");
    }
    return data;
  } catch (error) {
    if (
      error.message ===
      "Please set your wallet pin before performing any transaction"
    ) {
      toast.error("Set up your wallet PIN to proceed with transactions");
    } else {
      throw error;
    }
  }
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

  const data = await res.json();
  return data;
}

export async function getUserhistoryFull({ token, page }) {
  try {
    const res = await fetch(
      `http://localhost:3000/transactions?limit=100&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch wallet balance");
    }

    return data;
  } catch (error) {
    if (
      error.message ===
      "Please set your wallet pin before performing any transaction"
    ) {
      toast.error("Set up your wallet PIN to see history");
    } else {
      throw error;
    }
  }
}
