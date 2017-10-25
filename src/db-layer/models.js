import { Sequelize } from "sequelize";

const db_cred = config[process.env.STAGE];
console.log('config.host', db_cred.host);
console.log('config.host', db_cred.database);
export const sequelize = new Sequelize(db_cred);


// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   }).catch(err = > {
//   console.error('Unable to connect to the database:', err);
// })


export const User = sequelize.define(`user`, {
  active: {type: Sequelize.BOOLEAN, defaultValue: true},
  // userSub: {type: Sequelize.STRING, unique: true, allowNull: false},
  email: {type: Sequelize.STRING, unique: true, allowNull: false},
  firstName: {type: Sequelize.STRING, unique: false, allowNull: true},
  lastName: {type: Sequelize.STRING, unique: false, allowNull: true},
});
User.hasMany(Course, {as: 'courses', onDelete: 'CASCADE'});


export const Course = sequelize.define('course', {
  title: {type: Sequelize.STRING, unique: true, allowNull: false},
  description: {type: Sequelize.STRING, unique: true, allowNull: false},
  weight: {type: Sequelize.FLOAT, unique: true, allowNull: false},
  overview: {type: Sequelize.FLOAT, unique: true, allowNull: false}
});

export const Subject = sequelize.define('subject', {
  title: {type: Sequelize.STRING, unique: true, allowNull: false},
  description: {type: Sequelize.STRING, unique: true, allowNull: false},
});

Course.hasOne(Subject, {as: 'subject', onDelete: 'CASCADE'});


export const CourseModule = sequelize.define('course-module', {
  title: {type: Sequelize.STRING, unique: true, allowNull: false},
  description: {type: Sequelize.STRING, unique: true, allowNull: false},
  weight: {type: Sequelize.FLOAT, unique: true, allowNull: false},
});
Course.hasMany(CourseModule, {as: 'modules', onDelete: 'CASCADE'});


export const Content = sequelize.define('content', {
  title: {type: Sequelize.STRING, unique: true, allowNull: false},
  description: {type: Sequelize.STRING, unique: true, allowNull: false},
  weight: {type: Sequelize.FLOAT, unique: true, allowNull: false},
  item: ContentItemVideo | ContentItemImage | ContentItemFile | ContentItemText;
})

CourseModule.hasMany(Content, {as: 'content', onDelete: 'CASCADE'});

// export const Course = sequelize.define('', {})
