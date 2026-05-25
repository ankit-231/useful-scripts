pm.test("Set csrf token to environment", function () {
    if (pm.response.code != 200) return
    // pm.environment.set("access_token", pm.response.json().data.access);
    // pm.environment.set("refresh_token", pm.response.json().data.refresh);
    const cookies = pm.cookies
    const csrfToken = cookies.get("csrftoken");
    console.log("CSRF Token (from request):", csrfToken);
    console.log("Session ID (from request) :", cookies.get("sessionid"));

    console.log("setting csrfToken to environment")
    pm.environment.set("csrf_token", csrfToken)
    console.log("successfully set csrfToken to environment")

});
