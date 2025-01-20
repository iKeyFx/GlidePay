import toast from "react-hot-toast";

export async function setWalletPin({ token, pin, confirm_pin }) {
  const res = await fetch("http://localhost:3000/wallet/set-pin", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pin: pin,
      confirm_pin: confirm_pin,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to set pin: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export async function fundWallet({ token, fundingAmount }) {
  const res = await fetch("http://localhost:3000/wallet/fund", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: fundingAmount,
      frontend_base_url: "https://www.example.com",
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to Verify Payment: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}

export async function verifyPayment({ token, status, tx_ref, tx_id }) {
  const res = await fetch(
    `http://localhost:3000/wallet/verify?status=${status}&tx_ref=${tx_ref}&transaction_id=${tx_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to Verify Payment: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export async function walletTransfer({ token, amount, pin, userAddress }) {
  const res = await fetch("http://localhost:3000/wallet/transfer", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: Number(amount),
      wallet_code_or_email: userAddress,
      wallet_pin: pin,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to Transfer Fund: ${errorData.message || res.statusText}`
    );
  }

  const data = await res.json();
  return data;
}

export async function withdrawToBank({
  token,
  amount,
  pin,
  bankName,
  bankAccount,
}) {
  const res = await fetch("http://localhost:3000/wallet/withdraw", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: Number(amount),
      bank_code: bankName,
      account_number: bankAccount,
      wallet_pin: pin,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to withdraw Fund: ${errorData.message || res.statusText}`
    );
  }

  const data = await res.json();
  return data;
}
