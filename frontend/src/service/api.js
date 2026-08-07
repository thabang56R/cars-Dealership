const API_BASE = "http://localhost:8000"; // Django backend

export async function getDealers() {
  const res = await fetch(`${API_BASE}/dealers/`);
  return res.json();
}

export async function getDealerById(id) {
  const res = await fetch(`${API_BASE}/dealer/${id}/`);
  return res.json();
}

export async function getDealerReviews(id) {
  const res = await fetch(`${API_BASE}/dealer/${id}/reviews/`);
  return res.json();
}

export async function loginUser(username, password) {
  const res = await fetch(`${API_BASE}/login/`, {
    method: "POST",
    body: new URLSearchParams({ username, password })
  });
  return res.json();
}

export async function logoutUser() {
  const res = await fetch(`${API_BASE}/logout/`);
  return res.json();
}
