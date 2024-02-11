package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")

	}

	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Fatal("MONGODB_URI not set")
	}

	client, ctx, cancel, err  := connect(uri)
	if err != nil {
		panic(err)
	}

	defer close(client, ctx, cancel)
	ping(client, ctx)
}

