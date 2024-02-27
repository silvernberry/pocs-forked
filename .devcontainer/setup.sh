# Build the project in release mode  
RUN cargo build --release

# Expose the specified ports
EXPOSE 9944 9933 30333

# Run the Substrate node in development mode . STRICTLY USED FOR DEVELOPMENT PURPOSE ONLY
CMD ["./target/release/pocs", "--dev", "--rpc-external", "--rpc-cors=Unsafe"] 
