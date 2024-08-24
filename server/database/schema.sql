create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(255) not null, 
  lastname varchar(255) not null, 
  email varchar(255) not null unique,
  password varchar(255) not null,
  role varchar(80) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

create table course (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  description text not null,
  category varchar(255) not null, 
  thumbnail varchar(255) not null,
  user_id int unsigned,
  foreign key(user_id) references user(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

create table lesson (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  content text not null,
  course_id int unsigned not null,
  foreign key(course_id) references course(id)
);

create table quiz (
  id int unsigned primary key auto_increment not null,
  title varchar(255),
  lesson_id int unsigned not null,
  foreign key(lesson_id) references lesson(id)
);

create table question (
  id int unsigned primary key auto_increment not null,
  text varchar(255),
  quiz_id int unsigned not null,
  foreign key(quiz_id) references lesson(id)
);

create table answer (
  id int unsigned primary key auto_increment not null,
  text varchar(255),
  question_id int unsigned not null,
  foreign key(question_id) references lesson(id)
);

create table enrollment (
  id int unsigned primary key auto_increment not null,
  course_id int unsigned not null,
  user_id int unsigned not null,
  foreign key(course_id) references course(id),
  foreign key(user_id) references user(id),
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);


insert into course (title, description, category, thumbnail) values ('Typescript course for beginners', 'This is essentialy a course about typescript for beginners. We will go around some of the core concepts about typescript and apply them in various projects. Join me to learn how to use ts and be job ready!', 'development web', ' https://res.cloudinary.com/dcogxwg2t/image/upload/v1724356365/e-learning/cjzvcxffrhsrialsaugh.avif');

INSERT INTO lesson (title, content, course_id) VALUES
('Introduction to TypeScript', '{"titre": "The \'any\' Type in TypeScript", "video": "https://youtu.be/wOa67sZyO54?si=dIeVpeGamvHXjfmt", "description": "The \'any\' type in TypeScript allows you to bypass type checking for a variable. A variable of type \'any\' can hold a value of any type, whether it is a number, a string, an array, or even an object. While this can offer flexibility, overusing \'any\' can diminish the benefits of TypeScript\'s static typing. It is generally recommended to avoid \'any\' as much as possible to maintain safe and predictable code.", "exemple_code": "let variable: any = \'Hello\';\\nvariable = 42;\\nvariable = { name: \'TypeScript\' };"}', 1),
('Advanced TypeScript', '{"titre": "Utility Types in TypeScript", "video": "https://youtu.be/6Hj56GdFpgs?si=vbHgvx4QUa19i49W", "description": "Utility types in TypeScript are predefined types that allow you to transform or manipulate other types. They facilitate the reuse and modification of existing types. Some of the most common utility types include \'Partial\', which makes all properties of a type optional, \'Readonly\', which prevents modification of properties, and \'Pick\', which allows you to select a subset of properties from a type. These tools enhance flexibility and robustness in TypeScript typing.", "exemple_code": "interface User { name: string; age: number; }\\nconst user: Partial<User> = { name: \'Alice\' };\\nconst readonlyUser: Readonly<User> = { name: \'Bob\', age: 25 };"}', 1);




