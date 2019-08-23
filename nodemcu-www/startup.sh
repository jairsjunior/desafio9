#!/bin/sh

# echo "BUILD_URL_API_BACKEND=$BUILD_URL_API_BACKEND"
# sed "s|BUILD_URL_API_BACKEND|$BUILD_URL_API_BACKEND|g" -i $(ls static/js/*.js | head -n 2)

/bin/parent caddy --conf=/etc/Caddyfile --log=stdout --agree=$ACME_AGREE