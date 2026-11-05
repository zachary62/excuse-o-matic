# Excuse-O-Matic 3000

The demo app from a CI/CD tutorial: a one-page excuse generator in plain HTML and JavaScript,
a unit test that Node runs with `node --test`, and a GitHub Actions workflow that tests every
push and pull request and deploys to GitHub Pages only after the tests pass.

Live site: https://zachary62.github.io/excuse-o-matic/

The commit history replays the tutorial's story in order, bugs included: an off-by-one that
went live, a missing comma, CI on every push, a deploy job that `needs: test`, a pull request
held back by a required check, and a revert. The Actions tab keeps every run.
