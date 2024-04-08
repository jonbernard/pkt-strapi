import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi?.db?.lifecycles.subscribe({
      models: ["admin::user"],
      async afterCreate(event: any) {
        const { email } = event?.result;

        sendgrid.send({
          from: process.env.SENDGRID_EMAIL,
          templateId: "d-7e0661d4b04047e0b66ed20c2dac13d2",
          personalizations: [
            {
              to: { email },
              dynamicTemplateData: {
                ...event?.result,
                url: process.env.PUBLIC_URL,
              },
            },
          ],
        });
      },
    });
  },
};
