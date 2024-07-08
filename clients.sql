 CREATE TABLE IF NOT EXISTS clients (
        id serial PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        username VARCHAR(256) NOT NULL,
        email VARCHAR(256) NOT NULL
      );

select * from clients;

insert into clients (name, username, email) values ('Clementine Bauch', '@clementine', 'clementine@gmail.com');
insert into clients (name, username, email) values ('Jamie Johnson', 'jamiejohnson', 'jamiejohnson@example.com');
insert into clients (name, username, email) values ('Chris Lee', 'chrislee', 'chrislee@example.com');
insert into clients (name, username, email) values ('Pat Morgan', 'patmorgan', 'patmorgan@example.com');
insert into clients (name, username, email) values ('Taylor Brown', 'taylorbrown', 'taylorbrown@example.com');
insert into clients (name, username, email) values ('Jordan Davis', 'jordandavis', 'jordandavis@example.com');
insert into clients (name, username, email) values ('Drew Wilson', 'drewwilson', 'drewwilson@example.com');
insert into clients (name, username, email) values ('Sam Moore', 'sammoore', 'sammoore@example.com');
insert into clients (name, username, email) values ('Alex Taylor', 'alextaylor', 'alextaylor@example.com');
insert into clients (name, username, email) values ('Charlie White', 'charliewhite', 'charliewhite@example.com');
insert into clients (name, username, email) values ('Jordan Thomas', 'jordanthomas', 'jordanthomas@example.com');
insert into clients (name, username, email) values ('Casey Hall', 'caseyhall', 'caseyhall@example.com');
insert into clients (name, username, email) values ('令狐冲', 'linghuchong', 'linghuchong@example.com');
insert into clients (name, username, email) values ('山田', 'yamada', 'yamada@example.com');
insert into clients (name, username, email) values ('野口', 'nokuti', 'nokuti@example.com');
insert into clients (name, username, email) values ('山崎', 'yamasaki', 'yamasaki@example.com');
insert into clients (name, username, email) values ('山本', 'yamamoto', 'yamamoto@example.com');

-- 查询时间
SELECT NOW() as now;

select * from clients where name ilike '%tine%' limit 10;

-- 获取第一页的数据
select * from clients order by id limit 4 offset 0;

-- 获取第二页的数据
SELECT * FROM clients ORDER BY id LIMIT 4 OFFSET 4;

-- 获取第三页的数据
SELECT * FROM clients ORDER BY id LIMIT 4 OFFSET 8;

