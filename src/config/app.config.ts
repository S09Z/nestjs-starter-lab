export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      provider: process.env.DB_PROVIDER || 'postgresql',
      url: process.env.DATABASE_URL || 'postgres://localhost:5432/mydb',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'default_jwt_secret',
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
  });
  