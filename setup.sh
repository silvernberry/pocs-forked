#!/bin/bash

# Update package lists and install required dependencies
apt-get update
apt-get install -y \
    build-essential \
    clang \
    curl \
    libssl-dev \
    protobuf-compiler 

# Install Rust using rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source $HOME/.cargo/env

# Set default and install specific nightly version
rustup default stable
rustup install nightly-2023-12-21
rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21
rustup override set nightly-2023-12-21

# Restart bash for changes to take effect
exec bash
