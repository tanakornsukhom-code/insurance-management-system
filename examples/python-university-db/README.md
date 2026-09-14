# Python MySQL helper

A separate Python example for a local `university` database. This module is not used by the Ionic/PHP insurance application.

- `get_conn()` opens a MySQL connection.
- `fetch_all(sql, params)` returns rows as dictionaries.
- `execute(sql, params)` commits a statement or rolls back on a connector error.

Requires `mysql-connector-python` and an existing MySQL database. The university schema and application are not included. The supplied configuration uses localhost, the root user and an empty password. Configure a dedicated local account before use, and do not commit real credentials. Pass query values through `params` rather than interpolating them into SQL.

Syntax checked only; database execution has not been tested.
