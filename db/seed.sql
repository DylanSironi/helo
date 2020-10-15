create table users(
    id serial primary key,
    username varchar(25),
    password varchar(250),
    profile_picture text
);

create table posts(
    id serial primary key,
    title varchar(45),
    img varchar(2083),
    constent text,
    author_id integer references users(id)
);