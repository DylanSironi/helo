insert into users (
    username,
    password,
    profile_picture
) values (
    ${username},
    ${hash},
    ${profilePicture}
)
returning user_id, username, profile_picture;