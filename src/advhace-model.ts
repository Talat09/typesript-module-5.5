interface Iuser {
  firstName: string;
  lastName: string;
}
interface IMethods {
  fullName(): string;
}
// uporer 2ta inter face mile another interface
interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}
// type model
type model = Model<Iuser, IMethods>;
// class ei type ta ke use korbe
class UserModel implements model {
  data: Iuser;
  methods: IMethods;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}
const user1 = new UserModel("Talat", "Mahmud");
console.log(user1.methods.fullName());
