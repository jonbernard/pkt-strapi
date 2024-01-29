const getUploadCreds = (str: string) => {
  const array = /cloudinary:\/\/(.*):(.*)@(.*)/g.exec(str);

  return {
    cloud_name: array[3],
    api_key: array[1],
    api_secret: array[2],
  };
};

export default ({ env }) => {
  const cloudinary = getUploadCreds(env("CLOUDINARY_URL"));

  return {
    documentation: {
      config: {
        "x-strapi-config": {
          plugins: ["menus", "upload", "users-permissions"],
        },
      },
    },
    "import-export-entries": {
      enabled: true,
    },
    redirects: {
      enabled: true,
    },
    "strapi-plugin-lottie": {
      enabled: true,
    },
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: cloudinary,
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
