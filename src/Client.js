import client from "@sanity/client";

export default client({
  projectId: [YOUR_SANITY_PROJECT_ID],
  dataset: [HERE_WILL_BE_PRODUCTION],
  useCdn: true,
  apiVersion: [YEAR - MONTH - DATE],
});
