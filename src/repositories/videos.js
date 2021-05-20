import URL_BACKEND from '../config'

const URL_CATEGORIES = `${URL_BACKEND}/categorias`

function create(object) {
	return fetch(`${URL_CATEGORIES}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(object),
	}).then(async response => {
		if (response.ok) {
			const res = await response.json()
			return res
		}

		throw new Error('Error Unknow on register')
	})
}

export default { create }
