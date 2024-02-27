#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo apt-get update

# Install required dependencies
echo "Installing required dependencies..."
sudo apt install --assume-yes git build-essential clang curl libssl-dev protobuf-compiler

# Install Rust using rustup
echo "Installing Rust using rustup..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Source the cargo environment script to set up environment variables
echo "Sourcing the cargo environment script..."
source $HOME/.cargo/env

# Set default Rust version to stable
echo "Setting default Rust version to stable..."
rustup default stable   

# Install specific nightly version
echo "Installing specific nightly version..."
rustup install nightly-2023-12-21  

# Add WebAssembly target for nightly version (pallet-contracts compatible)
echo "Adding WebAssembly target for nightly version..."
rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21 

# Set nightly version as override 
echo "Setting nightly version as override..."
rustup override set nightly-2023-12-21  

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
