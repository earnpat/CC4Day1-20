SELECT name_en, name_th FROM student;
SELECT * FROM instructor;

SELECT * FROM student;

select * from student where faculty_id = 21;

INSERT INTO `cc4_earn`.`student`
(`id`,
`name_en`,
`name_th`,
`line_id`,
`faculty_id`,
`instructor_id`)
VALUES
(1212312, "Panda", "สมศักดิ์", "55555", 21, 700);

select * from student;

select * from student where faculty_id = (select id from faculty where name = "faculty of engineering");

drop table address;
