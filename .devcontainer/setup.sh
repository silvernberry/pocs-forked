# Build the project in release mode  
RUN cargo build --release

# Run the Substrate node in development mode . STRICTLY USED FOR DEVELOPMENT PURPOSE ONLY
CMD ["./target/release/pocs", "--dev", "--rpc-external", "--rpc-cors=Unsafe"] &
