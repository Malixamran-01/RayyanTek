export const ContactLead = {
  async create(data) {
    // Simulate network delay and log the payload
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("ContactLead.create", data);
    return { id: Math.random().toString(36).slice(2), status: "ok" };
  },
};

export default ContactLead;


