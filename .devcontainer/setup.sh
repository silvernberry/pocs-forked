#!/bin/bash

# Get the current branch name
echo "Getting the current branch name..."
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Print the branch name
echo "Current branch: $BRANCH_NAME"

# Build only for master branch
if [ "$BRANCH_NAME" = "master" ]; then
  echo "Master Branch verified. Building Node..."
  cargo build --release
else
  echo "Not on master branch. Skipping build."
fi

# Restart bash for changes to take effect
echo "Restarting bash for changes to take effect..."
exec bash

# Run the Substrate node in development mode . STRICTLY USED FOR DEVELOPMENT PURPOSE ONLY
["./target/release/pocs", "--dev", "--rpc-external", "--rpc-cors=Unsafe"] &
