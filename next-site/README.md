# Drake Hotel Next.js Migration

This package contains the in-progress Next.js implementation of the Drake Hotel homepage. It was scaffolded with `create-next-app`,
configured with Tailwind CSS and shadcn/ui, and currently mirrors the static WordPress build while we rebuild the experience with
first-class React components.

## Local development

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000). All static assets that powered the original WordPress
build are available via the `public/` symlinks so you can reference them exactly as they existed in production.

## Quality checks

The project inherits the default Next.js lint command:

```bash
npm run lint
```

Run the lint task before committing to make sure the generated TypeScript routes and components stay type-safe and conform to the
shared ESLint configuration.

## Creating a GitHub branch

To publish the current state of the migration to GitHub under a new branch, run the following commands from the repository root:

```bash
# make sure you are up to date
git fetch origin

# create the branch locally if it does not exist yet
BRANCH_NAME="feature/nextjs-index"
git checkout -b "$BRANCH_NAME"

# push the local branch to GitHub
git push -u origin "$BRANCH_NAME"
```

If the branch already exists on the remote, replace the `git checkout -b` line with `git checkout "$BRANCH_NAME"` before pushing.
Once the branch is on GitHub you can open a pull request for review.
