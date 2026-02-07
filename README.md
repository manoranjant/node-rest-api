# REST api (Express)

crud opertations

# Set up

- mkdir simple-crud-api
- cd simple-crud-api
- npm init -y
- npm install express

# Testing with Curl - VS Code git bash

Create user

```curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name":"John","email":"john@test.com"}'

```

Get all users

```curl http://localhost:3000/users

```

Get one user

```curl http://localhost:3000/users/1

```

Update user

```curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/json" \
-d '{"name":"Johnny"}'

```

Delete user

```curl -X DELETE http://localhost:3000/users/1

```

# Push Code to git

- git init
- new-item .gitignore
