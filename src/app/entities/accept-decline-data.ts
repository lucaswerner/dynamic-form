export class AcceptDeclineData {
  title: string;
  description: string;
  acceptText: string;
  declineText: string;

  constructor(
    options: {
      title?: string;
      description?: string;
      acceptText?: string;
      declineText?: string;
    } = {
      title: "Are you sure?",
      description: "Confirm action",
      acceptText: "Yes",
      declineText: "No"
    }
  ) {
    this.title = options.title;
    this.description = options.description;
    this.acceptText = options.acceptText;
    this.declineText = options.declineText;
  }
}
