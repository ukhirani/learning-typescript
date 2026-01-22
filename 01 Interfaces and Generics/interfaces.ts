interface User {
  name: string;
  id: number;
}

// then why use interface if we have "types"

// well we can do this
interface PaidUser extends User {
  subscriptionDate: Date;
}

interface TrialUser extends User {
  expiryDate: Date;
}
