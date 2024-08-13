import { createModel } from "schemix";

export default createModel((UserModel) => {
  UserModel
    .relation("friends", UserModel, { list: true, name: "friends" })
    .relation("friendsRelation", UserModel, { list: true, name: "friends" })
});