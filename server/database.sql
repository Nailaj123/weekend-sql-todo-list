CREATE TABLE "tasks"(
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(250) NOT NULL,
"completed" BOOLEAN NOT NULL,
);

INSERT INTO "tasks"( "task","completed");
VALUES('dishes',true);
INSERT INTO "tasks"( "task","completed");
VALUES('sweeping',false);
INSERT INTO "tasks"( "task","completed");
VALUES('litterbox',true);
INSERT INTO "tasks"( "task","completed");
VALUES('laundry',false);



-- select all tasks/display "tasks" table in postico
SELECT * FROM "tasks";