-- select * from boatrental.sailors where sid = (select * from boatrental.reserves where bid = 103);

-- select * from boatrental.reserves where bid = 103;

-- use boatrental;
-- select s.sname from sailors s, reserves r where s.sid = r.sid;

-- (SELECT sname FROM sailors WHERE sid IN (SELECT sid FROM reserves WHERE bid IN (SELECT bid FROM boats WHERE color="Red")));

-- SELECT distinct s.sid FROM sailors s, reserves r, boats b where s.sid = r.sid and r.bid = b.bid and b.color = "red";

-- select b.color
-- from sailors s, reserves r, boats b
-- where b.bid = r.bid
-- and r.sid = s.sid
-- and s.sname = 'Lubber';

-- select di stinct s.sname
-- from sailors s, reserves r, boats b
-- where b.bid = r.bid
-- and r.sid = s.sid
-- and ( b.color = 'red' or b.color = 'green' );

-- select distinct s.sname
-- from sailors s, reserves r1, boats b1, reserves r2, boats b2
-- where b1.bid = r1.bid
-- and r1.sid = s.sid
-- and b2.bid = r2.bid
-- and r2.sid = s.sid
-- and ( b1.color = 'red' and b2.color = 'green' ); -- name of sailors who booked both of red and green boat

-- SELECT sname, age 
-- FROM sailors
-- WHERE age >= 25 and age <= 35 -- where age between 25 and 35boatssailorsailorsailorsailors