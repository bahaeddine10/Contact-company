#!/bin/sh
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  REACT_APP_API_BASE_URL: ""
};
EOF

exec nginx -g "daemon off;"