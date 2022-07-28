module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd470a3723ebd6e65096f72ea4aff8fc5'),
  },
});
