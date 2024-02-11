package main

type todo struct {
	title       string `bson:"title,omitempty"`
	description string `bson:"description,omitempty"`
	completed   bool   `bson:"completed,omitempty"`
}


