export const APP_ROUTES = {
  private: {
    dashboard: "/dashboard",
    producers: {
      root: "/producers",
      create: "/producers/create",
      edit: "/producers/:id",
    },
  },
  public: {
    signin: "/signin",
  },
};
