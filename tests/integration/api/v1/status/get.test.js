import { expectNoPendingImmediates } from "next/dist/server/node-environment-extensions/fast-set-immediate.external";

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.dependencies.postgres.version).toBeDefined();
  console.log("Response body:", responseBody);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const postgresVersion = responseBody.dependencies.postgres.version;
  expect(postgresVersion).toMatch(/^PostgreSQL \d+\.\d+(\.\d+)?/);
  console.log("PostgreSQL version:", postgresVersion);

  const maxConnections = responseBody.dependencies.postgres.max_connections;
  expect(maxConnections).toBeDefined();
  expect(maxConnections).toBeGreaterThan(0);

  const usedConnections = responseBody.dependencies.postgres.used_connections;
  expect(usedConnections).toBeDefined();
  expect(usedConnections).toBeGreaterThanOrEqual(0);
});
