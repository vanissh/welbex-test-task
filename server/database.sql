-- скрипт для создания таблицы в бд 
CREATE TABLE unit (
    id integer NOT NULL,
    date character varying(255),
    name character varying(255),
    amount integer,
    distance integer
);

-- скрипт для добавления данных в бд
INSERT INTO unit (id, date, name, amount, distance) VALUES (1, '23.09.2022', 'uuu', 50, 1337);
INSERT INTO unit (id, date, name, amount, distance) VALUES (2, '23.09.2022', 'ureuo', 895, 9);
INSERT INTO unit (id, date, name, amount, distance) VALUES (3, '23.09.2022', 'ptp', 234, 573);
INSERT INTO unit (id, date, name, amount, distance) VALUES (4, '23.09.2022', 'nvncd', 124523, 44);
INSERT INTO unit (id, date, name, amount, distance) VALUES (5, '24.09.2022', 'hfuwehf', 7477, 999);
INSERT INTO unit (id, date, name, amount, distance) VALUES (6, '24.09.2022', 'test', 11111, 5555);
INSERT INTO unit (id, date, name, amount, distance) VALUES (7, '24.09.2022', 'test111', 277373, 636363);
INSERT INTO unit (id, date, name, amount, distance) VALUES (8, '24.09.2022', 'unit1', 1661, 0);


