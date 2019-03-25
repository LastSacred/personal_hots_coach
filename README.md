# Personal HotS Coach

  Personal HotS Coach is an application that allows the user to upload historical Heroes of the Storm match data. It then uses this data to provide an ordered list of heroes starting with the most likely choice to result in a win during a draft based on the user's performance on the map, and with and against the heroes that have been selected so far.

## What is HotS

  Heroes of the Storm wiki: https://en.wikipedia.org/wiki/Heroes_of_the_Storm

## Usage

  While this application is structured to support multiple users, the backend, at this stage in development, can not efficiently handle the workload from many users at once. If you would like to use this software I recommend cloning both the backend and the front end, and maintaining a private version of the database. In the future, I plan to restructure the solution to manage two databases, one to receive data and replicate to the other which will serve data.

### Frontend

  This is the browser frontend for the application. Personal HotS Coach Backend is also required. https://github.com/LastSacred/personal_hots_coach_backend

#### Starting Server

  Run `npm start` to start the front end server. If you are running the backend on the same computer you will be prompted to run the server from a different port

### Import

  The frontend import page functions but it is not optimal. If you would like to set your user up to update from the backend.
  After creating your user, go into the backend directory and access the console with `rails console`.
  Type `User.find_by(name: <your_user_name>).update(replay_path: <path_to_your_hots_replay_files>)`.
  If this is set up properly, Personal HotS Coach will automatically check for new replay files ever time you load the draft page.

  The import process uses http://hotsapi.net/ to parse replays.



















<!--
refactoring
stats
replay uploader app
parse replay files
multi-user performance
screen read
-->
