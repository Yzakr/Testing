export const BASE_URL = "http://localhost:5000";

export const GET = (uri) => () =>
	fetch(`${BASE_URL}/${uri}`, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		}
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.catch((error) => {
			console.error(error);
		});

export const POST = (uri) => (data) =>
	fetch(`${BASE_URL}/${uri}`, {
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.catch((error) => {
			console.error(error);
		});

export const PUT = (uri) => (data) =>
	fetch(`${BASE_URL}/${uri}`, {
		method: "put",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.catch((error) => {
			console.error(error);
		});

export const DELETE = (uri) => (data) =>
	fetch(`${BASE_URL}/${uri}`, {
		method: "delete",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data)
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})
		.catch((error) => {
			console.error(error);
		});
