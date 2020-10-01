const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  //input fields here
  title: {
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Default Title",
    },
    allowNull: false,
  },
  slug: {
    type: { type: Sequelize.STRING, allowNull: false },
    allowNull: false,
  },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: Sequelize.ENUM("open", "closed"),
});

const User = db.define("user", {
  //input fields here
  name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
});
Page.beforeCreate((userInstance, optionsObject) => {
    userInstance.title = generateSlug(userInstance.title)
  })
  function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }
module.exports = {
  db,
  Page,
  User,
};
