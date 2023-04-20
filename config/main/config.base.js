const config = {}
config.port = process.env.LISTENING_PORT || 8444;
config.base_url = process.env.BASE_URL || "";
module.exports = config;