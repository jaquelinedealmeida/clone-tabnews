import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersionResult = await database.query("SELECT version()");
  const postgresVersion = postgresVersionResult.rows[0].version;

  const maxConnectionsResult = await database.query("SHOW max_connections");
  const maxConnections = parseInt(
    maxConnectionsResult.rows[0].max_connections,
    10,
  );

  const usedConnectionsResult = await database.query(
    "SELECT COUNT(*) AS used_connections FROM pg_stat_activity",
  );
  const usedConnections = parseInt(
    usedConnectionsResult.rows[0].used_connections,
    10,
  );

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      postgres: {
        version: postgresVersion,
        max_connections: maxConnections,
        used_connections: usedConnections,
      },
    },
  });
}

export default status;
