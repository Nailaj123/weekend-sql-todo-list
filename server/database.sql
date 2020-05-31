CREATE TABLE "tasks"(
"id" serial primary key,
"task" varchar(250) not null,
"completed" boolean default 'False'
);

-- select all tasks/display "tasks" table in postico
SELECT * FROM "tasks"