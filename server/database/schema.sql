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
  thumbnail varchar(255) not null,
  user_id int unsigned,
  foreign key(user_id) references user(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

create table lesson (
  id int unsigned primary key auto_increment not null,
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
