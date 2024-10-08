# N220

Name: Charley Corneil
Date: Tuesday, October 8, 2024
live URL: 
Description: 

MIDTERM
For this assignment, you will create the following javascript application. You will complete an html file and a javascript file. Directions for each are outlined below:


HTML Instructions
1. Create the todo.html file 
2. Change the title to "Todo List" 
3. Add an h1 tag with the text "Todo List"
4. Add a text input tag with an id and name of "item"
5. Add a button tag with the text "Add Item" and onclick="addItem()"
6. Add a ul tag with an id of "list"
7. Add a hr tag
8. Add a button tag with the text "Summarize List" and onclick="summarizeList()"
9. Add a p tag with an id of "summary"
10. Link the todo.js script file
 


Javascript File
This web app should allow users to track a list of items to do

1. Create a variable to track the list of todo items
2. Create the addItem function that:
    2a. Gets the input from "item"
    2b. Adds it to the list of todo items
    2c. Updates the "list" ul tag to show all the items currently in the list
        2c. Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)
3. Create the summarizeList function that outputs the following to the summary p tag -these lines should be split with br tags ("<br />")-
    3a. "Total Items: "
        3a.This should show the total number of items in the list
    3b. "First Item: "
        3b. This should show the first item in the list
    3c. "Last Item: "
        3c. This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.