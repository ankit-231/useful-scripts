// Check if the csrf token is available in the environment
const csrfToken = pm.environment.get('csrf_token')

console.log(csrfToken, "csrfToken from environment")
// If CSRF token exists, set it in the headers
if (csrfToken) {
    pm.request.headers.add({
        key: 'X-CSRFToken',
        value: csrfToken
    });
} else {
    console.log("csrfToken not found from environment")
}

const refererUrl = pm.environment.get('base_url');
if (refererUrl) {
    pm.request.headers.add({
        key: 'Referer',
        value: refererUrl
    });
} else {
    console.log("refererUrl: `base_url` not found from environment")
}
