# csolution Web Site with Nextjs and MongoDB/Mongoose

## Configuration
### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

### Step 3. Run Next.js in development mode
```bash
npm install
npm run dev
```
Your app should be up and running on [http://localhost:3000](http://localhost:3000)
