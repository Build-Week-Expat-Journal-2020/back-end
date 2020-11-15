# back-end

## Heroku Deployed Site:

### User Requirements:

- unique `username`
- `password`

## Endpoint Descriptions:

| Action                           | URL                   | Method | Response                       |
| :------------------------------- | :-------------------- | :----- | :----------------------------- |
| Register a `user`                | /auth/register        | POST   | new `user` + `token`           |
| Log `user` in                    | /auth/login           | POST   | `user` + `token`               |
| Get all posts                    | /posts                | GET    | array of all `post` objects    |
| Get post by `id`                 | /posts/:id            | GET    | single `post` object           |
| Get all `post`s by single `user` | /posts/users/:user_id | GET    | array of `post`s by one `user` |
| Update single `post`             | /posts/:id            | PUT    | updated `post` object          |
| Delete single `post`             | /posts/:id            | DELETE | delete message                 |

### Notes:
- Logged in users can only update and delete their own posts.
- Logged in users can only post under their own user_id.
- All `/posts` endpoints require authentication.