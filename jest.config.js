module.exports = {
    preset: "jest-preset-angular",
    roots: ['src'],
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    transformIgnorePatterns: [
      "node_modules/(?!@ngrx|ngx-bootstrap|@progress|@angular/common/locales/pt)"
    ]
  }
  