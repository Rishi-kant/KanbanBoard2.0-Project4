


Kanban Group React JS Project:-
This is a collaborative Kanban board project developed by Shivani, Rishi, Neeru, and Maneesha. The purpose of this project is to create a digital Kanban board using React JS and implement drag-and-drop functionality for managing tasks and workflows.

Table of Contents:-
Introduction
Features
Getting Started
Contributors


Introduction:-
A Kanban board is an effective tool for visualizing workflows and managing tasks or projects. This project aims to provide a digital Kanban board with intuitive drag-and-drop functionality, enabling users to easily move tasks between different stages of their workflow.


Features:-
Interactive and user-friendly interface.
Create, update, and delete tasks.
Drag and drop tasks between different stages.
Visualize the progress of tasks using customizable labels.
Assign tasks to team members.
Add due dates and reminders for tasks.
Responsive design for optimal viewing on different devices.

Getting Started:-
We are using React in this project.
=> first of all we installed the basic structure by using npm create vite because we are using VITE here in this project.
=> Then we created a component folder, in which we will maintain all the reusable part of the UI. A navBar folder in which we maintin navbar of this project.
=> In this project we are going to use Recoil library for the state management.
=> We are going to use React-Beautifull-DND library for implimenting drag and drop functionality.
=> We will use the LocalStorage also whenever there is requirement.
=> We will deploy this project on the Rendor.com.

Data Structure which we are following in our pproject :-

const board = {
columns: [
{
id: 1,
title:dummy,
cards: [
{
id: 1,
title: '',
description: '',
},
]
},

{
id: 2,
title: dummy,
cards: [
{
id: 2,
title: '',
description: '',
activity:[` Created at ${time} `]
},
]
}
]
}


Contributors:-
Shivani Shukla,
Rishi kant,
maneesha kumari ,
Neeru
