/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_rdb0vWHI1sqh@ep-quiet-meadow-a9vv0vxj-pooler.gwc.azure.neon.tech/neondb?sslmode=require',
    }
  };