import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Fornece o caminho para o arquivo next.config.js e .env* files
  dir: "./",
});

// Adicione qualquer configuração personalizada do Jest aqui
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-node",
};

export default createJestConfig(customJestConfig);
