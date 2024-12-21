export async function login({ email, password }) {
  try {
    const res = await fetch(
      `http://localhost:3000/login`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }

    const data = await res.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error("Failed to login");
  }
}

export async function register({ eMail, password, firstName, LastName }) {
  try {
    const res = await fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: LastName,
        email: eMail,
        password: password,
      }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error during register:", error.message);
    throw new Error("Failed to register");
  }
}

export async function getCurrentUser(token) {
  const res = await fetch("http://localhost:3000/auth/profile", {
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

export async function setWalletPin({ token, Pin, confirmPin }) {
  console.log({ token, Pin, confirmPin });
  const res = await fetch("http://localhost:3000/wallet/set-pin", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pin: Number(Pin),
      confirm_pin: Number(confirmPin),
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to set pin: ${res.statusText}`);
  }

  const data = await res;
  console.log(data);
  // return res.json();
}
