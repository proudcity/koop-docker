#!/bin/bash
set -e
# PostgreSQL database name for koop
KOOP_DATABASE=${KOOP_DATABASE:-koopdev}
. $APP_DIR/config/scripts/create_db.sh
check_koop_db
cd $APP_DIR
echo "Starting the koop server..."
exec node server.js

