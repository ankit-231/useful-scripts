if (pm.response.code == 200) {
    postman.setEnvironmentVariable("access_token", pm.response.json().data.access);
    postman.setEnvironmentVariable("refresh_token", pm.response.json().data.refresh);
}
