alias pm = python manage.py
alias activate = overlay use .venv/bin/activate.nu

use ./scripts.nu

open .env | from toml | load-env 

activate

# NOTE: need to create "nanocms" db manually
# podman run -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

pm migrate
pm createsuperuser --no-input
