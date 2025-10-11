# Contributing to RPI Computer Club Website

Thank you for your interest in contributing to the RPI Computer Club website! We appreciate your help in making this project better. Please take a moment to review this document for guidelines on how to contribute.

## 🌿 Branching Strategy

We follow a structured branching strategy to maintain an organized workflow:

- `main` - Production branch (protected)
  - Used only for production deployments
  - Must be stable at all times
  - Only updated via Pull Requests from `dev` branch

- `dev` - Development branch (protected)
  - Integration branch for all features
  - Must be stable for testing
  - All feature branches are merged here

- `gemini-ai` - AI Development Branch
  - For AI-related features and experiments
  - Regularly synced with `dev`

- `feature/*` - Feature branches
  - Naming: `feature/feature-name` (e.g., `feature/user-authentication`)
  - Created from `dev` branch
  - One feature per branch

- `fix/*` - Bug fix branches
  - Naming: `fix/issue-description` (e.g., `fix/login-button-style`)
  - Created from `dev` branch

## 🛠️ Development Workflow

### 1. Setting Up Your Environment

1. Fork the repository
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/rpicc-web.git
   cd rpicc-web/rpicc-client
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

### 2. Making Changes

1. Make your changes following the project's code style
2. Test your changes locally
3. Commit your changes with a clear message:
   ```bash
   git add .
   git commit -m "feat: add user authentication"
   # or
   git commit -m "fix: resolve login button styling"
   ```

### 3. Pushing Changes

1. Push your branch to your fork:
   ```bash
   git push origin your-branch-name
   ```
2. Open a Pull Request (PR) to the `dev` branch
3. Fill out the PR template with details about your changes
4. Request reviews from team members

## 📝 Code Style Guide

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write tests for new features

## 🧪 Testing

1. Run tests before pushing your code:
   ```bash
   npm test
   # or
   yarn test
   ```
2. Ensure all tests pass
3. Add new tests for your changes

## 🔄 Syncing Your Fork

1. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/RPI-Computer-Club-rpicc/rpicc-web.git
   ```
2. Fetch the latest changes:
   ```bash
   git fetch upstream
   ```
3. Merge changes into your branch:
   ```bash
   git checkout your-branch
   git merge upstream/dev
   ```

## 🤝 Code Review Process

1. All PRs require at least one approval
2. Address all review comments
3. Keep your PRs focused and small
4. Update documentation if needed

## 📦 Deployment

- `main` branch is automatically deployed to production
- `dev` branch is deployed to a staging environment
- Feature branches can be previewed using Vercel/Netlify preview deployments

## 🙏 Acknowledgments

Thank you for contributing to the RPI Computer Club website! Your help is greatly appreciated.

---
*Last updated: September 28, 2025*
