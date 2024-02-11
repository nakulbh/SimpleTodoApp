package main

import (
	"fmt"
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


	client, ctx, cancel, err := connect(uri)
	if err != nil {
		panic(err)
	}

	database := client.Database("todos")

	todosCollection := database.Collection("todos")

	todo := todo{
		title:       "Dsa learning",
		description: "learning Dsa for exams",
		completed:   true,
	}

	insertResult, err := todosCollection.InsertOne(ctx, todo)
	if err != nil {
		panic(err)
	}
	fmt.Println(insertResult.InsertedID)

	defer close(client, ctx, cancel)
	ping(client, ctx)

}
